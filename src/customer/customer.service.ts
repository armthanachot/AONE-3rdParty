import { Injectable } from '@nestjs/common';
import * as customerModel from "./customer.model"
import { MSG } from "../../constant/errmsg"
@Injectable()
export class CustomerService {
    async findAllCustomer() {
        const customers = await customerModel.findAllCustomer()
        const values = []
        await customers.map((customer) => {
            if (customer.customerCode === null) {
                const { tMiddleRef, tCustomerCode } = customer
                values.push({ key: "MiddleRef", value: tMiddleRef, message: `customerCode: ${tCustomerCode}, ${MSG.CUSTOMER.NOT_FOUND_IN_AONE}` })
            }
        })
        let result = {}
        result = values.length ? result = { message: "FAILED" } : result = { message: "COMMITED" }
        const all_customer = Object.assign({}, result, { values })
        return all_customer
    }
    async findCustomerByCustomerCode(filter){
        const customer = await customerModel.findCustomerByCustomerCode(filter)
        return customer
    }
    async findAllCustomerAddressTemp() {
        const customers = await customerModel.findAllCustomerAddressTemp()
        return customers
    }
    async createCustomerTempTable() {
        const created = await customerModel.createCustomerTempTable()
        return created
    }
    async createCustomerAddressTempTable() {
        const created = await customerModel.createCustomerAddressTempTable()
        return created
    }
    async createCustomerTemp(customer) {
        const created = await customerModel.createCustomerTemp(customer)
        return created
    }
    async createCustomerAddressTemp(address) {
        const created = await customerModel.createCustomerAddressTemp(address)
        return created
    }

    async updateCustomerWithTemp() {
        const created = await customerModel.updateCustomerWithTemp()
        return created
    }
    async updateCustomerAddressWithTemp() {
        let created = await customerModel.updateCustomerAddressWithTemp()
        const [[result], rowDataPacket] = created
        const { message, failCustomers } = result
        if (failCustomers) {
            const fail = JSON.parse(failCustomers)
            const { values } = fail
            await values.map((value) => {
                const { MiddleRef, customerCode } = value
                Object.assign(value, { key: "MiddleRef", value: MiddleRef, message: `customerCode: ${customerCode}, ${MSG.CUSTOMER.NOT_FOUND_IN_AONE}` })
                delete value.customerCode
                delete value.MiddleRef
            })
            Object.assign(result, { values })
        }
        if (!result.values) result.values = []
        delete result.failCustomers
        return result
    }

    async dropTempTable(table_name) {
        const droped = await customerModel.dropTable(table_name)
        return droped
    }

}
