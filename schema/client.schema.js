"use strict";
exports.__esModule = true;
exports.USER_LOGOUT = exports.CLIENT_LOGIN = exports.SINGUP = void 0;
var joi = require("joi");
var SINGUP = joi.object({
    appName: joi.string().required(),
    host: joi.string().required(),
    description: joi.string().allow(null, "").required()
});
exports.SINGUP = SINGUP;
var CLIENT_LOGIN = joi.object({
    clientId: joi.string().required(),
    clientSecret: joi.string().required()
});
exports.CLIENT_LOGIN = CLIENT_LOGIN;
var USER_LOGOUT = joi.object({
    clientId: joi.string().required()
});
exports.USER_LOGOUT = USER_LOGOUT;
