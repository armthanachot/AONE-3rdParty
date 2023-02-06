"use strict";
exports.__esModule = true;
exports.CONTACT_FILE_TYPE = exports.STORE_FILE_TYPE = exports.SUB_FILE_TOPIC = exports.FILE_TOPIC = exports.USELESSKEY = exports.STORE_TYPE = void 0;
var STORE_TYPE = {
    MATERIAL: "MATERIAL"
};
exports.STORE_TYPE = STORE_TYPE;
var USELESSKEY = {
    FINDBYID: {
        AGENT: ["agentContactId", "agentContactCode", "contactName", "positionId", "contactPhone", "line", "email", "citizenId", "contactNickname", "dateOfBirth", "spouseName", "spouseDateOfBirth", "numberOfChild", "favorite", "unfavorite", "characteristic"],
        ADDRESS: ["addressType", "address", "road", "soi", "provinceId", "districtId", "subDistrictId", "zipcode", "latitude", "longitude"]
    }
};
exports.USELESSKEY = USELESSKEY;
var FILE_TOPIC = "agent";
exports.FILE_TOPIC = FILE_TOPIC;
var SUB_FILE_TOPIC = "contact";
exports.SUB_FILE_TOPIC = SUB_FILE_TOPIC;
var STORE_FILE_TYPE = {
    CERTIFICATE: "CERTIFICATE",
    WORDMAP20: "WORDMAP20",
    PROFILE: "PROFILE"
};
exports.STORE_FILE_TYPE = STORE_FILE_TYPE;
var CONTACT_FILE_TYPE = {
    CITIZENID: "CITIZENID"
};
exports.CONTACT_FILE_TYPE = CONTACT_FILE_TYPE;
