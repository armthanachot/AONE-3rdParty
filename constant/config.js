"use strict";
exports.__esModule = true;
exports.SERVICE_NAME = exports.PRIVATE_KEY_PATH = exports.PRODUCT_API = exports.STATUS = exports.RESPONSE_STATUS = exports._ = void 0;
var _ = undefined;
exports._ = _;
var RESPONSE_STATUS = {
    OK: "OK",
    CREATED: "CREATED",
    BAD_REQUEST: "BAD_REQUEST",
    NOT_FOUND: "NOT_FOUND",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR"
};
exports.RESPONSE_STATUS = RESPONSE_STATUS;
var STATUS = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    DELETED: "DELETED"
};
exports.STATUS = STATUS;
var PRODUCT_HOST = "http://localhost";
var PRODUCT_SERVER = "http://119.59.116.118";
var PRODUCT_PORT = 3107;
var API_PREFIX = "api";
var PRODUCT_API = PRODUCT_SERVER + ":" + PRODUCT_PORT + "/" + API_PREFIX + "/products";
exports.PRODUCT_API = PRODUCT_API;
var PRIVATE_KEY_PATH = "../constant/private.key";
exports.PRIVATE_KEY_PATH = PRIVATE_KEY_PATH;
var SERVICE_NAME = {
    CUSTOMER: "CUSTOMER (MW)",
    AGENT: "AGENT",
    CALENDAR: "CALENDAR"
};
exports.SERVICE_NAME = SERVICE_NAME;
