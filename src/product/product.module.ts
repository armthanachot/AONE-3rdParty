import { Module } from '@nestjs/common';
import {ProductController} from "./product.controller"
import {ProductService} from "./product.service"
import {ProductCategoryService} from "../product-category/product-category.service"
import {ProductSubCategoryService} from "../product-sub-category/product-sub-category.service"
@Module({
    imports:[],
    controllers:[ProductController],
    providers:[ProductService,ProductCategoryService,ProductSubCategoryService]
})
export class ProductModule {}
