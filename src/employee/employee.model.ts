import { findOne } from "util/app"
import { query, escape } from "../../config/db_connection"


const findAll = async ({ START, PERPAGE, SORT_BY, SORT, SEARCH, STATUS }) => {
    const CONDITION = SEARCH ? ` AND employees.fullName LIKE ${escape(`%${SEARCH}%`)}` : ``
    const result = await query(`SELECT employeeId,employeeCode,citizenId,email,phone,startDate,modelGroup,modelGroupTa,description,fullName FROM employees
        WHERE status = ?
        ${CONDITION}
        ORDER BY ? ?
        LIMIT ?, ?
    `, [STATUS, SORT_BY, SORT, START, PERPAGE])
    return result
}

const findEmployeeByEmployeeCode = async ({ employeeCode, status }) => {
    const result = await query(`SELECT employees.employeeId,employees.employeeCode,employees.citizenId,employees.email,employees.phone,employees.password,employees.startDate,employees.description,employees.salt,employees.fullName,
    positions.position,sections.sectionName
    FROM employees 
    LEFT JOIN positions ON employees.positionId = positions.positionId
    LEFT JOIN sections ON employees.sectionId = sections.sectionId
    WHERE employees.employeeCode = ? AND employees.status = ?`, [employeeCode, status])
    return result
}

const findEmployeeGallery = async ({ START, PERPAGE, SORT_BY, SORT, TYPE, REF_ID, STATUS }) => {
    const result = await query(`
    SELECT filePath FROM files WHERE refId = ? AND type = ? AND status = ?
    ORDER BY ? ?
    LIMIT ?, ?
    `, [REF_ID, TYPE, STATUS, SORT_BY, SORT, START, PERPAGE])
    return result
}
const findSectorByName = async (name) => {
    const result = await query(`SELECT sectorId FROM sectors WHERE  sectorName = ?`, [name])
    return result
}

const findSectionByName = async (name) => {
    const result = await query(`SELECT sectionId FROM sections WHERE sectionName = ?`, [name])
    return result
}
const findPositionByName = async (name) => {
    const result = await query(`SELECT positionId FROM positions WHERE  position = ?`, [name])
    return result
}
const findAreaByName = async (name) => {
    const result = await query(`SELECT areaId FROM areas WHERE  areaName = ?`, [name])
    return result
}
const findModelGroupTAByName = async (name) => {
    const result = await query(`SELECT modelGroupTaId FROM model_group_ta WHERE modelGroupTaName LIKE ${escape(`%${name}%`)}`)
    return result
}
const create = async ({ employeeCode, citizenId, email, phone, password, startDate, position, section, area, taModel, description, salt, fullName, nickname }) => {
    const result = await query(`INSERT INTO employees(employeeCode,citizenId,email,phone,password,startDate,positionId,sectionId,areaId,modelGroupTaId,description,salt,fullName,nickname) 
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [employeeCode, citizenId, email, phone, password, startDate, position, section, area, taModel, description, salt, fullName, nickname])
    return result
}

const createModelGroupUser = async (user) => {
    const result = await query(`INSERT INTO model_group_user(userId,modelGroupId,positionId) VALUES ?`, [user])
    return result
}
const createModelGroupTaUser = async (user) => {
    const result = await query(`INSERT INTO model_group_ta_user(userId,modelGroupTaId) VALUES ?`, [user])
    return result
}

const uploadFile = async (files) => {
    const result = await query(`INSERT INTO files(type, fileType, fileName, fileSize, filePath, refId) VALUES ?`, [files])
    return result
}

const update = async ({ employeeCode, citizenId, email, phone, password, startDate, position, section, area, taModel, description, salt, fullName, nickname }, employeeId) => {
    const result = await query(`UPDATE employees SET citizenId = ?, email = ?, phone = ?, password = ?, startDate = ?,
    positionId = ?,
    sectionId = ?,
    areaId = ?,
    modelGroupTaId = ?,
    description = ?,salt = ?,fullName = ?, nickname = ? 
    WHERE employeeId = ?`, [citizenId, email, phone, password, startDate, position, section, area, taModel, description, salt, fullName, nickname, employeeId])
    return result
}

const inactiveEmployee = async (employees_code) => {
    const employee = await query(`SELECT employeeId FROM employees WHERE employeeCode = ?`, [employees_code])
    const { employeeId } = await findOne(employee)
    // console.log(employeeId);
    // console.log(`UPDATE employees SET status = 'INACTIVE' WHERE employeeId = ${employeeId}`);
    const result = await query(`UPDATE employees SET status = 'INACTIVE' WHERE employeeId = ?`, [employeeId])
    return result
}

const destroyFile = async ({ refId, fileId, status }) => {
    const result = await query(`UPDATE files SET status = ? WHERE refId = ? AND fileId IN (?)`, [status, refId, fileId])
    return result
}



export {
    findAll,
    findEmployeeByEmployeeCode,
    findEmployeeGallery,
    findSectorByName,
    findSectionByName,
    findPositionByName,
    findAreaByName,
    findModelGroupTAByName,
    create,
    createModelGroupUser,
    createModelGroupTaUser,
    update,
    uploadFile,
    inactiveEmployee,
    destroyFile
}
