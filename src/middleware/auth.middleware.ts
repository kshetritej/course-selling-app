import { Response, Request, NextFunction } from "express";
import { envConfig } from "../configs/env.config";

const jwt = require('jsonwebtoken');

const userAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).send('Unauthorized!');
    }

    const decoded = jwt.verify(token, envConfig.USER_JWT_SECRET)

    if (decoded) {
        //@ts-ignore
        req.userId = decoded.userId;
        next();
    }
    return res.status(401).send('You are not signed in!');
}



const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).send('Unauthorized!');
    }
    const decoded_id = jwt.verify(token, envConfig.ADMIN_JWT_SECRET)

    if (decoded_id) {
        //@ts-ignore
        req.adminId = decoded_id.adminId;
        next();
    }
    return res.status(401).send('You are not signed in!');
}