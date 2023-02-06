import { query } from "../../config/db_connection"

const findByCode = async (category_code) => {
    const result = await query(`SELECT productCategoryId,productCategoryCode,productCategory FROM product_categories WHERE productCategoryCode = ?`, [category_code])
    return result
}

const create = async (product_category) => {
    const result = await query(`INSERT INTO product_categories SET ?`,
        [product_category])
    return result
}

const update = async (product_category, category_code) => {
    const result = await query(`UPDATE product_categories SET ?  WHERE productCategoryCode = ?`, [product_category, category_code])
    return result
}


export {
    findByCode,
    create,
    update
}