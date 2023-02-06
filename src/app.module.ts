import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductSubCategoryModule } from './product-sub-category/product-sub-category.module';
import { permissionVerify } from "../middleware/auth.middleware"
import { ClientModule } from './client/client.module';
import { ThailandGeoModule } from './thailand-geo/thailand-geo.module';

@Module({
  imports: [CustomerModule,EmployeeModule,ProductModule,ProductCategoryModule,ProductSubCategoryModule, ClientModule, ThailandGeoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    const { GET, POST, PUT, DELETE, ALL } = RequestMethod
    // consumer.apply(permissionVerify).forRoutes({ path: 'customers', method: ALL })
    // consumer.apply(permissionVerify).forRoutes({ path: 'employees', method: ALL })
    // consumer.apply(permissionVerify).forRoutes({ path: 'products', method: ALL })
    // consumer.apply(permissionVerify).forRoutes({ path: 'product-categories', method: ALL })
    // consumer.apply(permissionVerify).forRoutes({ path: 'product-sub-categories', method: ALL })
  }
}
