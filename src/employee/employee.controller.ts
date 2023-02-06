/**
 * 
 * COMMON LIB
 */
import { Body, Controller, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"
import xlsxFile from 'read-excel-file/node'

/**
* 
* UTILS
*/
import { responseMessages } from "../../util/response"
import { findOne, removeUselessKey } from "../../util/app"
import { passwordHash } from "../../util/auth"
/**
 * 
 * SERVICE
 */
import { EmployeeService } from "./employee.service"
/**
 * 
 * CONSTANTS
 */
import { _, STATUS } from "../../constant/config"
const { ACTIVE, INACTIVE } = STATUS
import { POSITION, EMPLOYEE_SCHEMA, EMPLOYEE_FILE } from "../../constant/employee"
import { beginTransaction, commit, rollback } from '../../config/db_connection';
import * as model from "./employee.model"
@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }
    @Post()
    async create(@Req() req: Request, @Res() res: Response) {
        try {
            await beginTransaction()
            const employees = await xlsxFile(EMPLOYEE_FILE, { schema: EMPLOYEE_SCHEMA })
            if (employees.errors.length) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, "INAVLID SCHEMA OF DATA"))
            let affected = null,
                hasEmployee:any = null,
                filter:any = null
            for (const employee of employees.rows) {
                const { employeeCode, password, confirmPassword, position, section, area, taModel } = employee
                if (position && !Object.values(POSITION).includes(position)) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, "INVALID EMPLOYEE POSITION"))
                if (password !== confirmPassword) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, "PASSWORD AND COMFIRM PASSWORD NOT EQUALS"))
                const { salt, encrypted } = await passwordHash(password)
                employee.password = encrypted
                employee.salt = salt
                employee.fullName = employee.name + " " + (employee.lastname || "")
                const [startDate, startTime] = employee.startDate.toISOString().split('T')
                employee.startDate = startDate
                const { positionId } = await findOne(await model.findPositionByName(position))
                const { sectionId } = await findOne(await model.findSectionByName(section))
                const { areaId } = await findOne(await model.findAreaByName(area))
                const { modelGroupTaId } = await findOne(await model.findModelGroupTAByName(taModel))
                console.log(modelGroupTaId);
                
                // model group -1 when upload to staging before knacx
                // model group +1 when upload to staging after knacx
                employee.position = positionId
                employee.section = sectionId
                employee.area = areaId
                employee.taModel = modelGroupTaId
                await removeUselessKey(employee, ["id", "confirmPassword", "name", "lastname"])
                filter = { employeeCode, status: ACTIVE }
                hasEmployee = await this.employeeService.findEmployeeByEmployeeCode(filter)
                const { employeeId } = await findOne(hasEmployee)
                affected = hasEmployee.length ? await this.employeeService.update(employee, employeeId) : await this.employeeService.create(employee)
                console.log(employee);
            }
            // 935
            
            await commit()
            return res.status(StatusCodes.OK).json(await responseMessages(StatusCodes.OK, _))
        } catch (error) {
            console.log("error: ",error);
            await rollback()
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }

    @Put('/inactive')
    async inactive(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            
            Promise.all(payload.map(async (item) => {
                const { employeeCode } = item
                const inactived = await model.inactiveEmployee(employeeCode)
            }))
            return res.status(StatusCodes.OK).json(await responseMessages(StatusCodes.OK, _))
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }
}
