import { Response, Request, NextFunction } from "express";

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';

const authMiddleware = (req:Request , res:Response, next: NextFunction) => {
    const token = req.header;

    if (!token) {
        return res.status(401).send('Unauthorized!');
    }
    const isVerified = jwt.compare(token, JWT_SECRET)

    if (isVerified) {
        next();
    }
}