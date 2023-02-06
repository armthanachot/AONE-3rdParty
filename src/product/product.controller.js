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
exports.ProductController = void 0;
/*
* COMMON LIB
*/
var common_1 = require("@nestjs/common");
var http_status_codes_1 = require("http-status-codes");
/**
 *
 * SCHEMA | PIPE
 */
var product_schema_1 = require("../../schema/product.schema");
var _3rd_party_pipe_1 = require("../3rd-party.pipe");
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
var errmsg_1 = require("../../constant/errmsg");
/**
 *
 * DB OPTIONS
 */
var db_connection_1 = require("../../config/db_connection");
var ProductController = /** @class */ (function () {
    function ProductController(productService, productSubCategoryService) {
        this.productService = productService;
        this.productSubCategoryService = productSubCategoryService;
    }
    ProductController.prototype.create = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var affected, hasData, refCode, _i, _a, product, productCode, productCategoryCode, productSubCategoryCode, images, _b, _c, _d, _e, images_1, image, refId, filePath, _f, _g, error_1, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _k.trys.push([0, 19, , 22]);
                        return [4 /*yield*/, db_connection_1.beginTransaction()];
                    case 1:
                        _k.sent();
                        affected = null, hasData = null, refCode = null;
                        _i = 0, _a = payload.products;
                        _k.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 16];
                        product = _a[_i];
                        productCode = product.productCode, productCategoryCode = product.productCategoryCode, productSubCategoryCode = product.productSubCategoryCode, images = product.images;
                        delete product.images;
                        refCode = { productCategoryCode: productCategoryCode, productSubCategoryCode: productSubCategoryCode };
                        return [4 /*yield*/, this.productSubCategoryService.findByRefCode(refCode)];
                    case 3:
                        hasData = _k.sent();
                        if (!!hasData.length) return [3 /*break*/, 5];
                        _c = (_b = res.status(http_status_codes_1.StatusCodes.NOT_FOUND)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.NOT_FOUND, errmsg_1.MSG.PRODUCTCAT.NOT_FOUND_PRODUCTCAT)];
                    case 4: return [2 /*return*/, _c.apply(_b, [_k.sent()])];
                    case 5: return [4 /*yield*/, this.productService.findByProductCode(productCode)];
                    case 6:
                        hasData = _k.sent();
                        refCode.productCode = productCode;
                        if (!hasData.length) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.productService.update(product, refCode)];
                    case 7:
                        _d = _k.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.productService.create(product)];
                    case 9:
                        _d = _k.sent();
                        _k.label = 10;
                    case 10:
                        affected = _d;
                        _e = 0, images_1 = images;
                        _k.label = 11;
                    case 11:
                        if (!(_e < images_1.length)) return [3 /*break*/, 15];
                        image = images_1[_e];
                        image.refId = productCode;
                        image.type = "IMAGES";
                        refId = image.refId, filePath = image.filePath;
                        refCode = { refId: refId, filePath: filePath };
                        return [4 /*yield*/, this.productService.findFile(refCode)];
                    case 12:
                        hasData = _k.sent();
                        if (!!hasData.length) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.productService.createFile(image)];
                    case 13:
                        affected = _k.sent();
                        _k.label = 14;
                    case 14:
                        _e++;
                        return [3 /*break*/, 11];
                    case 15:
                        _i++;
                        return [3 /*break*/, 2];
                    case 16: return [4 /*yield*/, db_connection_1.rollback()];
                    case 17:
                        _k.sent();
                        _g = (_f = res.status(http_status_codes_1.StatusCodes.CREATED)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.CREATED, config_1._)];
                    case 18: return [2 /*return*/, _g.apply(_f, [_k.sent()])];
                    case 19:
                        error_1 = _k.sent();
                        console.log(error_1.message);
                        return [4 /*yield*/, db_connection_1.rollback()];
                    case 20:
                        _k.sent();
                        _j = (_h = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 21: return [2 /*return*/, _j.apply(_h, [_k.sent()])];
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new _3rd_party_pipe_1.ThirdPartyPipe(product_schema_1.CREATE_PRODUCT)),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], ProductController.prototype, "create");
    ProductController = __decorate([
        common_1.Controller('products')
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
