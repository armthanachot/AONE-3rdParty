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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.verifyPassword = exports.verifyToken = exports.checkHostName = exports.generateJWT = exports.generateId = exports.passwordHash = void 0;
var jwt = require("jsonwebtoken");
var fs = require("fs");
var path = require("path");
var dns = require("dns");
var util = require("util");
var cryptoJS = require("crypto-js");
var config_1 = require("../constant/config");
var lookup = util.promisify(dns.lookup);
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
var generateId = function () { return __awaiter(void 0, void 0, void 0, function () {
    var id, client, cliendId, clientSecret;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = [];
                client = {
                    clientId: null,
                    clientSecret: null
                };
                return [4 /*yield*/, Promise.all(Object.keys(client).map(function (key) {
                        return id.push(__spreadArray([], Array(40)).map(function (i) { return (~~(Math.random() * 36)).toString(36); }).join(''));
                    }))];
            case 1:
                _a.sent();
                cliendId = id[0], clientSecret = id[1];
                client.clientId = cliendId;
                client.clientSecret = clientSecret;
                return [2 /*return*/, client];
        }
    });
}); };
exports.generateId = generateId;
var generateJWT = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var private_key, token, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                private_key = fs.readFileSync(path.resolve(__dirname, config_1.PRIVATE_KEY_PATH));
                return [4 /*yield*/, jwt.sign(payload, private_key, { expiresIn: '1 day' })];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_1 = _a.sent();
                console.log(error_1.message);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.generateJWT = generateJWT;
var checkHostName = function (hostname) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, lookup(hostname)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2:
                error_2 = _a.sent();
                console.log(error_2.message);
                return [2 /*return*/, { message: error_2.message }];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.checkHostName = checkHostName;
var verifyToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var private_key, verified, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                private_key = fs.readFileSync(path.resolve(__dirname, config_1.PRIVATE_KEY_PATH));
                return [4 /*yield*/, jwt.verify(token, private_key)];
            case 1:
                verified = _a.sent();
                return [2 /*return*/, verified];
            case 2:
                error_3 = _a.sent();
                console.log(error_3.message);
                return [2 /*return*/, { status: false, message: error_3.message }];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.verifyToken = verifyToken;
var verifyPassword = function (password, hashed) { return __awaiter(void 0, void 0, void 0, function () {
    var encrypted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cryptoJS.SHA256(password)];
            case 1:
                encrypted = _a.sent();
                if (encrypted.toString() === hashed)
                    return [2 /*return*/, true];
                return [2 /*return*/, false];
        }
    });
}); };
exports.verifyPassword = verifyPassword;
