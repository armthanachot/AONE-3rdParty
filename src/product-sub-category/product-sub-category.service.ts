import { Injectable } from '@nestjs/common';
import * as productSubCategoryModel from "./product-sub-category.model"
@Injectable()
export class ProductSubCategoryService {
    async findByRefCode(refCode) {
        const sub_category = await productSubCategoryModel.findByRefCode(refCode)
        return sub_category
    }
    async create(product_sub_categories) {
        const created = await productSubCategoryModel.create(product_sub_categories)
        return created
    }
    async update(product_sub_categories, refId) {
        const created = await productSubCategoryModel.update(product_sub_categories, refId)
        return created
    }

}
