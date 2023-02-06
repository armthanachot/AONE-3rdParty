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
exports.__esModule = true;
exports.ThailandGeoController = void 0;
var common_1 = require("@nestjs/common");
var ThailandGeoController = /** @class */ (function () {
    function ThailandGeoController(thailandGeoService) {
        this.thailandGeoService = thailandGeoService;
    }
    ThailandGeoController.prototype.create = function (createThailandGeoDto) {
        return this.thailandGeoService.create(createThailandGeoDto);
    };
    ThailandGeoController.prototype.findAll = function () {
        return this.thailandGeoService.findAll();
    };
    ThailandGeoController.prototype.findOne = function (id) {
        return this.thailandGeoService.findOne(+id);
    };
    ThailandGeoController.prototype.update = function (id, updateThailandGeoDto) {
        return this.thailandGeoService.update(+id, updateThailandGeoDto);
    };
    ThailandGeoController.prototype.remove = function (id) {
        return this.thailandGeoService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], ThailandGeoController.prototype, "create");
    __decorate([
        common_1.Get()
    ], ThailandGeoController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], ThailandGeoController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], ThailandGeoController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], ThailandGeoController.prototype, "remove");
    ThailandGeoController = __decorate([
        common_1.Controller('thailand-geo')
    ], ThailandGeoController);
    return ThailandGeoController;
}());
exports.ThailandGeoController = ThailandGeoController;
