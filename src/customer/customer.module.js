"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerModule = void 0;
var common_1 = require("@nestjs/common");
var customer_controller_1 = require("./customer.controller");
var customer_service_1 = require("./customer.service");
var client_service_1 = require("../client/client.service");
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        common_1.Module({
            imports: [],
            controllers: [customer_controller_1.CustomerController],
            providers: [customer_service_1.CustomerService, client_service_1.ClientService]
        })
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
