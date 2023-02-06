import * as joi from "joi"
const SINGUP = joi.object({
    appName:joi.string().required(),
    host:joi.string().required(),
    description:joi.string().allow(null,"").required()
})
const CLIENT_LOGIN = joi.object({
    clientId:joi.string().required(),
    clientSecret:joi.string().required()
})
const USER_LOGOUT = joi.object({
    clientId:joi.string().required()
})
export {
    SINGUP,
    CLIENT_LOGIN,
    USER_LOGOUT
}