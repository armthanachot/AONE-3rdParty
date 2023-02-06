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
exports.ProductCategoryController = void 0;
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
var product_schema_1 = require("../../schema/product.schema");
var _3rd_party_pipe_1 = require("../3rd-party.pipe");
/**
 *
 * CONSTANTS
 */
var config_1 = require("../../constant/config");
/**
*
* UTILS
*/
var response_1 = require("../../util/response");
var ProductCategoryController = /** @class */ (function () {
    function ProductCategoryController(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    ProductCategoryController.prototype.create = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var affected, hasCategories, _i, _a, category, productCategoryCode, productCategory, _b, _c, _d, error_1, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 10, , 12]);
                        affected = null;
                        hasCategories = null;
                        _i = 0, _a = payload.categories;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        category = _a[_i];
                        productCategoryCode = category.productCategoryCode, productCategory = category.productCategory;
                        return [4 /*yield*/, this.productCategoryService.findByCode(productCategoryCode)];
                    case 2:
                        hasCategories = _g.sent();
                        if (!hasCategories.length) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.productCategoryService.update({ productCategory: productCategory }, productCategoryCode)];
                    case 3:
                        _b = _g.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.productCategoryService.create(category)];
                    case 5:
                        _b = _g.sent();
                        _g.label = 6;
                    case 6:
                        affected = _b;
                        _g.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        _d = (_c = res.status(http_status_codes_1.StatusCodes.CREATED)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.CREATED, config_1._)];
                    case 9: return [2 /*return*/, _d.apply(_c, [_g.sent()])];
                    case 10:
                        error_1 = _g.sent();
                        console.log(error_1.message);
                        _f = (_e = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 11: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new _3rd_party_pipe_1.ThirdPartyPipe(product_schema_1.PRODUCT_CATEGORY)),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], ProductCategoryController.prototype, "create");
    ProductCategoryController = __decorate([
        common_1.Controller('product-categories')
    ], ProductCategoryController);
    return ProductCategoryController;
}());
exports.ProductCategoryController = ProductCategoryController;
