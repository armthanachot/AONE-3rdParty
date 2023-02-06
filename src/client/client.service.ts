import { Injectable } from '@nestjs/common';
import * as clientModel from "./client.model"
@Injectable()
export class ClientService {
    async findClientByClientId(filter) {
        const client = await clientModel.findClientByClientId(filter)
        return client
    }
    async createEmployeeLogin(employee) {
        const created = await clientModel.createEmployeeLogin(employee)
        return created
    }
    async clientSingup(client) {
        const signedup = await clientModel.clientSignup(client)
        return signedup
    }
    async updateClientToken(token, client_id) {
        const updated = await clientModel.updateClientToken(token, client_id)
        return updated
    }
    async logout(employee) {
        const logedout = await clientModel.logout(employee)
        return logedout
    }
    async logging(log){
        const created = await clientModel.logging(log)
        return created
    }
}
