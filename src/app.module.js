"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var customer_module_1 = require("./customer/customer.module");
var employee_module_1 = require("./employee/employee.module");
var product_module_1 = require("./product/product.module");
var product_category_module_1 = require("./product-category/product-category.module");
var product_sub_category_module_1 = require("./product-sub-category/product-sub-category.module");
var client_module_1 = require("./client/client.module");
var thailand_geo_module_1 = require("./thailand-geo/thailand-geo.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.configure = function (consumer) {
        var GET = common_1.RequestMethod.GET, POST = common_1.RequestMethod.POST, PUT = common_1.RequestMethod.PUT, DELETE = common_1.RequestMethod.DELETE, ALL = common_1.RequestMethod.ALL;
        // consumer.apply(permissionVerify).forRoutes({ path: 'customers', method: ALL })
        // consumer.apply(permissionVerify).forRoutes({ path: 'employees', method: ALL })
        // consumer.apply(permissionVerify).forRoutes({ path: 'products', method: ALL })
        // consumer.apply(permissionVerify).forRoutes({ path: 'product-categories', method: ALL })
        // consumer.apply(permissionVerify).forRoutes({ path: 'product-sub-categories', method: ALL })
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [customer_module_1.CustomerModule, employee_module_1.EmployeeModule, product_module_1.ProductModule, product_category_module_1.ProductCategoryModule, product_sub_category_module_1.ProductSubCategoryModule, client_module_1.ClientModule, thailand_geo_module_1.ThailandGeoModule],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
