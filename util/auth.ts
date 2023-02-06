import * as jwt from "jsonwebtoken"
import * as fs from "fs"
import * as path from "path"
import * as dns from "dns"
import * as util from "util"
import * as cryptoJS from "crypto-js"
import { PRIVATE_KEY_PATH } from "../constant/config"

const lookup = util.promisify(dns.lookup)

const passwordHash = async (password) => {
    const salt = Math.random().toString(36).substring(2)
    const pw = password + salt
    const encrypted = await cryptoJS.SHA256(pw)
    return { salt, encrypted: encrypted.toString() }
}


const generateId = async () => {
    const id = []
    const client = {
        clientId: null,
        clientSecret: null
    }
    await Promise.all(Object.keys(client).map((key) => {
        return id.push([...Array(40)].map(i => (~~(Math.random() * 36)).toString(36)).join(''))
    }))
    const [cliendId, clientSecret] = id
    client.clientId = cliendId
    client.clientSecret = clientSecret
    return client
}

const generateJWT = async (payload) => {
    try {
        const private_key = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_PATH))
        const token = await jwt.sign(payload, private_key, { expiresIn: '1 day' })
        return token
    } catch (error) {
        console.log(error.message);
        return false
    }
}
const checkHostName = async (hostname) => {
    try {
        const result = await lookup(hostname)
        return result
    } catch (error) {
        console.log(error.message);
        return { message: error.message }
    }
}
const verifyToken = async (token) => {
    try {
        const private_key = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_PATH))
        const verified = await jwt.verify(token, private_key)
        return verified
    } catch (error) {
        console.log(error.message);
        return { status: false, message: error.message }
    }
}
const verifyPassword = async (password, hashed) => {
    const encrypted = await cryptoJS.SHA256(password)
    if (encrypted.toString() === hashed) return true
    return false
}

export { passwordHash, generateId, generateJWT, checkHostName, verifyToken, verifyPassword }