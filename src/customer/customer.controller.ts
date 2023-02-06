/**
 * 
 * COMMON LIB
 */
import { Body, Controller, Delete, Get, Post, Put, Req, Res, UsePipes } from '@nestjs/common';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"

/**
 * 
 * SCHEMA | PIPE
 */

import * as validator from "../../validator/customer.validator"
/**
 * 
 * UTILS
 */
import { responseMessages } from "../../util/response"
/**
 * 
 * SERVICE
 */
import { CustomerService } from "./customer.service"
import { ClientService } from "../client/client.service"
/**
 *
 * CONSTANTS
 */
import { _, SERVICE_NAME } from "../../constant/config"
import { MW_ONE_CUSTOMER_ADDR_KEY, MW_ONE_CUSTOMER_KEY } from "../../constant/customer"
/**
 * 
 * DB OPTIONS
 */
import { beginTransaction, commit, rollback } from "../../config/db_connection"
import { renameObjectKey, userAgent } from 'util/app';
@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService, private readonly clientService: ClientService) { }

    /** CREATE CUSTOMER BY 3 RD PARTY */
    @Post()
    async create(@Req() req: any, @Res() res: Response, @Body() payload) {
        try {
            await beginTransaction()
            const { token } = req

            /** LOGGING */
            const uAgent = await userAgent(req)
            const log = Object.assign({}, { payload: JSON.stringify(payload), createdBy: token }, uAgent, { serviceName: SERVICE_NAME.CUSTOMER })
            await this.clientService.logging(log)

            /** VALIDATE */
            const validated: any = await validator.createCustomer(payload.customers)
            if (validated.message) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, validated.message, []))
            if (validated.length) return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(await responseMessages(StatusCodes.UNPROCESSABLE_ENTITY, "FAILED", validated))

            /** CREATION FLOW */
            await this.customerService.createCustomerTempTable()
            let affected = null
            for (let customer of payload.customers) {
                customer = await renameObjectKey(customer, MW_ONE_CUSTOMER_KEY)
                const { customerCode } = customer
                const [one, m] = customerCode.split('/')
                customer.customerCode = one
                affected = await this.customerService.createCustomerTemp(customer)
            }
            await this.customerService.updateCustomerWithTemp()
            const customers: any = await this.customerService.findAllCustomer()
            await this.customerService.dropTempTable('temp_customers')
            const { message, values } = customers
            if (values.length) {
                await rollback()
                return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, message, values))
            }
            await commit()
            return res.status(StatusCodes.CREATED).json(await responseMessages(StatusCodes.CREATED, message, values))
        } catch (error) {
            await rollback()
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, error.message))
        }
    }

    /** CREATE CUSTOMER ADDRESS BY 3 RD PARTY */
    @Post('address')
    async createCustomerAddress(@Req() req: any, @Res() res: Response, @Body() payload) {
        try {
            await beginTransaction()
            const { token } = req

            /** LOGGING */
            const uAgent = await userAgent(req)
            const log = Object.assign({}, { payload: JSON.stringify(payload), createdBy: token }, uAgent, { serviceName: SERVICE_NAME.CUSTOMER })
            await this.clientService.logging(log)
            const { addresses } = payload

            /** VALIDATE */
            const validated: any = await validator.createCustomerAddress(addresses)
            if (validated.message) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, validated.message, []))
            if (validated.length) return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(await responseMessages(StatusCodes.UNPROCESSABLE_ENTITY, "FAILED", validated))

            /** CREATION FLOW */
            await this.customerService.createCustomerAddressTempTable()
            let affected = null
            for (let cstm_address of addresses) {
                cstm_address = await renameObjectKey(cstm_address, MW_ONE_CUSTOMER_ADDR_KEY)
                affected = await this.customerService.createCustomerAddressTemp(cstm_address)
            }
            affected = await this.customerService.updateCustomerAddressWithTemp()
            const { message, values } = affected
            delete affected.message
            if (values.length) {
                await this.customerService.dropTempTable("temp_customer_addresses")
                return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, message, values))
            }
            await this.customerService.dropTempTable("temp_customer_addresses")
            await commit()
            return res.status(StatusCodes.CREATED).json(await responseMessages(StatusCodes.CREATED, message, values))
        } catch (error) {
            await rollback()
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, error.message))
        }
    }

}
