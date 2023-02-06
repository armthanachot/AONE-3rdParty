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
exports.dropTable = exports.updateCustomerAddressWithTemp = exports.updateCustomerWithTemp = exports.createCustomerAddressTemp = exports.createCustomerTemp = exports.createCustomerAddressTempTable = exports.createCustomerTempTable = exports.findAllCustomerAddressTemp = exports.findCustomerByCustomerCode = exports.findAllCustomer = void 0;
var db_connection_1 = require("../../config/db_connection");
var findAllCustomer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT temp_customers.customerCode AS tCustomerCode,temp_customers.middleRef AS tMiddleRef,temp_customers.customerName AS tCustomerName,temp_customers.contactType AS tContactType,temp_customers.companyName AS tCompanyName,temp_customers.taxNumber AS tTaxNumber,temp_customers.branchNumber AS tBranchNumber,\n    temp_customers.employeeRespCode AS tEmployeeRespCode,temp_customers.custGroupId AS tCustGroupId,temp_customers.emailName AS tEmailName,temp_customers.contactEmail AS tContactEmail,temp_customers.faxName AS tFaxName,temp_customers.fax AS tFax,temp_customers.phoneName AS tPhoneName,temp_customers.contactPhone AS tContactPhone,\n    temp_customers.phoneExtension AS tPhoneExtension,temp_customers.saleTaxGroup AS tSaleTaxGroup,temp_customers.saleCurrencyCode AS tSaleCurrencyCode,temp_customers.companyChain AS tCompanyChain,temp_customers.paymentMethod AS tPaymentMethod,temp_customers.paymentTerms AS tPaymentTerms,temp_customers.finCostCenter AS tFinCostCenter,\n    temp_customers.finCustomerAccount AS tFinCustomerAccount,temp_customers.interCompany AS tInterCompany,\n    customers.customerCode,customers.customerName,customers.contactType,customers.companyName,customers.employeeCode,customers.taxNumber,customers.branchNumber\n    FROM temp_customers\n    LEFT JOIN customers ON temp_customers.customerCode = customers.customerCode\n    ")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findAllCustomer = findAllCustomer;
var findCustomerByCustomerCode = function (_a) {
    var refId = _a.refId, status = _a.status;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, db_connection_1.query("SELECT customerCode WHERE customerCode = ? AND status = ?", [refId, status])];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.findCustomerByCustomerCode = findCustomerByCustomerCode;
var findAllCustomerAddressTemp = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("SELECT * FROM temp_customer_addresses")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.findAllCustomerAddressTemp = findAllCustomerAddressTemp;
var createCustomerTempTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("CREATE TEMPORARY TABLE temp_customers(\n        customerId INT(11) AUTO_INCREMENT PRIMARY KEY,\n        customerCode VARCHAR(255) NOT NULL,\n        d365CustomerCode VARCHAR(255) NOT NULL,\n        d365CustomerInvAccount VARCHAR(255) NOT NULL,\n        middleRef VARCHAR(255) NOT NULL,\n        customerName VARCHAR(255) NOT NULL,\n        contactType ENUM('PERSONAL','ORGANIZATION') NOT NULL,\n        companyName VARCHAR(255) DEFAULT NULL,\n        taxNumber VARCHAR(255)  DEFAULT NULL,\n        branchNumber VARCHAR(255)  DEFAULT NULL,\n        employeeRespCode VARCHAR(255) NOT NULL,\n        custGroupId VARCHAR(255) DEFAULT NULL,\n        emailName VARCHAR(255) DEFAULT NULL,\n        contactEmail VARCHAR(255) DEFAULT NULL,\n        faxName VARCHAR(255) DEFAULT NULL,\n        fax VARCHAR(255) DEFAULT NULL,\n        phoneName VARCHAR(255) DEFAULT NULL,\n        contactPhone VARCHAR(255) DEFAULT NULL,\n        phoneExtension VARCHAR(255) DEFAULT NULL,\n        saleTaxGroup VARCHAR(255) DEFAULT NULL,\n        saleCurrencyCode VARCHAR(255) DEFAULT NULL,\n        companyChain VARCHAR(255) DEFAULT NULL,\n        paymentMethod VARCHAR(255) DEFAULT NULL,\n        paymentTerms VARCHAR(255) DEFAULT NULL,\n        finCostCenter VARCHAR(255) DEFAULT NULL,\n        finCustomerAccount VARCHAR(255) DEFAULT NULL,\n        interCompany VARCHAR(255) DEFAULT NULL\n    )")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createCustomerTempTable = createCustomerTempTable;
var createCustomerAddressTempTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("\n    CREATE TEMPORARY TABLE temp_customer_addresses(\n        customerAddressId INT(11) AUTO_INCREMENT PRIMARY KEY,\n        customerCode VARCHAR(255) NOT NULL,\n        d365CustomerCode VARCHAR(255) NOT NULL,\n        middleRef VARCHAR(255) NOT NULL,\n        addressType ENUM('PERSONAL','INVOICE') NOT NULL,\n        address VARCHAR(255) DEFAULT NULL,\n        street VARCHAR(255) DEFAULT NULL,\n        countryId VARCHAR(255) DEFAULT NULL,\n        countryName VARCHAR(255) DEFAULT NULL,\n        provinceId VARCHAR(255) DEFAULT NULL,\n        provinceName VARCHAR(255) DEFAULT NULL,\n        districtId VARCHAR(255) DEFAULT NULL,\n        districtName VARCHAR(255) DEFAULT NULL,\n        subDistrictId VARCHAR(255) DEFAULT NULL,\n        subDistrictName VARCHAR(255) DEFAULT NULL,\n        zipcode VARCHAR(255) DEFAULT NULL\n    )")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createCustomerAddressTempTable = createCustomerAddressTempTable;
var createCustomerTemp = function (customer) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("INSERT INTO temp_customers SET ?", [customer])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createCustomerTemp = createCustomerTemp;
var createCustomerAddressTemp = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("INSERT INTO temp_customer_addresses SET ?", [address])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createCustomerAddressTemp = createCustomerAddressTemp;
var updateCustomerWithTemp = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("UPDATE customers,temp_customers SET \n    customers.customerCode=temp_customers.customerCode,\n    customers.d365CustomerCode=temp_customers.d365CustomerCode,\n    customers.d365CustomerInvAccount=temp_customers.d365CustomerInvAccount,\n    customers.middleRef=temp_customers.middleRef,\n    customers.customerName=temp_customers.customerName,\n    customers.contactType=temp_customers.contactType,\n    customers.companyName=temp_customers.companyName,\n    customers.taxNumber=temp_customers.taxNumber,\n    customers.branchNumber=temp_customers.branchNumber,\n    customers.employeeRespCode = temp_customers.employeeRespCode,\n    customers.custGroupId = temp_customers.custGroupId,\n    customers.emailName = temp_customers.emailName,\n    customers.contactEmail = temp_customers.contactEmail,\n    customers.faxName = temp_customers.faxName,\n    customers.fax = temp_customers.fax,\n    customers.phoneName = temp_customers.phoneName,\n    customers.contactPhone = temp_customers.contactPhone,\n    customers.phoneExtension = temp_customers.phoneExtension,\n    customers.saleTaxGroup = temp_customers.saleTaxGroup,\n    customers.saleCurrencyCode = temp_customers.saleCurrencyCode,\n    customers.companyChain = temp_customers.companyChain,\n    customers.paymentMethod = temp_customers.paymentMethod,\n    customers.paymentTerms = temp_customers.paymentTerms,\n    customers.finCostCenter = temp_customers.finCostCenter,\n    customers.finCustomerAccount = temp_customers.finCustomerAccount,\n    customers.interCompany = temp_customers.interCompany\n    WHERE customers.customerCode = temp_customers.customerCode\n    ")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.updateCustomerWithTemp = updateCustomerWithTemp;
var updateCustomerAddressWithTemp = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("CALL sp_customer_address()")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.updateCustomerAddressWithTemp = updateCustomerAddressWithTemp;
var dropTable = function (table_name) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_connection_1.query("DROP TEMPORARY TABLE " + table_name, [table_name])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.dropTable = dropTable;
