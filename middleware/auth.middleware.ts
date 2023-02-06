import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes"
import { _ } from "../constant/config"
import { responseMessages } from "../util/response"
import { verifyToken } from "util/auth"
import { findLastToken } from "../src/client/client.model"
import { MSG } from 'constant/errmsg';
@Injectable()
export class permissionVerify implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const authorization = req.headers.authorization
        if (!authorization) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, MSG.CLIENT.INAVALID_AUTHORIZATION))
        const [tokenType, token] = authorization.split(' ')
        const validToken: any = await verifyToken(token)
        if (validToken.message) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, validToken.message))
        validToken.token = token
        const lastToken = await findLastToken(validToken)
        if(!lastToken.length) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, _, 'INVALID TOKEN'))
        const { clientId } = validToken
        Object.assign(req, { clientId, token })
        next();
    }
}
