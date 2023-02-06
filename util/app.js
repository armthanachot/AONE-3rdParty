"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.renameObjectKey = exports.userAgent = exports.passwordHash = exports.schemaValidator = exports.removeUselessKey = exports.hadleCustomerFileFields = exports.handleFileFields = exports.toSnakeCase = exports.fullUrl = exports.stringToArray = exports.findOne = exports.generateCode = void 0;
var cryptoJS = require("crypto-js");
var config_1 = require("../constant/config");
var INACTIVE = config_1.STATUS.INACTIVE;
var generateCode = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Math.floor(Math.random() * 1000000000)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.generateCode = generateCode;
var findOne = function (object) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, object[0]];
            case 1: return [2 /*return*/, (_a.sent()) || {}];
        }
    });
}); };
exports.findOne = findOne;
var stringToArray = function (str) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, str.split(',')];
    });
}); };
exports.stringToArray = stringToArray;
var fullUrl = function (_a) {
    var protocol = _a.protocol, hostname = _a.hostname, url = _a.url;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, protocol + "://" + hostname + url];
        });
    });
};
exports.fullUrl = fullUrl;
var toSnakeCase = function (str) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (item) { return item.toLowerCase(); }).join('_')];
}); }); };
exports.toSnakeCase = toSnakeCase;
var handleFileFields = function (fields, files) { return __awaiter(void 0, void 0, void 0, function () {
    var key_1;
    return __generator(this, function (_a) {
        try {
            key_1 = Object.keys(fields);
            files.map(function (item) {
                var fileField = item.fileField, filePath = item.filePath, fileStatus = item.fileStatus;
                if (key_1.includes(fileField) && fileStatus !== INACTIVE)
                    fields[fileField].push(filePath);
            });
            return [2 /*return*/, fields];
        }
        catch (error) {
            console.log(error.message);
            return [2 /*return*/, false];
        }
        return [2 /*return*/];
    });
}); };
exports.handleFileFields = handleFileFields;
var hadleCustomerFileFields = function (files) { return __awaiter(void 0, void 0, void 0, function () {
    var file_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                file_1 = { files: [] };
                return [4 /*yield*/, files.map(function (item) {
                        var type = item.fieldname, fileType = item.mimetype, fileName = item.name, fileSize = item.size, filePath = item.path;
                        file_1.files.push({ type: type, fileType: fileType, fileName: fileName, fileSize: fileSize, filePath: filePath });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, file_1];
            case 2:
                error_1 = _a.sent();
                console.log(error_1.message);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.hadleCustomerFileFields = hadleCustomerFileFields;
var removeUselessKey = function (obj, keys) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, keys.forEach(function (key) { return delete obj[key]; })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.removeUselessKey = removeUselessKey;
var schemaValidator = function (data, schema) { return __awaiter(void 0, void 0, void 0, function () {
    var validated, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, schema.validateAsync(data)];
            case 1:
                validated = _a.sent();
                return [2 /*return*/, validated];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, error_2];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.schemaValidator = schemaValidator;
var passwordHash = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    var salt, pw, encrypted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                salt = Math.random().toString(36).substring(2);
                pw = password + salt;
                return [4 /*yield*/, cryptoJS.SHA256(pw)];
            case 1:
                encrypted = _a.sent();
                return [2 /*return*/, { salt: salt, encrypted: encrypted.toString() }];
        }
    });
}); };
exports.passwordHash = passwordHash;
var userAgent = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                ip: req.ip,
                headers: JSON.stringify(req.headers),
                userAgent: req.get("user-agent"),
                endpoint: req.path
            }];
    });
}); };
exports.userAgent = userAgent;
var renameObjectKey = function (obj, key_pair) { return __awaiter(void 0, void 0, void 0, function () {
    var obj_key;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                obj_key = Object.keys(obj);
                return [4 /*yield*/, key_pair.map(function (key) {
                        if (obj_key.includes(key.old)) {
                            obj[key["new"]] = obj[key.old];
                            delete obj[key.old];
                        }
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, obj];
        }
    });
}); };
exports.renameObjectKey = renameObjectKey;
