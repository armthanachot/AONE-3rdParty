/**
 * 
 * COMMON LIB
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UsePipes } from '@nestjs/common';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"
/**
 * 
 * SCHEMA | PIPE
 */
import { PRODUCT_CATEGORY } from "../../schema/product.schema"
import { ThirdPartyPipe } from "../3rd-party.pipe"

/**
 * 
 * SERVICE
 */
import { ProductCategoryService } from "./product-category.service"
/**
 * 
 * CONSTANTS
 */
import { _ } from "../../constant/config"
/**
* 
* UTILS
*/
import { responseMessages } from "../../util/response"

@Controller('product-categories')
export class ProductCategoryController {
    constructor(private readonly productCategoryService: ProductCategoryService) { }

    @Post()
    @UsePipes(new ThirdPartyPipe(PRODUCT_CATEGORY))
    async create(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            let affected = null
            let hasCategories = null
            for (const category of payload.categories) {
                const { productCategoryCode, productCategory } = category
                hasCategories = await this.productCategoryService.findByCode(productCategoryCode)
                affected = hasCategories.length ? await this.productCategoryService.update({ productCategory }, productCategoryCode) : await this.productCategoryService.create(category)
            }
            return res.status(StatusCodes.CREATED).json(await responseMessages(StatusCodes.CREATED, _))
        } catch (error) {
            console.log(error.message);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }
}
