"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ClientController = void 0;
/**
 *
 * COMMON LIB
 */
var common_1 = require("@nestjs/common");
var http_status_codes_1 = require("http-status-codes");
/**
 *
 * SCHEMA | PIPE
 */
var client_schema_1 = require("../../schema/client.schema");
var _3rd_party_pipe_1 = require("../3rd-party.pipe");
/**
*
* UTILS
*/
var response_1 = require("../../util/response");
var auth_1 = require("../../util/auth");
var app_1 = require("../../util/app");
/**
 *
 * CONSTANTS
 */
var config_1 = require("../../constant/config");
var errmsg_1 = require("../../../../../../constant/errmsg");
var ACTIVE = config_1.STATUS.ACTIVE, INACTIVE = config_1.STATUS.INACTIVE;
var ClientController = /** @class */ (function () {
    function ClientController(clientService) {
        this.clientService = clientService;
    }
    ClientController.prototype.signup = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, clientId, clientSecret, _b, salt, encrypted, signedup, _c, _d, error_1, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, auth_1.generateId()];
                    case 1:
                        _a = _g.sent(), clientId = _a.clientId, clientSecret = _a.clientSecret;
                        return [4 /*yield*/, app_1.passwordHash(clientSecret)];
                    case 2:
                        _b = _g.sent(), salt = _b.salt, encrypted = _b.encrypted;
                        Object.assign(payload, { clientId: clientId, clientSecret: encrypted, salt: salt });
                        return [4 /*yield*/, this.clientService.clientSingup(payload)];
                    case 3:
                        signedup = _g.sent();
                        _d = (_c = res.status(http_status_codes_1.StatusCodes.OK)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.OK, config_1._, { clientId: clientId, clientSecret: clientSecret })];
                    case 4: return [2 /*return*/, _d.apply(_c, [_g.sent()])];
                    case 5:
                        error_1 = _g.sent();
                        console.log(error_1.message);
                        _f = (_e = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 6: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ClientController.prototype.clientLogin = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var clientId, clientSecret, _a, _b, filter, validClient, _c, _d, _e, appName, host, password, salt, logedin, _f, _g, jwt, client, created, _h, _j, error_2, _k, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        _m.trys.push([0, 14, , 16]);
                        clientId = payload.clientId, clientSecret = payload.clientSecret;
                        if (!(!clientId || !clientSecret)) return [3 /*break*/, 2];
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, config_1._, errmsg_1.MSG.CLIENT.INVALID_CLIENT)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_m.sent()])];
                    case 2:
                        filter = { clientId: clientId, status: ACTIVE };
                        return [4 /*yield*/, this.clientService.findClientByClientId(filter)];
                    case 3:
                        validClient = _m.sent();
                        if (!!validClient.length) return [3 /*break*/, 5];
                        _d = (_c = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, config_1._, errmsg_1.MSG.CLIENT.INVALID_CLIENT)];
                    case 4: return [2 /*return*/, _d.apply(_c, [_m.sent()])];
                    case 5: return [4 /*yield*/, app_1.findOne(validClient)];
                    case 6:
                        _e = _m.sent(), appName = _e.appName, host = _e.host, password = _e.clientSecret, salt = _e.salt;
                        return [4 /*yield*/, auth_1.verifyPassword("" + (clientSecret + salt), password)];
                    case 7:
                        logedin = _m.sent();
                        if (!!logedin) return [3 /*break*/, 9];
                        _g = (_f = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, config_1._, errmsg_1.MSG.CLIENT.INVALID_CREDENTIAL)];
                    case 8: return [2 /*return*/, _g.apply(_f, [_m.sent()])];
                    case 9: return [4 /*yield*/, auth_1.generateJWT({ appName: appName, host: host, clientId: clientId })
                        /**
                         *
                         * CREATE CLIENT LOGIN
                         */
                    ];
                    case 10:
                        jwt = _m.sent();
                        /**
                         *
                         * CREATE CLIENT LOGIN
                         */
                        return [4 /*yield*/, this.clientService.updateClientToken(jwt, clientId)];
                    case 11:
                        /**
                         *
                         * CREATE CLIENT LOGIN
                         */
                        _m.sent();
                        client = Object.assign({ employeeCode: clientId }, { token: jwt }, { ip: req.ip });
                        return [4 /*yield*/, this.clientService.createEmployeeLogin(client)];
                    case 12:
                        created = _m.sent();
                        _j = (_h = res.status(http_status_codes_1.StatusCodes.OK)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.OK, config_1._, jwt)];
                    case 13: return [2 /*return*/, _j.apply(_h, [_m.sent()])];
                    case 14:
                        error_2 = _m.sent();
                        console.log(error_2.message);
                        _l = (_k = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 15: return [2 /*return*/, _l.apply(_k, [_m.sent()])];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    ClientController.prototype.logout = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var clientId, authorization, _a, _b, _c, tokenType, token, filter, client, _d, _e, logedout, _f, _g, error_3, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _k.trys.push([0, 9, , 11]);
                        clientId = payload.clientId;
                        authorization = req.headers.authorization;
                        if (!!authorization) return [3 /*break*/, 2];
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, errmsg_1.MSG.CLIENT.INAVALID_AUTHORIZATION)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_k.sent()])];
                    case 2:
                        _c = authorization.split(' '), tokenType = _c[0], token = _c[1];
                        filter = null;
                        filter = { clientId: clientId, status: ACTIVE };
                        return [4 /*yield*/, this.clientService.findClientByClientId(filter)];
                    case 3:
                        client = _k.sent();
                        if (!!client.length) return [3 /*break*/, 5];
                        _e = (_d = res.status(http_status_codes_1.StatusCodes.NOT_FOUND)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.NOT_FOUND, config_1._)];
                    case 4: return [2 /*return*/, _e.apply(_d, [_k.sent()])
                        /**
                         *
                         * LOGOUT
                         */
                    ];
                    case 5:
                        /**
                         *
                         * LOGOUT
                         */
                        client = { employeeCode: clientId, status: false, token: token };
                        return [4 /*yield*/, this.clientService.updateClientToken(null, clientId)];
                    case 6:
                        logedout = _k.sent();
                        return [4 /*yield*/, this.clientService.logout(client)];
                    case 7:
                        logedout = _k.sent();
                        _g = (_f = res.status(http_status_codes_1.StatusCodes.OK)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.OK, config_1._)];
                    case 8: return [2 /*return*/, _g.apply(_f, [_k.sent()])];
                    case 9:
                        error_3 = _k.sent();
                        console.log(error_3.message);
                        _j = (_h = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 10: return [2 /*return*/, _j.apply(_h, [_k.sent()])];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Post('/signup'),
        common_1.UsePipes(new _3rd_party_pipe_1.ThirdPartyPipe(client_schema_1.SINGUP)),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], ClientController.prototype, "signup");
    __decorate([
        common_1.Post('/login'),
        common_1.UsePipes(new _3rd_party_pipe_1.ThirdPartyPipe(client_schema_1.CLIENT_LOGIN)),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], ClientController.prototype, "clientLogin");
    __decorate([
        common_1.Put('/logout'),
        common_1.UsePipes(new _3rd_party_pipe_1.ThirdPartyPipe(client_schema_1.USER_LOGOUT)),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], ClientController.prototype, "logout");
    ClientController = __decorate([
        common_1.Controller('clients')
    ], ClientController);
    return ClientController;
}());
exports.ClientController = ClientController;
