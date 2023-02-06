import { Injectable } from '@nestjs/common';
import * as productModel from "./product.model"
@Injectable()
export class ProductService {
    async findByProductCode(product_code) {
        const product = await productModel.findByProductCode(product_code)
        return product
    }
    async findFile(ref) {
        const file = await productModel.findFile(ref)
        return file
    }
    async create(product) {
        const created = await productModel.create(product)
        return created
    }
    async createFile(file) {
        const created = await productModel.createFile(file)
        return created
    }
    async update(product, refCode) {
        const updated = await productModel.update(product, refCode)
        return updated
    }
    async updateFile(file, refId) {
        const updated = await productModel.updateFile(file, refId)
        return updated
    }

}
