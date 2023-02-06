import { query, escape } from "../../config/db_connection"

const findAllCustomer = async () => {
    const result = await query(`SELECT temp_customers.customerCode AS tCustomerCode,temp_customers.middleRef AS tMiddleRef,temp_customers.customerName AS tCustomerName,temp_customers.contactType AS tContactType,temp_customers.companyName AS tCompanyName,temp_customers.taxNumber AS tTaxNumber,temp_customers.branchNumber AS tBranchNumber,
    temp_customers.employeeRespCode AS tEmployeeRespCode,temp_customers.custGroupId AS tCustGroupId,temp_customers.emailName AS tEmailName,temp_customers.contactEmail AS tContactEmail,temp_customers.faxName AS tFaxName,temp_customers.fax AS tFax,temp_customers.phoneName AS tPhoneName,temp_customers.contactPhone AS tContactPhone,
    temp_customers.phoneExtension AS tPhoneExtension,temp_customers.saleTaxGroup AS tSaleTaxGroup,temp_customers.saleCurrencyCode AS tSaleCurrencyCode,temp_customers.companyChain AS tCompanyChain,temp_customers.paymentMethod AS tPaymentMethod,temp_customers.paymentTerms AS tPaymentTerms,temp_customers.finCostCenter AS tFinCostCenter,
    temp_customers.finCustomerAccount AS tFinCustomerAccount,temp_customers.interCompany AS tInterCompany,
    customers.customerCode,customers.customerName,customers.contactType,customers.companyName,customers.employeeCode,customers.taxNumber,customers.branchNumber
    FROM temp_customers
    LEFT JOIN customers ON temp_customers.customerCode = customers.customerCode
    `)
    return result
}
const findCustomerByCustomerCode = async ({ refId, status }) => {
    const result = await query(`SELECT customerCode WHERE customerCode = ? AND status = ?`, [refId, status])
    return result
}


const findAllCustomerAddressTemp = async () => {
    const result = await query(`SELECT * FROM temp_customer_addresses`)
    return result
}
const createCustomerTempTable = async () => {
    const result = await query(`CREATE TEMPORARY TABLE temp_customers(
        customerId INT(11) AUTO_INCREMENT PRIMARY KEY,
        customerCode VARCHAR(255) NOT NULL,
        d365CustomerCode VARCHAR(255) NOT NULL,
        d365CustomerInvAccount VARCHAR(255) NOT NULL,
        middleRef VARCHAR(255) NOT NULL,
        customerName VARCHAR(255) NOT NULL,
        contactType ENUM('PERSONAL','ORGANIZATION') NOT NULL,
        companyName VARCHAR(255) DEFAULT NULL,
        taxNumber VARCHAR(255)  DEFAULT NULL,
        branchNumber VARCHAR(255)  DEFAULT NULL,
        employeeRespCode VARCHAR(255) NOT NULL,
        custGroupId VARCHAR(255) DEFAULT NULL,
        emailName VARCHAR(255) DEFAULT NULL,
        contactEmail VARCHAR(255) DEFAULT NULL,
        faxName VARCHAR(255) DEFAULT NULL,
        fax VARCHAR(255) DEFAULT NULL,
        phoneName VARCHAR(255) DEFAULT NULL,
        contactPhone VARCHAR(255) DEFAULT NULL,
        phoneExtension VARCHAR(255) DEFAULT NULL,
        saleTaxGroup VARCHAR(255) DEFAULT NULL,
        saleCurrencyCode VARCHAR(255) DEFAULT NULL,
        companyChain VARCHAR(255) DEFAULT NULL,
        paymentMethod VARCHAR(255) DEFAULT NULL,
        paymentTerms VARCHAR(255) DEFAULT NULL,
        finCostCenter VARCHAR(255) DEFAULT NULL,
        finCustomerAccount VARCHAR(255) DEFAULT NULL,
        interCompany VARCHAR(255) DEFAULT NULL
    )`)
    return result
}
const createCustomerAddressTempTable = async () => {
    const result = await query(`
    CREATE TEMPORARY TABLE temp_customer_addresses(
        customerAddressId INT(11) AUTO_INCREMENT PRIMARY KEY,
        customerCode VARCHAR(255) NOT NULL,
        d365CustomerCode VARCHAR(255) NOT NULL,
        middleRef VARCHAR(255) NOT NULL,
        addressType ENUM('PERSONAL','INVOICE') NOT NULL,
        address VARCHAR(255) DEFAULT NULL,
        street VARCHAR(255) DEFAULT NULL,
        countryId VARCHAR(255) DEFAULT NULL,
        countryName VARCHAR(255) DEFAULT NULL,
        provinceId VARCHAR(255) DEFAULT NULL,
        provinceName VARCHAR(255) DEFAULT NULL,
        districtId VARCHAR(255) DEFAULT NULL,
        districtName VARCHAR(255) DEFAULT NULL,
        subDistrictId VARCHAR(255) DEFAULT NULL,
        subDistrictName VARCHAR(255) DEFAULT NULL,
        zipcode VARCHAR(255) DEFAULT NULL
    )`)
    return result
}
const createCustomerTemp = async (customer) => {
    const result = await query(`INSERT INTO temp_customers SET ?`, [customer])
    return result
}
const createCustomerAddressTemp = async (address) => {
    const result = await query(`INSERT INTO temp_customer_addresses SET ?`, [address])
    return result
}


const updateCustomerWithTemp = async () => {
    const result = await query(`UPDATE customers,temp_customers SET 
    customers.customerCode=temp_customers.customerCode,
    customers.d365CustomerCode=temp_customers.d365CustomerCode,
    customers.d365CustomerInvAccount=temp_customers.d365CustomerInvAccount,
    customers.middleRef=temp_customers.middleRef,
    customers.customerName=temp_customers.customerName,
    customers.contactType=temp_customers.contactType,
    customers.companyName=temp_customers.companyName,
    customers.taxNumber=temp_customers.taxNumber,
    customers.branchNumber=temp_customers.branchNumber,
    customers.employeeRespCode = temp_customers.employeeRespCode,
    customers.custGroupId = temp_customers.custGroupId,
    customers.emailName = temp_customers.emailName,
    customers.contactEmail = temp_customers.contactEmail,
    customers.faxName = temp_customers.faxName,
    customers.fax = temp_customers.fax,
    customers.phoneName = temp_customers.phoneName,
    customers.contactPhone = temp_customers.contactPhone,
    customers.phoneExtension = temp_customers.phoneExtension,
    customers.saleTaxGroup = temp_customers.saleTaxGroup,
    customers.saleCurrencyCode = temp_customers.saleCurrencyCode,
    customers.companyChain = temp_customers.companyChain,
    customers.paymentMethod = temp_customers.paymentMethod,
    customers.paymentTerms = temp_customers.paymentTerms,
    customers.finCostCenter = temp_customers.finCostCenter,
    customers.finCustomerAccount = temp_customers.finCustomerAccount,
    customers.interCompany = temp_customers.interCompany
    WHERE customers.customerCode = temp_customers.customerCode
    `)
    return result
}

const updateCustomerAddressWithTemp = async () => {
    const result = await query(`CALL sp_customer_address()`)
    return result
}


const dropTable = async (table_name) => {
    const result = await query(`DROP TEMPORARY TABLE ${table_name}`, [table_name])
    return result
}

export {
    findAllCustomer,
    findCustomerByCustomerCode,
    findAllCustomerAddressTemp,
    createCustomerTempTable,
    createCustomerAddressTempTable,
    createCustomerTemp,
    createCustomerAddressTemp,
    updateCustomerWithTemp,
    updateCustomerAddressWithTemp,
    dropTable
}