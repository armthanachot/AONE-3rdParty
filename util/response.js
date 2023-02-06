"use strict";
exports.__esModule = true;
exports.responseMessages = void 0;
var http_status_codes_1 = require("http-status-codes");
var responseMessages = function (code, message, data) {
    try {
        var msg = message || http_status_codes_1.getReasonPhrase(code);
        return {
            code: code,
            message: msg,
            data: data
        };
    }
    catch (error) {
        console.log("error: ", error.message);
        return false;
    }
};
exports.responseMessages = responseMessages;
