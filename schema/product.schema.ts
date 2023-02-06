import * as joi from "joi"
const PRODUCT = {
    productCode: joi.string().required(),
    productCategoryCode: joi.string().required(),
    productSubCategoryCode: joi.string().required(),
    distributedBy: joi.string().allow(null,"").required(),
    productModel: joi.string().allow(null,"").required(),
    productSize: joi.string().allow(null,"").required(),
    productColor: joi.string().allow(null,"").required(),
    productName: joi.string().required(),
    productPrice: joi.number().required(),
    images: joi.array().items({
        fileType:joi.string().allow(null,"").required(),
        fileName:joi.string().allow(null,"").required(),
        filePath:joi.string().required(),
        fileExtension:joi.string().allow(null,"").required(),
        fileSize:joi.number().allow(null,"").required()
    }).allow(null, "").required(),
    productDescription: joi.string().allow(null, "").required()
}

const PRODUCT_CATEGORY = joi.object({
    categories: joi.array().items(
        {
            productCategoryCode: joi.string().required(),
            productCategory: joi.string().required()
        }
    ).required()
})

const SUB_CATEGORY = joi.object({
    subCategories: joi.array().items(
        {
            productCategoryCode: joi.string().required(),
            productSubCategoryCode: joi.string().required(),
            productSubCategory: joi.string().required()
        }).required()
})
const CREATE_PRODUCT = joi.object({
    products: joi.array().items(PRODUCT).required()
})

export {
    CREATE_PRODUCT,
    PRODUCT_CATEGORY,
    SUB_CATEGORY
}