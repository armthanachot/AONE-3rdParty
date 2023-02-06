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
exports.EmployeeController = void 0;
/**
 *
 * COMMON LIB
 */
var common_1 = require("@nestjs/common");
var http_status_codes_1 = require("http-status-codes");
var node_1 = require("read-excel-file/node");
/**
*
* UTILS
*/
var response_1 = require("../../util/response");
var app_1 = require("../../util/app");
var auth_1 = require("../../util/auth");
/**
 *
 * CONSTANTS
 */
var config_1 = require("../../constant/config");
var ACTIVE = config_1.STATUS.ACTIVE, INACTIVE = config_1.STATUS.INACTIVE;
var employee_1 = require("../../constant/employee");
var db_connection_1 = require("../../config/db_connection");
var model = require("./employee.model");
var EmployeeController = /** @class */ (function () {
    function EmployeeController(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employees, _a, _b, affected, hasEmployee, filter, _i, _c, employee, employeeCode, password, confirmPassword, position, section, area, taModel, _d, _e, _f, _g, _h, salt, encrypted, _j, startDate, startTime, positionId, _k, sectionId, _l, areaId, _m, modelGroupTaId, _o, employeeId, _p, _q, _r, error_1, _s, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        _u.trys.push([0, 30, , 33]);
                        return [4 /*yield*/, db_connection_1.beginTransaction()];
                    case 1:
                        _u.sent();
                        return [4 /*yield*/, node_1["default"](employee_1.EMPLOYEE_FILE, { schema: employee_1.EMPLOYEE_SCHEMA })];
                    case 2:
                        employees = _u.sent();
                        if (!employees.errors.length) return [3 /*break*/, 4];
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, "INAVLID SCHEMA OF DATA")];
                    case 3: return [2 /*return*/, _b.apply(_a, [_u.sent()])];
                    case 4:
                        affected = null, hasEmployee = null, filter = null;
                        _i = 0, _c = employees.rows;
                        _u.label = 5;
                    case 5:
                        if (!(_i < _c.length)) return [3 /*break*/, 27];
                        employee = _c[_i];
                        employeeCode = employee.employeeCode, password = employee.password, confirmPassword = employee.confirmPassword, position = employee.position, section = employee.section, area = employee.area, taModel = employee.taModel;
                        if (!(position && !Object.values(employee_1.POSITION).includes(position))) return [3 /*break*/, 7];
                        _e = (_d = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, "INVALID EMPLOYEE POSITION")];
                    case 6: return [2 /*return*/, _e.apply(_d, [_u.sent()])];
                    case 7:
                        if (!(password !== confirmPassword)) return [3 /*break*/, 9];
                        _g = (_f = res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.BAD_REQUEST, "PASSWORD AND COMFIRM PASSWORD NOT EQUALS")];
                    case 8: return [2 /*return*/, _g.apply(_f, [_u.sent()])];
                    case 9: return [4 /*yield*/, auth_1.passwordHash(password)];
                    case 10:
                        _h = _u.sent(), salt = _h.salt, encrypted = _h.encrypted;
                        employee.password = encrypted;
                        employee.salt = salt;
                        employee.fullName = employee.name + " " + (employee.lastname || "");
                        _j = employee.startDate.toISOString().split('T'), startDate = _j[0], startTime = _j[1];
                        employee.startDate = startDate;
                        _k = app_1.findOne;
                        return [4 /*yield*/, model.findPositionByName(position)];
                    case 11: return [4 /*yield*/, _k.apply(void 0, [_u.sent()])];
                    case 12:
                        positionId = (_u.sent()).positionId;
                        _l = app_1.findOne;
                        return [4 /*yield*/, model.findSectionByName(section)];
                    case 13: return [4 /*yield*/, _l.apply(void 0, [_u.sent()])];
                    case 14:
                        sectionId = (_u.sent()).sectionId;
                        _m = app_1.findOne;
                        return [4 /*yield*/, model.findAreaByName(area)];
                    case 15: return [4 /*yield*/, _m.apply(void 0, [_u.sent()])];
                    case 16:
                        areaId = (_u.sent()).areaId;
                        _o = app_1.findOne;
                        return [4 /*yield*/, model.findModelGroupTAByName(taModel)];
                    case 17: return [4 /*yield*/, _o.apply(void 0, [_u.sent()])
                        // model group -1 when upload to staging before knacx
                        // model group +1 when upload to staging after knacx
                    ];
                    case 18:
                        modelGroupTaId = (_u.sent()).modelGroupTaId;
                        // model group -1 when upload to staging before knacx
                        // model group +1 when upload to staging after knacx
                        employee.position = positionId;
                        employee.section = sectionId;
                        employee.area = areaId;
                        employee.taModel = modelGroupTaId;
                        return [4 /*yield*/, app_1.removeUselessKey(employee, ["id", "confirmPassword", "name", "lastname"])];
                    case 19:
                        _u.sent();
                        filter = { employeeCode: employeeCode, status: ACTIVE };
                        return [4 /*yield*/, this.employeeService.findEmployeeByEmployeeCode(filter)];
                    case 20:
                        hasEmployee = _u.sent();
                        return [4 /*yield*/, app_1.findOne(hasEmployee)];
                    case 21:
                        employeeId = (_u.sent()).employeeId;
                        if (!hasEmployee.length) return [3 /*break*/, 23];
                        return [4 /*yield*/, this.employeeService.update(employee, employeeId)];
                    case 22:
                        _p = _u.sent();
                        return [3 /*break*/, 25];
                    case 23: return [4 /*yield*/, this.employeeService.create(employee)];
                    case 24:
                        _p = _u.sent();
                        _u.label = 25;
                    case 25:
                        affected = _p;
                        _u.label = 26;
                    case 26:
                        _i++;
                        return [3 /*break*/, 5];
                    case 27: return [4 /*yield*/, db_connection_1.rollback()];
                    case 28:
                        _u.sent();
                        _r = (_q = res.status(http_status_codes_1.StatusCodes.OK)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.OK, config_1._)];
                    case 29: return [2 /*return*/, _r.apply(_q, [_u.sent()])];
                    case 30:
                        error_1 = _u.sent();
                        return [4 /*yield*/, db_connection_1.rollback()];
                    case 31:
                        _u.sent();
                        console.log(error_1);
                        _t = (_s = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 32: return [2 /*return*/, _t.apply(_s, [_u.sent()])];
                    case 33: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.inactive = function (req, res, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_2, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 4]);
                        Promise.all(payload.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var employeeCode, inactived;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        employeeCode = item.employeeCode;
                                        return [4 /*yield*/, model.inactiveEmployee(employeeCode)];
                                    case 1:
                                        inactived = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }));
                        _b = (_a = res.status(http_status_codes_1.StatusCodes.OK)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.OK, config_1._)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_e.sent()])];
                    case 2:
                        error_2 = _e.sent();
                        console.log(error_2);
                        _d = (_c = res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)).json;
                        return [4 /*yield*/, response_1.responseMessages(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, config_1._)];
                    case 3: return [2 /*return*/, _d.apply(_c, [_e.sent()])];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Req()),
        __param(1, common_1.Res())
    ], EmployeeController.prototype, "create");
    __decorate([
        common_1.Put('/inactive'),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Body())
    ], EmployeeController.prototype, "inactive");
    EmployeeController = __decorate([
        common_1.Controller('employees')
    ], EmployeeController);
    return EmployeeController;
}());
exports.EmployeeController = EmployeeController;
