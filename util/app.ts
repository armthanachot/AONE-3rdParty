import * as cryptoJS from "crypto-js"
import { STATUS } from "../constant/config"
const { INACTIVE } = STATUS


const generateCode = async () => {
    return await Math.floor(Math.random() * 1000000000)
}


const findOne = async (object) => {
    return await object[0] || {};
}

const stringToArray = async (str) => {
    return str.split(',')
}
const fullUrl = async ({ protocol, hostname, url }) => {
    return `${protocol}://${hostname}${url}`
}
const toSnakeCase = async str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(item => item.toLowerCase()).join('_');

const handleFileFields = async (fields, files) => {
    try {
        const key = Object.keys(fields)
        files.map((item) => {
            let { fileField, filePath, fileStatus } = item
            if (key.includes(fileField) && fileStatus !== INACTIVE) fields[fileField].push(filePath)
        })
        return fields
    } catch (error) {
        console.log(error.message);
        return false
    }
}
const hadleCustomerFileFields = async (files) => {
    try {
        const file = { files: [] }
        await files.map((item) => {
            const { fieldname: type, mimetype: fileType, name: fileName, size: fileSize, path: filePath } = item
            file.files.push({ type, fileType, fileName, fileSize, filePath })
        })
        return file
    } catch (error) {
        console.log(error.message);
        return false
    }
}
const removeUselessKey = async (obj, keys) => {
    return await keys.forEach(key => delete obj[key]);
}

const schemaValidator = async (data, schema) => {
    try {
        const validated = await schema.validateAsync(data)
        return validated
    } catch (error) {
        return error
    }
}
const passwordHash = async (password) => {
    const salt = Math.random().toString(36).substring(2)
    const pw = password + salt
    const encrypted = await cryptoJS.SHA256(pw)
    return { salt, encrypted: encrypted.toString() }
}
const userAgent = async (req) => {
    return {
        ip: req.ip,
        headers: JSON.stringify(req.headers),
        userAgent: req.get("user-agent"),
        endpoint: req.path
    }
}
const renameObjectKey = async (obj, key_pair) => {
    const obj_key = Object.keys(obj)
    await key_pair.map((key)=>{
        if(obj_key.includes(key.old)){
            obj[key.new] = obj[key.old]
            delete obj[key.old]
        }
    })
    return obj
}

export {
    generateCode,
    findOne,
    stringToArray,
    fullUrl,
    toSnakeCase,
    handleFileFields,
    hadleCustomerFileFields,
    removeUselessKey,
    schemaValidator,
    passwordHash,
    userAgent,
    renameObjectKey
}