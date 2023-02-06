import { Injectable } from '@nestjs/common';
import * as productCategoryModel from "./product-category.model"

@Injectable()
export class ProductCategoryService {

    async findByCode(category_code) {
        const product_category = await productCategoryModel.findByCode(category_code)
        return product_category
    }
    async create(product_categories) {
        const created = await productCategoryModel.create(product_categories)
        return created
    }
    async update(product_categories, category_code) {
        const created = await productCategoryModel.update(product_categories, category_code)
        return created
    }
}
