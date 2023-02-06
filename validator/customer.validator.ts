import { MSG } from "constant/errmsg"
import { CUSTOMER, CUSTOMER_ADDRESS } from "../schema/customer.schema"
import { schemaValidator } from "../util/app"

const createCustomer = async (customers) => {
    if (!customers.length) return { message: MSG.SCHEMA.NOT_EMPTY }
    const error_info = []
    for (const customer of customers) {
        const validated = await schemaValidator(customer, CUSTOMER)
        if (validated.message) {
            const { MiddleRef } = customer
            error_info.push({ key: "MiddleRef", value: MiddleRef, message: validated.message })
        }
    }
    return error_info
}

const createCustomerAddress = async(addresses)=>{
    if (!addresses.length) return { message: MSG.SCHEMA.NOT_EMPTY }
    const error_info = []
    for (const address of addresses) {
        const validated = await schemaValidator(address, CUSTOMER_ADDRESS)
        if (validated.message) {
            const { MiddleRef } = address
            error_info.push({ key: "MiddleRef", value: MiddleRef, message: validated.message })
        }
    }
    return error_info
}
export {
    createCustomer,
    createCustomerAddress
}

