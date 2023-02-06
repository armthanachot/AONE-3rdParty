import { query } from "../../config/db_connection"


const findClientByClientId = async ({ clientId, status }) => {
    const result = await query(`SELECT clientId,clientSecret,salt,appName,host,description FROM clients WHERE clientId = ? AND status = ?`, [clientId, status])
    return result
}
const findLastToken = async ({ clientId,token }) => {
    const result = await query(`SELECT lastToken FROM clients WHERE clientId = ? AND lastToken = ?`,[clientId,token])
    return result
}
const createEmployeeLogin = async (employee) => {
    const result = await query(`INSERT INTO employee_login SET ?`, [employee])
    return result
}
const clientSignup = async (client) => {
    const result = await query(`INSERT INTO clients SET ?`, [client])
    return result
}
const updateClientToken = async (token, clientId) => {
    const result = await query(`UPDATE clients SET lastToken = ? WHERE clientId = ?`, [token, clientId])
    return result
}
const logout = async ({ employeeCode, token }) => {
    const result = await query(`UPDATE employee_login SET logoutTime = CURRENT_TIMESTAMP() WHERE employeeCode = ? AND token= ?`, [employeeCode, token])
    return result
}
const logging = async (log) => {
    const result = await query(`INSERT INTO logs SET ?`,[log])
    return await result
}

export {
    findClientByClientId,
    findLastToken,
    createEmployeeLogin,
    clientSignup,
    updateClientToken,
    logout,
    logging
}