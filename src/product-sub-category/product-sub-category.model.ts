import { query } from "../../config/db_connection";

const findByRefCode = async ({ productCategoryCode, productSubCategoryCode }) => {
    const result = await query(`SELECT productSubCategoryId, productCategoryCode, productSubCategoryCode, productSubCategory FROM product_sub_categories WHERE productCategoryCode = ? AND productSubCategoryCode = ?`, [productCategoryCode, productSubCategoryCode])
    return result
}

const create = async (product_sub_category) => {
    const result = await query(`INSERT INTO product_sub_categories SET ?`,
        [product_sub_category])
    return result
}

const update = async (product_sub_category, { productCategoryCode, productSubCategoryCode }) => {
    const result = await query(`UPDATE product_sub_categories SET ?  WHERE productCategoryCode = ? AND productSubCategoryCode = ?`, [product_sub_category, productCategoryCode, productSubCategoryCode])
    return result
}


export {
    findByRefCode,
    create,
    update
}