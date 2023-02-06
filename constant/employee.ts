const POSITION = {
    DIRECTOR: "ผอ.",
    DEPARTMENT_DIRECTOR: "ผฝ.",
    SECTION_MANAGER: "ผจส.",
    TA: "TA",
    PC_PRO: "PC PRO",
    PC: "PC",
    MD: "MD",
    ADMIN: "ADMIN",
    FINANCE: "FINANCE",
}

const EMPLOYEE_SCHEMA = {
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
        type: String,
    },
    lastname: {
        prop: 'lastname',
        type: String,

    },
    nickname: {
        prop: 'nickname',
        type: String,

    },
    citizenId: {
        prop: 'citizenId',
        type: String,

    },
    email: {
        prop: 'email',
        type: String,

    },
    phone: {
        prop: 'phone',
        type: String,

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
        type: Date,

    },
    position: {
        prop: 'position',
        type: String,

    },
    section: {
        prop: 'section',
        type: String,

    },
    area: {
        prop: 'area',
        type: String,

    },
    taModel: {
        prop: 'taModel',
        type: String,

    },
    description: {
        prop: 'description',
        type: String,

    }
}

const EMPLOYEE_FILE = "./upload/xlsx/employee.xlsx"

const MODEL_GROUP_POSITION = {
    ADMIN_ASSISTANT: "ผจส.",
    DIRECTOR: "ผอ.",
}

const MODEL_GROUP_TA_POSITION = {
    TA: "TA"
}

export {
    EMPLOYEE_SCHEMA,
    EMPLOYEE_FILE,
    POSITION,
    MODEL_GROUP_POSITION,
    MODEL_GROUP_TA_POSITION
}