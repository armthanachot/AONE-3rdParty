import { Module } from '@nestjs/common';
import {CustomerController} from "./customer.controller"
import { CustomerService } from './customer.service';
import { ClientService } from "../client/client.service"


@Module({
  imports:[],
  controllers:[CustomerController],
  providers: [CustomerService,ClientService],
})
export class CustomerModule {}
