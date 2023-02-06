"use strict";
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
exports.destroyFile = exports.inactiveEmployee = exports.uploadFile = exports.update = exports.createModelGroupTaUser = exports.createModelGroupUser = exports.create = exports.findModelGroupTAByName = exports.findAreaByName = exports.findPositionByName = exports.findSectionByName = exports.findSectorByName = exports.findEmployeeGallery = exports.findEmployeeByEmployeeCode = exports.findAll = void 0;
var app_1 = require("../../../../../../util/app");
var db_connection_1 = require("../../config/db_connection");
var findAll = function (_a) {
    var START = _a.START, PERPAGE = _a.PERPAGE, SORT_BY = _a.SORT_BY, SORT = _a.SORT, SEARCH = _a.SEARCH, STATUS = _a.STATUS;
    return __awaiter(void 0, void 0, void 0, function () {
        var CONDITION, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    CONDITION = SEARCH ? " AND employees.fullName LIKE " + db_connection_1.escape("%" + SEARCH + "%") : "";
                    return [4 /*yield*/, db_connection_1.query("SELECT employeeId,employeeCode,citizenId,email,phone,startDate,modelGroup,modelGroupTa,description,fullName FROM employees\n        WHERE status = ?\n        " + CONDITION + "\n        ORDER BY ? ?\n        LIMIT ?, ?\n    ", [STATUS, SORT_BY, SORT, START, PERPAGE])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.findAll = findAll;
var findEmployeeByEmployeeCode = function (_a) {
    var employeeCode = _a.employeeCode, status = _a.status;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, db_connection_1.query("SELECT employees.employeeId,employees.employeeCode,employees.citizenId,employees.email,employees.phone,employees.password,employees.startDate,employees.description,employees.salt,employees.fullName,\n    positions.position,sections.sectionName\n    FROM employees \n    LEFT JOIN positions ON employees.positionId = positions.positionId\n    LEFT JOIN sections ON employees.sectionId = sections.sectionId\n    WHERE employees.employeeCode = ? AND employees.status = ?", [employeeCode, status])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.findEmployeeByEmployeeCode = findEmployeeByEmployeeCode;
var findEmployeeGallery = function (_a) {
    var START = _a.START, PERPAGE = _a.PERPAGE, SORT_BY = _a.SORT_BY, SORT = _a.SORT, TYPE = _a.TYPE, REF_ID = _a.REF_ID, STATUS = _a.STATUS;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, db_connection_1.query("\n    SELECT filePath FROM files WHERE refId = ? AND type = ? AND status = ?\n    ORDER BY ? ?\n    LIMIT ?, ?\n    ", [REF_ID, TYPE, STATUS, SORT_BY, SORT, START, PERPAGE])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.findEmployeeGallery = findEmployeeGallery;
var findSectorByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT sectorId FROM sectors WHERE  sectorName = ?", [name])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findSectorByName = findSectorByName;
var findSectionByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT sectionId FROM sections WHERE sectionName = ?", [name])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findSectionByName = findSectionByName;
var findPositionByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT positionId FROM positions WHERE  position = ?", [name])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findPositionByName = findPositionByName;
var findAreaByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT areaId FROM areas WHERE  areaName = ?", [name])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findAreaByName = findAreaByName;
var findModelGroupTAByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT modelGroupTaId FROM model_group_ta WHERE modelGroupTaName = ?", [name])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findModelGroupTAByName = findModelGroupTAByName;
var create = function (_a) {
    var employeeCode = _a.employeeCode, citizenId = _a.citizenId, email = _a.email, phone = _a.phone, password = _a.password, startDate = _a.startDate, position = _a.position, section = _a.section, area = _a.area, taModel = _a.taModel, description = _a.description, salt = _a.salt, fullName = _a.fullName, nickname = _a.nickname;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, db_connection_1.query("INSERT INTO employees(employeeCode,citizenId,email,phone,password,startDate,positionId,sectionId,areaId,modelGroupTaId,description,salt,fullName,nickname) \n    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [employeeCode, citizenId, email, phone, password, startDate, position, section, area, taModel, description, salt, fullName, nickname])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.create = create;
var createModelGroupUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("INSERT INTO model_group_user(userId,modelGroupId,positionId) VALUES ?", [user])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createModelGroupUser = createModelGroupUser;
var createModelGroupTaUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("INSERT INTO model_group_ta_user(userId,modelGroupTaId) VALUES ?", [user])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createModelGroupTaUser = createModelGroupTaUser;
var uploadFile = function (files) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("INSERT INTO files(type, fileType, fileName, fileSize, filePath, refId) VALUES ?", [files])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.uploadFile = uploadFile;
var update = function (_a, employeeId) {
    var employeeCode = _a.employeeCode, citizenId = _a.citizenId, email = _a.email, phone = _a.phone, password = _a.password, startDate = _a.startDate, position = _a.position, section = _a.section, area = _a.area, taModel = _a.taModel, description = _a.description, salt = _a.salt, fullName = _a.fullName, nickname = _a.nickname;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, db_connection_1.query("UPDATE employees SET citizenId = ?, email = ?, phone = ?, password = ?, startDate = ?,\n    positionId = ?,\n    sectionId = ?,\n    areaId = ?,\n    modelGroupTaId = ?,\n    description = ?,salt = ?,fullName = ?, nickname = ? \n    WHERE employeeId = ?", [citizenId, email, phone, password, startDate, position, section, area, taModel, description, salt, fullName, nickname, employeeId])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.update = update;
var inactiveEmployee = function (employees_code) { return __awaiter(void 0, void 0, void 0, function () {
    var employee, employeeId, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT employeeId FROM employees WHERE employeeCode = ?", [employees_code])];
            case 1:
                employee = _a.sent();
                return [4 /*yield*/, app_1.findOne(employee)
                    // console.log(employeeId);
                    // console.log(`UPDATE employees SET status = 'INACTIVE' WHERE employeeId = ${employeeId}`);
                ];
            case 2:
                employeeId = (_a.sent()).employeeId;
                return [4 /*yield*/, db_connection_1.query("UPDATE employees SET status = 'INACTIVE' WHERE employeeId = ?", [employeeId])];
            case 3:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.inactiveEmployee = inactiveEmployee;
var destroyFile = function (_a) {
    var refId = _a.refId, fileId = _a.fileId, status = _a.status;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, db_connection_1.query("UPDATE files SET status = ? WHERE refId = ? AND fileId IN (?)", [status, refId, fileId])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.destroyFile = destroyFile;
