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
import { CLIENT_LOGIN, SINGUP, USER_LOGOUT } from "../../schema/client.schema"
import { ThirdPartyPipe } from "../3rd-party.pipe"
/**
 * 
 * SERVICE
 */
import { ClientService } from "./client.service"
/**
* 
* UTILS
*/
import { responseMessages } from "../../util/response"
import { generateId, generateJWT, checkHostName, verifyPassword } from "../../util/auth"
import { findOne, removeUselessKey, passwordHash } from "../../util/app"
/**
 * 
 * CONSTANTS
 */
import { _, STATUS } from "../../constant/config"
import { MSG } from 'constant/errmsg';
const { ACTIVE, INACTIVE, } = STATUS

@Controller('clients')
export class ClientController {
    constructor(private readonly clientService: ClientService) { }
    @Post('/signup')
    @UsePipes(new ThirdPartyPipe(SINGUP))
    async signup(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            const { clientId, clientSecret } = await generateId()
            const { salt, encrypted } = await passwordHash(clientSecret)
            Object.assign(payload, { clientId, clientSecret: encrypted, salt })
            const signedup = await this.clientService.clientSingup(payload)
            return res.status(StatusCodes.OK).json(await responseMessages(StatusCodes.OK, _, { clientId, clientSecret }))
        } catch (error) {
            console.log(error.message);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }
    @Post('/login')
    @UsePipes(new ThirdPartyPipe(CLIENT_LOGIN))
    async clientLogin(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            const { clientId, clientSecret } = payload
            if (!clientId || !clientSecret) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, _, MSG.CLIENT.INVALID_CLIENT))
            const filter = { clientId, status: ACTIVE }
            const validClient: any = await this.clientService.findClientByClientId(filter)
            if (!validClient.length) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, _, MSG.CLIENT.INVALID_CLIENT))
            const { appName, host, clientSecret: password, salt }: any = await findOne(validClient)
            const logedin = await verifyPassword(`${clientSecret + salt}`, password)
            if (!logedin) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, _, MSG.CLIENT.INVALID_CREDENTIAL))

            const jwt = await generateJWT({ appName, host,clientId })
            /**
             * 
             * CREATE CLIENT LOGIN
             */
            await this.clientService.updateClientToken(jwt, clientId)
            const client = Object.assign({ employeeCode: clientId }, { token: jwt }, { ip: req.ip }),
                created = await this.clientService.createEmployeeLogin(client)
            return res.status(StatusCodes.OK).json(await responseMessages(StatusCodes.OK, _, jwt))
        } catch (error) {
            console.log(error.message);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }

    @Put('/logout')
    @UsePipes(new ThirdPartyPipe(USER_LOGOUT))
    async logout(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            const { clientId } = payload
            const authorization = req.headers.authorization
            if (!authorization) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, MSG.CLIENT.INAVALID_AUTHORIZATION))
            const [tokenType, token] = authorization.split(' ')
            /**
             * 
             * CHECK IS EXIST EMPLOYEE
             */
            let filter = null
            filter = { clientId, status: ACTIVE }
            let client = await this.clientService.findClientByClientId(filter)
            if (!client.length) return res.status(StatusCodes.NOT_FOUND).json(await responseMessages(StatusCodes.NOT_FOUND, _))
            /**
             * 
             * LOGOUT
             */
            client = { employeeCode: clientId, status: false, token }
            let logedout = await this.clientService.updateClientToken(null, clientId)
            logedout = await this.clientService.logout(client)
            return res.status(StatusCodes.OK).json(await responseMessages(StatusCodes.OK, _))
        } catch (error) {
            console.log(error.message);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }
}
