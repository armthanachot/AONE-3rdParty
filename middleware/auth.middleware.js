"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.permissionVerify = void 0;
var common_1 = require("@nestjs/common");
var http_status_codes_1 = require("http-status-codes");
var config_1 = require("../constant/config");
var response_1 = require("../util/response");
var auth_1 = require("../../../../../util/auth");
var client_model_1 = require("../src/client/client.model");
var errmsg_1 = require("../../../../../constant/errmsg");
var permissionVerify = /** @class */ (function () {
    function permissionVerify() {
    }
    permissionVerify.prototype.use = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, _a, _b, _c, tokenType, token, validToken, _d, _e, lastToken, _f, _g, clientId;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        authorization = req.headers.authorization;
                        if (!!authorization) return [3 /*break*/, 2];
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, errmsg_1.MSG.CLIENT.INAVALID_AUTHORIZATION)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_h.sent()])];
                    case 2:
                        _c = authorization.split(' '), tokenType = _c[0], token = _c[1];
                        return [4 /*yield*/, auth_1.verifyToken(token)];
                    case 3:
                        validToken = _h.sent();
                        if (!validToken.message) return [3 /*break*/, 5];
                        _e = (_d = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, validToken.message)];
                    case 4: return [2 /*return*/, _e.apply(_d, [_h.sent()])];
                    case 5:
                        validToken.token = token;
                        return [4 /*yield*/, client_model_1.findLastToken(validToken)];
                    case 6:
                        lastToken = _h.sent();
                        if (!!lastToken.length) return [3 /*break*/, 8];
                        _g = (_f = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, config_1._, 'INVALID TOKEN')];
                    case 7: return [2 /*return*/, _g.apply(_f, [_h.sent()])];
                    case 8:
                        clientId = validToken.clientId;
                        Object.assign(req, { clientId: clientId, token: token });
                        next();
                        return [2 /*return*/];
                }
            });
        });
    };
    permissionVerify = __decorate([
        common_1.Injectable()
    ], permissionVerify);
    return permissionVerify;
}());
exports.permissionVerify = permissionVerify;
