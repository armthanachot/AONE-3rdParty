"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThailandGeoService = void 0;
var common_1 = require("@nestjs/common");
var ThailandGeoService = /** @class */ (function () {
    function ThailandGeoService() {
    }
    ThailandGeoService.prototype.create = function (createThailandGeoDto) {
        return 'This action adds a new thailandGeo';
    };
    ThailandGeoService.prototype.findAll = function () {
        return "This action returns all thailandGeo";
    };
    ThailandGeoService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " thailandGeo";
    };
    ThailandGeoService.prototype.update = function (id, updateThailandGeoDto) {
        return "This action updates a #" + id + " thailandGeo";
    };
    ThailandGeoService.prototype.remove = function (id) {
        return "This action removes a #" + id + " thailandGeo";
    };
    ThailandGeoService = __decorate([
        common_1.Injectable()
    ], ThailandGeoService);
    return ThailandGeoService;
}());
exports.ThailandGeoService = ThailandGeoService;
