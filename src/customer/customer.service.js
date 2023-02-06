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
exports.CustomerService = void 0;
var common_1 = require("@nestjs/common");
var customerModel = require("./customer.model");
var errmsg_1 = require("../../constant/errmsg");
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.findAllCustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customers, values, result, all_customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.findAllCustomer()];
                    case 1:
                        customers = _a.sent();
                        values = [];
                        return [4 /*yield*/, customers.map(function (customer) {
                                if (customer.customerCode === null) {
                                    var tMiddleRef = customer.tMiddleRef, tCustomerCode = customer.tCustomerCode;
                                    values.push({ key: "MiddleRef", value: tMiddleRef, message: "customerCode: " + tCustomerCode + ", " + errmsg_1.MSG.CUSTOMER.NOT_FOUND_IN_AONE });
                                }
                            })];
                    case 2:
                        _a.sent();
                        result = {};
                        result = values.length ? result = { message: "FAILED" } : result = { message: "COMMITED" };
                        all_customer = Object.assign({}, result, { values: values });
                        return [2 /*return*/, all_customer];
                }
            });
        });
    };
    CustomerService.prototype.findCustomerByCustomerCode = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.findCustomerByCustomerCode(filter)];
                    case 1:
                        customer = _a.sent();
                        return [2 /*return*/, customer];
                }
            });
        });
    };
    CustomerService.prototype.findAllCustomerAddressTemp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.findAllCustomerAddressTemp()];
                    case 1:
                        customers = _a.sent();
                        return [2 /*return*/, customers];
                }
            });
        });
    };
    CustomerService.prototype.createCustomerTempTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.createCustomerTempTable()];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, created];
                }
            });
        });
    };
    CustomerService.prototype.createCustomerAddressTempTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.createCustomerAddressTempTable()];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, created];
                }
            });
        });
    };
    CustomerService.prototype.createCustomerTemp = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.createCustomerTemp(customer)];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, created];
                }
            });
        });
    };
    CustomerService.prototype.createCustomerAddressTemp = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.createCustomerAddressTemp(address)];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, created];
                }
            });
        });
    };
    CustomerService.prototype.updateCustomerWithTemp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.updateCustomerWithTemp()];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, created];
                }
            });
        });
    };
    CustomerService.prototype.updateCustomerAddressWithTemp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var created, result, rowDataPacket, message, failCustomers, fail_1, values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.updateCustomerAddressWithTemp()];
                    case 1:
                        created = _a.sent();
                        result = created[0][0], rowDataPacket = created[1];
                        message = result.message, failCustomers = result.failCustomers;
                        if (!failCustomers) return [3 /*break*/, 3];
                        fail_1 = JSON.parse(failCustomers);
                        values = fail_1.values;
                        return [4 /*yield*/, values.map(function (value) {
                                var MiddleRef = value.MiddleRef, customerCode = value.customerCode;
                                Object.assign(value, { key: "MiddleRef", value: MiddleRef, message: "customerCode: " + customerCode + ", " + errmsg_1.MSG.CUSTOMER.NOT_FOUND_IN_AONE });
                                delete value.customerCode;
                                delete value.MiddleRef;
                            })];
                    case 2:
                        _a.sent();
                        Object.assign(result, { values: values });
                        _a.label = 3;
                    case 3:
                        if (!result.values)
                            result.values = [];
                        delete result.failCustomers;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CustomerService.prototype.dropTempTable = function (table_name) {
        return __awaiter(this, void 0, void 0, function () {
            var droped;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customerModel.dropTable(table_name)];
                    case 1:
                        droped = _a.sent();
                        return [2 /*return*/, droped];
                }
            });
        });
    };
    CustomerService = __decorate([
        common_1.Injectable()
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
