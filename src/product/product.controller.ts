/* 
* COMMON LIB
*/
import { Body, Controller, Delete, Get, Post, Put, Req, Res, UsePipes } from '@nestjs/common';
import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
/**
 * 
 * SCHEMA | PIPE
 */
import { CREATE_PRODUCT } from "../../schema/product.schema"
import { ThirdPartyPipe } from "../3rd-party.pipe"
/**
 * 
 * UTILS
 */
import { responseMessages } from "../../util/response"
/**
 * 
 * SERVICE
 */
import { ProductService } from "./product.service"
import { ProductSubCategoryService } from '../product-sub-category/product-sub-category.service';
/**
 *
 * CONSTANTS
 */
import { _, STATUS } from "../../constant/config"
import { MSG } from '../../constant/errmsg';

/**
 * 
 * DB OPTIONS
 */
import { beginTransaction, commit, rollback } from "../../config/db_connection"
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService, private readonly productSubCategoryService: ProductSubCategoryService) { }

    @Post()
    @UsePipes(new ThirdPartyPipe(CREATE_PRODUCT))
    async create(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            await beginTransaction()
            let affected = null,
                hasData = null,
                refCode = null
            for (const product of payload.products) {
                const { productCode, productCategoryCode, productSubCategoryCode, images } = product
                delete product.images
                refCode = { productCategoryCode, productSubCategoryCode }
                hasData = await this.productSubCategoryService.findByRefCode(refCode)
                if (!hasData.length) return res.status(StatusCodes.NOT_FOUND).json(await responseMessages(StatusCodes.NOT_FOUND, MSG.PRODUCTCAT.NOT_FOUND_PRODUCTCAT))
                hasData = await this.productService.findByProductCode(productCode)
                refCode.productCode = productCode
                affected = hasData.length ? await this.productService.update(product, refCode) : await this.productService.create(product)
                for (const image of images) {
                    image.refId = productCode
                    image.type = "IMAGES"
                    const { refId, filePath } = image
                    refCode = { refId, filePath }
                    hasData = await this.productService.findFile(refCode)
                    if (!hasData.length) {
                        affected = await this.productService.createFile(image)
                    }
                }

            }
            await rollback()
            return res.status(StatusCodes.CREATED).json(await responseMessages(StatusCodes.CREATED, _))
        } catch (error) {
            console.log(error.message);
            await rollback()
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }
}
