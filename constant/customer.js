"use strict";
/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */
exports.__esModule = true;
exports.MW_ONE_CUSTOMER_ADDR_KEY = exports.MW_ONE_CUSTOMER_KEY = exports.FILE_TYPE = exports.NO_FOLLOWER = exports.FILE_TOPIC = exports.CUSTOMER_CODE_PREFIX = exports.CUSTOMER_FILES = exports.CUSTOMER_TEMPLATE = exports.FILE_FIELDS = exports.CUSTOMER_CONTACT_TYPE = exports.ADDRESS_TYPE = exports.COMPANY_POSITION = exports.CUSTOMER_ACTIVE = exports.RELIGION = exports.SHOP_TYPE = exports.CONTACT_TYPE = exports.CUSTOMER_STATUS = exports.CUSTOMER_TYPE = void 0;
/**
 *
 * TECHNICIANS is DESIGNER,ENGINEER,ESTABLISHED
 */
var CUSTOMER_TYPE = {
    TECHNICIANS: "TECHNICIANS",
    PROJECT_OWNER: "PROJECT OWNER",
    CONSTRUCTOR: "CONSTRUCTOR"
};
exports.CUSTOMER_TYPE = CUSTOMER_TYPE;
var CUSTOMER_CONTACT_TYPE = {
    PERSONAL: "PERSONAL",
    ORGANIZATION: "ORGANIZATION"
};
exports.CUSTOMER_CONTACT_TYPE = CUSTOMER_CONTACT_TYPE;
var CONTACT_TYPE = {
    SERVICE: "SERVICE",
    ESTATE: "ESTATE",
    CONTRACTOR: "CONTRACTOR",
    DESIGN: "DESIGN",
    AFFILIATED: "AFFILIATED",
    BOUGHT_SOLD: "BOUGHT_SOLD",
    ANOTHER: "ANOTHER"
};
exports.CONTACT_TYPE = CONTACT_TYPE;
var CUSTOMER_STATUS = {
    GREEN: "GREEN",
    YELLOW: "YELLOW",
    RED: "RED"
};
exports.CUSTOMER_STATUS = CUSTOMER_STATUS;
var SHOP_TYPE = {
    MATERIAL: "MATERIAL"
};
exports.SHOP_TYPE = SHOP_TYPE;
var RELIGION = {
    CHRISTIANITY: "CHRISTIANITY",
    ISLAM: "ISLAM",
    BUDDHISM: "BUDDHISM",
    BRAHMANISM_HINDUISM: "BRAHMANISM HINDUISM",
    AGNOSTIC_ATHEIST: "AGNOSTIC ATHEIST"
};
exports.RELIGION = RELIGION;
var CUSTOMER_ACTIVE = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    DELETED: "DELETED"
};
exports.CUSTOMER_ACTIVE = CUSTOMER_ACTIVE;
var COMPANY_POSITION = {
    PROJECT_OWNER: "PROJECT OWNER",
    HOME_BUILDER: "HOME BUILDER",
    COORDINATE: "COORDINATE",
    PM: "PM",
    DESIGNER: "DESIGNER",
    ARCHITECT: "ARCHITECT",
    ENGINEER: "ENGINEER",
    CONTRACTOR: "CONTRACTOR",
    TECHNICIAN: "TECHNICIAN",
    SALES_OFFICE: "SALES OFFICE",
    PURCHASE: "PURCHASE",
    ANOTHER: "ANOTHER"
};
exports.COMPANY_POSITION = COMPANY_POSITION;
var ADDRESS_TYPE = {
    PERSONAL: "PERSONAL",
    BUSINESS: "BUSINESS",
    INVOICE: "INVOICE"
};
exports.ADDRESS_TYPE = ADDRESS_TYPE;
var FILE_FIELDS = {
    customerImg: [],
    photos: [],
    citizenCardImg: [],
    companyCertificate: [],
    wordMap20: []
};
exports.FILE_FIELDS = FILE_FIELDS;
var CUSTOMER_FILES = {
    PROFILE: [],
    IMAGES: [],
    CITIZENID: [],
    CERTIFICATE: [],
    WORDMAP20: []
};
exports.CUSTOMER_FILES = CUSTOMER_FILES;
var CUSTOMER_TEMPLATE = {
    customer: {},
    contact: {},
    business: {},
    file: []
};
exports.CUSTOMER_TEMPLATE = CUSTOMER_TEMPLATE;
var CUSTOMER_CODE_PREFIX = {
    "PROJECT OWNER": "O",
    TECHNICIANS: "D",
    CONSTRUCTOR: "C",
    "PROJECT PENDING": "P",
    AGENT: "A"
};
exports.CUSTOMER_CODE_PREFIX = CUSTOMER_CODE_PREFIX;
var FILE_TOPIC = "customer";
exports.FILE_TOPIC = FILE_TOPIC;
var NO_FOLLOWER = "NO FOLLOWER";
exports.NO_FOLLOWER = NO_FOLLOWER;
var FILE_TYPE = {
    IMAGES: "IMAGES",
    CITIZENID: "CITIZENID",
    PROFILE: "PROFILE",
    CERTIFICATE: "CERTIFICATE",
    WORDMAP20: "WORDMAP20"
};
exports.FILE_TYPE = FILE_TYPE;
var MW_ONE_CUSTOMER_KEY = [
    {
        old: "MiddleRef",
        "new": "middleRef"
    },
    {
        old: "KnowAs",
        "new": "customerCode"
    },
    {
        old: "CustId",
        "new": "d365CustomerCode"
    },
    {
        old: "CustInvAccount",
        "new": "d365CustomerInvAccount"
    },
    {
        old: "CustomerName",
        "new": "customerName"
    },
    {
        old: "PartyType",
        "new": "contactType"
    },
    {
        old: "OrganizationName",
        "new": "companyName"
    },
    {
        old: "EmployeeRespCode",
        "new": "employeeRespCode"
    },
    {
        old: "TaxNumber",
        "new": "taxNumber"
    },
    {
        old: "TaxBranch",
        "new": "branchNumber"
    },
    {
        old: "CustGroupId",
        "new": "custGroupId"
    },
    {
        old: "ContactEmailName",
        "new": "emailName"
    },
    {
        old: "ContactEmail",
        "new": "contactEmail"
    },
    {
        old: "ContactFaxName",
        "new": "faxName"
    },
    {
        old: "ContactFax",
        "new": "fax"
    },
    {
        old: "ContactPhoneName",
        "new": "phoneName"
    },
    {
        old: "ContactPhone",
        "new": "contactPhone"
    },
    {
        old: "ContactPhoneExtension",
        "new": "phoneExtension"
    },
    {
        old: "SaleTaxGroup",
        "new": "saleTaxGroup"
    },
    {
        old: "SaleCurrencyCode",
        "new": "saleCurrencyCode"
    },
    {
        old: "CompanyChain",
        "new": "companyChain"
    },
    {
        old: "PaymentMethod",
        "new": "paymentMethod"
    },
    {
        old: "PaymentTerms",
        "new": "paymentTerms"
    },
    {
        old: "FinCostCenter",
        "new": "finCostCenter"
    },
    {
        old: "FinCustomerAccount",
        "new": "finCustomerAccount"
    },
    {
        old: "InterCompany",
        "new": "interCompany"
    }
];
exports.MW_ONE_CUSTOMER_KEY = MW_ONE_CUSTOMER_KEY;
var MW_ONE_CUSTOMER_ADDR_KEY = [
    {
        old: "MiddleRef",
        "new": "middleRef"
    },
    {
        old: "CustId",
        "new": "d365CustomerCode"
    },
    {
        old: "AddressType",
        "new": "addressType"
    },
    {
        old: "AddrCountry",
        "new": "countryId"
    },
    {
        old: "AddrCountryName",
        "new": "countryName"
    },
    {
        old: "AddrFull",
        "new": "address"
    },
    {
        old: "AddrStreet",
        "new": "street"
    },
    {
        old: "AddrState",
        "new": "provinceId"
    },
    {
        old: "AddrStateName",
        "new": "provinceName"
    },
    {
        old: "AddrCounty",
        "new": "districtId"
    },
    {
        old: "AddrCountyName",
        "new": "districtName"
    },
    {
        old: "AddrCity",
        "new": "subDistrictId"
    },
    {
        old: "AddrCityName",
        "new": "subDistrictName"
    },
    {
        old: "AddrZipcode",
        "new": "zipcode"
    },
];
exports.MW_ONE_CUSTOMER_ADDR_KEY = MW_ONE_CUSTOMER_ADDR_KEY;
