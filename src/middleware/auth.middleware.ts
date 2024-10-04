import { Response, Request, NextFunction } from "express";
import { envConfig } from "../configs/env.config";

const jwt = require('jsonwebtoken');

export const userAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).send('Unauthorized!');
    }

    const decoded = jwt.verify(token, envConfig.USER_JWT_SECRET)

    if (!decoded) {
        return res.status(401).send('You are not signed in!');
    }
    //@ts-ignore
    req.userId = decoded.userId;
    next();
}



export const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    console.log('token:', token)
    if (!token) {
        return res.status(401).send('Unauthorized!');
    }
    const decoded_id = jwt.verify(token, envConfig.ADMIN_JWT_SECRET)

    if (!decoded_id) {
        return res.status(401).send('You are not signed in!');
    }
    //@ts-ignore
    req.adminId = decoded_id.id;
    next();
}

