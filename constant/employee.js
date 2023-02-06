"use strict";
exports.__esModule = true;
exports.MODEL_GROUP_TA_POSITION = exports.MODEL_GROUP_POSITION = exports.POSITION = exports.EMPLOYEE_FILE = exports.EMPLOYEE_SCHEMA = void 0;
var POSITION = {
    DIRECTOR: "ผอ.",
    DEPARTMENT_DIRECTOR: "ผฝ.",
    ADMIN: "ผจส.",
    TA: "TA",
    PC_PRO: "PC PRO",
    PC: "PC",
    MD: "MD"
};
exports.POSITION = POSITION;
var EMPLOYEE_SCHEMA = {
    id: {
        prop: 'id',
        type: Number,
        required: true
    },
    employeeCode: {
        prop: 'employeeCode',
        type: String,
        required: true
    },
    name: {
        prop: 'name',
        type: String
    },
    lastname: {
        prop: 'lastname',
        type: String
    },
    nickname: {
        prop: 'nickname',
        type: String
    },
    citizenId: {
        prop: 'citizenId',
        type: String
    },
    email: {
        prop: 'email',
        type: String
    },
    phone: {
        prop: 'phone',
        type: String
    },
    password: {
        prop: 'password',
        type: String,
        required: true
    },
    confirmPassword: {
        prop: 'confirmPassword',
        type: String,
        required: true
    },
    startDate: {
        prop: 'startDate',
        type: Date
    },
    position: {
        prop: 'position',
        type: String
    },
    section: {
        prop: 'section',
        type: String
    },
    area: {
        prop: 'area',
        type: String
    },
    taModel: {
        prop: 'taModel',
        type: String
    },
    description: {
        prop: 'description',
        type: String
    }
};
exports.EMPLOYEE_SCHEMA = EMPLOYEE_SCHEMA;
var EMPLOYEE_FILE = "./upload/xlsx/employee.xlsx";
exports.EMPLOYEE_FILE = EMPLOYEE_FILE;
var MODEL_GROUP_POSITION = {
    ADMIN_ASSISTANT: "ผจส.",
    DIRECTOR: "ผอ."
};
exports.MODEL_GROUP_POSITION = MODEL_GROUP_POSITION;
var MODEL_GROUP_TA_POSITION = {
    TA: "TA"
};
exports.MODEL_GROUP_TA_POSITION = MODEL_GROUP_TA_POSITION;
