/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

/**
 * 
 * TECHNICIANS is DESIGNER,ENGINEER,ESTABLISHED
 */
const CUSTOMER_TYPE = {
  TECHNICIANS: "TECHNICIANS",
  PROJECT_OWNER: "PROJECT OWNER",
  CONSTRUCTOR: "CONSTRUCTOR",
}
const CUSTOMER_CONTACT_TYPE = {
  PERSONAL: "PERSONAL",
  ORGANIZATION: "ORGANIZATION",
}

const CONTACT_TYPE = {
  SERVICE: "SERVICE",
  ESTATE: "ESTATE",
  CONTRACTOR: "CONTRACTOR",
  DESIGN: "DESIGN",
  AFFILIATED: "AFFILIATED",
  BOUGHT_SOLD: "BOUGHT_SOLD",
  ANOTHER: "ANOTHER",
}
const CUSTOMER_STATUS = {
  GREEN: "GREEN",
  YELLOW: "YELLOW",
  RED: "RED",
}

const SHOP_TYPE = {
  MATERIAL: "MATERIAL",
}

const RELIGION = {
  CHRISTIANITY: "CHRISTIANITY",
  ISLAM: "ISLAM",
  BUDDHISM: "BUDDHISM",
  BRAHMANISM_HINDUISM: "BRAHMANISM HINDUISM",
  AGNOSTIC_ATHEIST: "AGNOSTIC ATHEIST",
}

const CUSTOMER_ACTIVE = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DELETED: "DELETED",
}

const COMPANY_POSITION = {
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
  ANOTHER: "ANOTHER",
}

const ADDRESS_TYPE = {
  PERSONAL: "PERSONAL",
  BUSINESS: "BUSINESS",
  INVOICE: "INVOICE",
}

const FILE_FIELDS = {
  customerImg: [],
  photos: [],
  citizenCardImg: [],
  companyCertificate: [],
  wordMap20: []
}
const CUSTOMER_FILES = {
  PROFILE: [],
  IMAGES: [],
  CITIZENID: [],
  CERTIFICATE: [],
  WORDMAP20: []
}

const CUSTOMER_TEMPLATE = {
  customer: {},
  contact: {},
  business: {},
  file: []
}

const CUSTOMER_CODE_PREFIX = {
  "PROJECT OWNER": "O",
  TECHNICIANS: "D",
  CONSTRUCTOR: "C",
  "PROJECT PENDING": "P",
  AGENT: "A"

}

const FILE_TOPIC = "customer"

const NO_FOLLOWER = "NO FOLLOWER"

const FILE_TYPE = {
  IMAGES: "IMAGES",
  CITIZENID: "CITIZENID",
  PROFILE: "PROFILE",
  CERTIFICATE: "CERTIFICATE",
  WORDMAP20: "WORDMAP20"
}

const MW_ONE_CUSTOMER_KEY = [
  {
    old: "MiddleRef",
    new: "middleRef"
  },
  {
    old: "KnowAs",
    new: "customerCode"
  },
  {
    old: "CustId",
    new: "d365CustomerCode"
  },
  {
    old: "CustInvAccount",
    new: "d365CustomerInvAccount"
  },
  {
    old: "CustomerName",
    new: "customerName"
  },
  {
    old: "PartyType",
    new: "contactType"
  },
  {
    old: "OrganizationName",
    new: "companyName"
  },
  {
    old: "EmployeeRespCode",
    new: "employeeRespCode"
  },
  {
    old: "TaxNumber",
    new: "taxNumber"
  },
  {
    old: "TaxBranch",
    new: "branchNumber"
  },
  {
    old: "CustGroupId",
    new: "custGroupId"
  },
  {
    old: "ContactEmailName",
    new: "emailName"
  },
  {
    old: "ContactEmail",
    new: "contactEmail"
  },
  {
    old: "ContactFaxName",
    new: "faxName"
  },
  {
    old: "ContactFax",
    new: "fax"
  },
  {
    old: "ContactPhoneName",
    new: "phoneName"
  },
  {
    old: "ContactPhone",
    new: "contactPhone"
  },
  {
    old: "ContactPhoneExtension",
    new: "phoneExtension"
  },
  {
    old: "SaleTaxGroup",
    new: "saleTaxGroup"
  },
  {
    old: "SaleCurrencyCode",
    new: "saleCurrencyCode"
  },
  {
    old: "CompanyChain",
    new: "companyChain"
  },
  {
    old: "PaymentMethod",
    new: "paymentMethod"
  },
  {
    old: "PaymentTerms",
    new: "paymentTerms"
  },
  {
    old: "FinCostCenter",
    new: "finCostCenter"
  },
  {
    old: "FinCustomerAccount",
    new: "finCustomerAccount"
  },
  {
    old: "InterCompany",
    new: "interCompany"
  }
]
const MW_ONE_CUSTOMER_ADDR_KEY = [
  {
    old: "MiddleRef",
    new: "middleRef"
  },
  {
    old: "CustId",
    new: "d365CustomerCode"
  },
  {
    old: "AddressType",
    new: "addressType"
  },
  {
    old: "AddrCountry",
    new: "countryId"
  },
  {
    old: "AddrCountryName",
    new: "countryName"
  },
  {
    old: "AddrFull",
    new: "address"
  },
  {
    old: "AddrStreet",
    new: "street"
  },
  {
    old: "AddrState",
    new: "provinceId"
  },
  {
    old: "AddrStateName",
    new: "provinceName"
  },
  {
    old: "AddrCounty",
    new: "districtId"
  },
  {
    old: "AddrCountyName",
    new: "districtName"
  },
  {
    old: "AddrCity",
    new: "subDistrictId"
  },
  {
    old: "AddrCityName",
    new: "subDistrictName"
  },
  {
    old: "AddrZipcode",
    new: "zipcode"
  },
]
export { CUSTOMER_TYPE, CUSTOMER_STATUS, CONTACT_TYPE, SHOP_TYPE, RELIGION, CUSTOMER_ACTIVE, COMPANY_POSITION, ADDRESS_TYPE, CUSTOMER_CONTACT_TYPE, FILE_FIELDS, CUSTOMER_TEMPLATE, CUSTOMER_FILES, CUSTOMER_CODE_PREFIX, FILE_TOPIC, NO_FOLLOWER, FILE_TYPE, MW_ONE_CUSTOMER_KEY, MW_ONE_CUSTOMER_ADDR_KEY }
