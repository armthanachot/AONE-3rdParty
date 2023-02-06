"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductSubCategoryModule = void 0;
var common_1 = require("@nestjs/common");
var product_sub_category_controller_1 = require("./product-sub-category.controller");
var product_sub_category_service_1 = require("./product-sub-category.service");
var product_category_service_1 = require("../product-category/product-category.service");
var ProductSubCategoryModule = /** @class */ (function () {
    function ProductSubCategoryModule() {
    }
    ProductSubCategoryModule = __decorate([
        common_1.Module({
            imports: [],
            controllers: [product_sub_category_controller_1.ProductSubCategoryController],
            providers: [product_sub_category_service_1.ProductSubCategoryService, product_category_service_1.ProductCategoryService]
        })
    ], ProductSubCategoryModule);
    return ProductSubCategoryModule;
}());
exports.ProductSubCategoryModule = ProductSubCategoryModule;
