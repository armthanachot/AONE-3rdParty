import { Module } from '@nestjs/common';
import { ProductSubCategoryController } from "./product-sub-category.controller"
import { ProductSubCategoryService } from "./product-sub-category.service"
import { ProductCategoryService } from "../product-category/product-category.service"
@Module({
    imports: [],
    controllers: [ProductSubCategoryController],
    providers: [ProductSubCategoryService,ProductCategoryService]
})
export class ProductSubCategoryModule { }
