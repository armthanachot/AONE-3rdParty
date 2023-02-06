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
exports.CustomerController = void 0;
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
var validator = require("../../validator/customer.validator");
/**
 *
 * UTILS
 */
var response_1 = require("../../util/response");
/**
 *
 * CONSTANTS
 */
var config_1 = require("../../constant/config");
var customer_1 = require("../../constant/customer");
/**
 *
 * DB OPTIONS
 */
var db_connection_1 = require("../../config/db_connection");
var app_1 = require("../../../../../../util/app");
var CustomerController = /** @class */ (function () {
    function CustomerController(customerService, clientService) {
        this.customerService = customerService;
        this.clientService = clientService;
    }
    /** CREATE CUSTOMER BY 3 RD PARTY */
    CustomerController.prototype.create = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var token, uAgent, log, validated, _a, _b, _c, _d, affected, _i, _e, customer, customerCode, _f, one, m, customers, message, values, _g, _h, _j, _k, error_1, _l, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        _o.trys.push([0, 23, , 26]);
                        return [4 /*yield*/, db_connection_1.beginTransaction()];
                    case 1:
                        _o.sent();
                        token = req.token;
                        return [4 /*yield*/, app_1.userAgent(req)];
                    case 2:
                        uAgent = _o.sent();
                        log = Object.assign({}, { payload: JSON.stringify(payload), createdBy: token }, uAgent, { serviceName: config_1.SERVICE_NAME.CUSTOMER });
                        return [4 /*yield*/, this.clientService.logging(log)
                            /** VALIDATE */
                        ];
                    case 3:
                        _o.sent();
                        return [4 /*yield*/, validator.createCustomer(payload.customers)];
                    case 4:
                        validated = _o.sent();
                        if (!validated.message) return [3 /*break*/, 6];
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, validated.message, [])];
                    case 5: return [2 /*return*/, _b.apply(_a, [_o.sent()])];
                    case 6:
                        if (!validated.length) return [3 /*break*/, 8];
                        _d = (_c = res.status(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY, "FAILED", validated)];
                    case 7: return [2 /*return*/, _d.apply(_c, [_o.sent()])
                        /** CREATION FLOW */
                    ];
                    case 8: 
                    /** CREATION FLOW */
                    return [4 /*yield*/, this.customerService.createCustomerTempTable()];
                    case 9:
                        /** CREATION FLOW */
                        _o.sent();
                        affected = null;
                        _i = 0, _e = payload.customers;
                        _o.label = 10;
                    case 10:
                        if (!(_i < _e.length)) return [3 /*break*/, 14];
                        customer = _e[_i];
                        return [4 /*yield*/, app_1.renameObjectKey(customer, customer_1.MW_ONE_CUSTOMER_KEY)];
                    case 11:
                        customer = _o.sent();
                        customerCode = customer.customerCode;
                        _f = customerCode.split('/'), one = _f[0], m = _f[1];
                        customer.customerCode = one;
                        return [4 /*yield*/, this.customerService.createCustomerTemp(customer)];
                    case 12:
                        affected = _o.sent();
                        _o.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 10];
                    case 14: return [4 /*yield*/, this.customerService.updateCustomerWithTemp()];
                    case 15:
                        _o.sent();
                        return [4 /*yield*/, this.customerService.findAllCustomer()];
                    case 16:
                        customers = _o.sent();
                        return [4 /*yield*/, this.customerService.dropTempTable('temp_customers')];
                    case 17:
                        _o.sent();
                        message = customers.message, values = customers.values;
                        if (!values.length) return [3 /*break*/, 20];
                        return [4 /*yield*/, db_connection_1.rollback()];
                    case 18:
                        _o.sent();
                        _h = (_g = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, message, values)];
                    case 19: return [2 /*return*/, _h.apply(_g, [_o.sent()])];
                    case 20: return [4 /*yield*/, db_connection_1.commit()];
                    case 21:
                        _o.sent();
                        _k = (_j = res.status(http_status_codes_1.StatusCodes.CREATED)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.CREATED, message, values)];
                    case 22: return [2 /*return*/, _k.apply(_j, [_o.sent()])];
                    case 23:
                        error_1 = _o.sent();
                        return [4 /*yield*/, db_connection_1.rollback()];
                    case 24:
                        _o.sent();
                        console.log(error_1);
                        _m = (_l = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error_1.message)];
                    case 25: return [2 /*return*/, _m.apply(_l, [_o.sent()])];
                    case 26: return [2 /*return*/];
                }
            });
        });
    };
    /** CREATE CUSTOMER ADDRESS BY 3 RD PARTY */
    CustomerController.prototype.createCustomerAddress = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var token, uAgent, log, addresses, validated, _a, _b, _c, _d, affected, _i, addresses_1, cstm_address, message, values, _e, _f, _g, _h, error_2, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _l.trys.push([0, 22, , 25]);
                        return [4 /*yield*/, db_connection_1.beginTransaction()];
                    case 1:
                        _l.sent();
                        token = req.token;
                        return [4 /*yield*/, app_1.userAgent(req)];
                    case 2:
                        uAgent = _l.sent();
                        log = Object.assign({}, { payload: JSON.stringify(payload), createdBy: token }, uAgent, { serviceName: config_1.SERVICE_NAME.CUSTOMER });
                        return [4 /*yield*/, this.clientService.logging(log)];
                    case 3:
                        _l.sent();
                        addresses = payload.addresses;
                        return [4 /*yield*/, validator.createCustomerAddress(addresses)];
                    case 4:
                        validated = _l.sent();
                        if (!validated.message) return [3 /*break*/, 6];
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, validated.message, [])];
                    case 5: return [2 /*return*/, _b.apply(_a, [_l.sent()])];
                    case 6:
                        if (!validated.length) return [3 /*break*/, 8];
                        _d = (_c = res.status(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY, "FAILED", validated)];
                    case 7: return [2 /*return*/, _d.apply(_c, [_l.sent()])
                        /** CREATION FLOW */
                    ];
                    case 8: 
                    /** CREATION FLOW */
                    return [4 /*yield*/, this.customerService.createCustomerAddressTempTable()];
                    case 9:
                        /** CREATION FLOW */
                        _l.sent();
                        affected = null;
                        _i = 0, addresses_1 = addresses;
                        _l.label = 10;
                    case 10:
                        if (!(_i < addresses_1.length)) return [3 /*break*/, 14];
                        cstm_address = addresses_1[_i];
                        return [4 /*yield*/, app_1.renameObjectKey(cstm_address, customer_1.MW_ONE_CUSTOMER_ADDR_KEY)];
                    case 11:
                        cstm_address = _l.sent();
                        return [4 /*yield*/, this.customerService.createCustomerAddressTemp(cstm_address)];
                    case 12:
                        affected = _l.sent();
                        _l.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 10];
                    case 14: return [4 /*yield*/, this.customerService.updateCustomerAddressWithTemp()];
                    case 15:
                        affected = _l.sent();
                        message = affected.message, values = affected.values;
                        delete affected.message;
                        if (!values.length) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.customerService.dropTempTable("temp_customer_addresses")];
                    case 16:
                        _l.sent();
                        _f = (_e = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, message, values)];
                    case 17: return [2 /*return*/, _f.apply(_e, [_l.sent()])];
                    case 18: return [4 /*yield*/, this.customerService.dropTempTable("temp_customer_addresses")];
                    case 19:
                        _l.sent();
                        return [4 /*yield*/, db_connection_1.commit()];
                    case 20:
                        _l.sent();
                        _h = (_g = res.status(http_status_codes_1.StatusCodes.CREATED)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.CREATED, message, values)];
                    case 21: return [2 /*return*/, _h.apply(_g, [_l.sent()])];
                    case 22:
                        error_2 = _l.sent();
                        return [4 /*yield*/, db_connection_1.rollback()];
                    case 23:
                        _l.sent();
                        console.log(error_2);
                        _k = (_j = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error_2.message)];
                    case 24: return [2 /*return*/, _k.apply(_j, [_l.sent()])];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], CustomerController.prototype, "create");
    __decorate([
        common_1.Post('address'),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], CustomerController.prototype, "createCustomerAddress");
    CustomerController = __decorate([
        common_1.Controller('customers')
    ], CustomerController);
    return CustomerController;
}());
exports.CustomerController = CustomerController;
