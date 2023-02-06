"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThirdPartyPipe = void 0;
var common_1 = require("@nestjs/common");
var ThirdPartyPipe = /** @class */ (function () {
    function ThirdPartyPipe(schema) {
        this.schema = schema;
    }
    ThirdPartyPipe.prototype.transform = function (value, metadata) {
        var error = this.schema.validate(value).error;
        if (error) {
            var err_msg = error.message;
            var _original = error._original;
            var details = error.details[0];
            var _a = details.path, parent_1 = _a[0], index = _a[1], child = _a[2], context = details.context;
            context.code = 422;
            if (parent_1 === "customers") {
                try {
                    var customers = _original.customers;
                    var _b = customers[index], MiddleRef = _b.MiddleRef, EmployeeRespCode = _b.EmployeeRespCode, KnowAs = _b.KnowAs;
                    var key = context.key;
                    context.value = { MiddleRef: MiddleRef, EmployeeRespCode: EmployeeRespCode, KnowAs: KnowAs, errorKeyValue: { key: key, value: customers[index][key] } };
                    context.message = error.message;
                    throw new common_1.UnprocessableEntityException(context);
                }
                catch (error) {
                    context.message = err_msg;
                    throw new common_1.UnprocessableEntityException(context);
                }
            }
            if (parent_1 === "addresses") {
                try {
                    var addresses = _original.addresses;
                    var _c = addresses[index], MiddleRef = _c.MiddleRef, CustId = _c.CustId;
                    var key = context.key;
                    context.value = { MiddleRef: MiddleRef, CustId: CustId, errorKeyValue: { key: key, value: addresses[index][key] } };
                    context.message = error.message;
                    throw new common_1.UnprocessableEntityException(context);
                }
                catch (error) {
                    context.message = err_msg;
                    throw new common_1.UnprocessableEntityException(context);
                }
            }
            else {
                throw new common_1.UnprocessableEntityException("Validation failed: " + error.message);
            }
        }
        return value;
    };
    ThirdPartyPipe = __decorate([
        common_1.Injectable()
    ], ThirdPartyPipe);
    return ThirdPartyPipe;
}());
exports.ThirdPartyPipe = ThirdPartyPipe;
