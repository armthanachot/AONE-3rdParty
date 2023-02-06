"use strict";
var _a, _b;
exports.__esModule = true;
exports.CUSTOMER_ADDRESS = exports.CUSTOMER = void 0;
var joi = require("joi");
var customer_1 = require("../constant/customer");
var CUSTOMER = joi.object({
    MiddleRef: joi.number().required(),
    KnowAs: joi.string().required(),
    CustId: joi.string().required(),
    CustInvAccount: joi.string().required(),
    CustomerName: joi.string().required(),
    PartyType: (_a = joi.string()).valid.apply(_a, Object.values(customer_1.CUSTOMER_CONTACT_TYPE)).required(),
    OrganizationName: joi.string().allow(null, "").required(),
    EmployeeRespCode: joi.string().allow(null, "").required(),
    TaxNumber: joi.string().allow(null, "").required(),
    TaxBranch: joi.string().allow(null, "").required(),
    CustGroupId: joi.string().allow(null, "").required(),
    ContactEmailName: joi.string().allow(null, "").required(),
    ContactEmail: joi.string().regex(/\S+@\S+\.\S+/).allow(null, "").required(),
    ContactFaxName: joi.string().allow(null, "").required(),
    ContactFax: joi.string().allow(null, "").required(),
    ContactPhoneName: joi.string().allow(null, "").required(),
    ContactPhone: joi.string().allow(null, "").required(),
    ContactPhoneExtension: joi.string().allow(null, "").required(),
    SaleTaxGroup: joi.string().allow(null, "").required(),
    SaleCurrencyCode: joi.string().allow(null, "").required(),
    CompanyChain: joi.string().allow(null, "").required(),
    PaymentMethod: joi.string().allow(null, "").required(),
    PaymentTerms: joi.string().allow(null, "").required(),
    FinCostCenter: joi.string().allow(null, "").required(),
    FinCustomerAccount: joi.string().allow(null, "").required(),
    InterCompany: joi.string().allow(null, "").required()
});
exports.CUSTOMER = CUSTOMER;
var CUSTOMER_ADDRESS = joi.object({
    MiddleRef: joi.number().required(),
    CustId: joi.string().required(),
    AddressType: (_b = joi.string()).valid.apply(_b, Object.values(customer_1.ADDRESS_TYPE)).required(),
    AddrCountry: joi.string().allow(null, "").required(),
    AddrCountryName: joi.string().allow(null, "").required(),
    AddrFull: joi.string().allow(null, "").required(),
    AddrStreet: joi.string().allow(null, "").required(),
    AddrState: joi.string().allow(null, "").required(),
    AddrStateName: joi.string().allow(null, "").required(),
    AddrCounty: joi.string().allow(null, "").required(),
    AddrCountyName: joi.string().allow(null, "").required(),
    AddrCity: joi.string().allow(null, "").required(),
    AddrCityName: joi.string().allow(null, "").required(),
    AddrZipcode: joi.string().allow(null, "").required()
});
exports.CUSTOMER_ADDRESS = CUSTOMER_ADDRESS;
