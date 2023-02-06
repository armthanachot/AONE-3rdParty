import { query, escape } from "../../config/db_connection"


const findByProductCode = async (product_code) => {
    const result = await query(`SELECT productCode,productCategoryCode,productSubCategoryCode,productName,productPrice,productDescription FROM products WHERE productCode = ?`, [product_code])
    return result
}

const findFile = async ({ refId, filePath }) => {
    const result = await query(`SELECT filePath FROM files WHERE refId = ? AND filePath = ?`, [refId, filePath])
    return result
}

const create = async (product) => {
    const result = await query(`INSERT INTO products SET ?`, [product])
    return result
}

const createFile = async (file) => {
    const result = await query(`INSERT INTO files SET ?`, [file])
    return result
}
const update = async (product, { productCategoryCode, productSubCategoryCode, productCode }) => {
    const result = await query(`UPDATE products SET ? WHERE productCode = ? AND productCategoryCode = ? AND productSubCategoryCode = ?`, [product, productCode, productCategoryCode, productSubCategoryCode])
    return result
}

const updateFile = async (file, { refId, filePath }) => {
    const result = await query(`UPDATE files SET ? WHERE refId = ? AND filePath = ?`, [file, refId, filePath])
    return result
}


export {
    findByProductCode,
    findFile,
    create,
    createFile,
    update,
    updateFile
}