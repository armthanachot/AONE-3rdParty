const _ = undefined

const RESPONSE_STATUS = {
    OK:"OK",
    CREATED:"CREATED",
    BAD_REQUEST:"BAD_REQUEST",
    NOT_FOUND:"NOT_FOUND",
    INTERNAL_SERVER_ERROR:"INTERNAL_SERVER_ERROR"
}
const STATUS = {
    ACTIVE:"ACTIVE",
    INACTIVE:"INACTIVE",
    DELETED:"DELETED"
}
const PRODUCT_HOST = "http://localhost"
const PRODUCT_SERVER = "http://119.59.116.118"
const PRODUCT_PORT = 3107
const API_PREFIX = "api"
const PRODUCT_API = `${PRODUCT_SERVER}:${PRODUCT_PORT}/${API_PREFIX}/products`
const PRIVATE_KEY_PATH = `../constant/private.key`
const SERVICE_NAME = {
    CUSTOMER: "CUSTOMER (MW)",
    AGENT: "AGENT",
    CALENDAR: "CALENDAR",
}
export {
    _,
    RESPONSE_STATUS,
    STATUS,
    PRODUCT_API,
    PRIVATE_KEY_PATH,
    SERVICE_NAME
}