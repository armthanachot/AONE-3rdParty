import { Injectable } from '@nestjs/common';
import * as employeeModel from "./employee.model"
@Injectable()
export class EmployeeService {
    async findAll(filter){
        const employees = await employeeModel.findAll(filter)
        return employees
    }

    async findEmployeeByEmployeeCode(filter) {
        const employee = await employeeModel.findEmployeeByEmployeeCode(filter)
        return employee
    }
    async findEmployeeGallery(filter) {
        const galleries = await employeeModel.findEmployeeGallery(filter)
        return galleries
    }
    async create(employee) {
        const created = await employeeModel.create(employee)
        return created
    }
    async fileUpload(files) {
        const uploaded = await employeeModel.uploadFile(files)
        return uploaded
    }

    async update(employee,employeeId) {
        const updated = await employeeModel.update(employee,employeeId)
        return updated
    }

    async destroyFile(params) {
        const destroyed = await employeeModel.destroyFile(params)
        return destroyed
    }
}
