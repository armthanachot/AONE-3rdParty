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
import { SUB_CATEGORY } from "../../schema/product.schema"
import { ThirdPartyPipe } from "../3rd-party.pipe"

/**
 * 
 * SERVICE
 */
import { ProductSubCategoryService } from "./product-sub-category.service"
import { ProductCategoryService } from "../product-category/product-category.service"
/**
 * 
 * CONSTANTS
 */
import { _ } from "../../constant/config"
import { MSG } from "../../constant/errmsg"
/**
* 
* UTILS
*/
import { responseMessages } from "../../util/response"
@Controller('product-sub-categories')
export class ProductSubCategoryController {
    constructor(private readonly productSubCategoryService: ProductSubCategoryService, private readonly productCategoryService: ProductCategoryService) { }

    @Post()
    @UsePipes(new ThirdPartyPipe(SUB_CATEGORY))
    async create(@Req() req: Request, @Res() res: Response, @Body() payload) {
        try {
            let affected = null,
                hasCategory = null,
                hasSubCategory = null,
                refId = null
            for (const subcategory of payload.subCategories) {
                const { productCategoryCode, productSubCategoryCode, productSubCategory } = subcategory
                hasCategory = await this.productCategoryService.findByCode(productCategoryCode)
                if (!hasCategory.length) return res.status(StatusCodes.NOT_FOUND).json(await responseMessages(StatusCodes.NOT_FOUND, MSG.PRODUCTCAT.NOT_FOUND_PRODUCTCAT))
                refId = { productCategoryCode, productSubCategoryCode }
                hasSubCategory = await this.productSubCategoryService.findByRefCode(refId)
                affected = hasSubCategory.length ? await this.productSubCategoryService.update({ productSubCategory }, refId) : await this.productSubCategoryService.create(subcategory)
            }
            return res.status(StatusCodes.CREATED).json(await responseMessages(StatusCodes.CREATED, _))
        } catch (error) {
            console.log(error.message);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(await responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, _))
        }
    }
}

