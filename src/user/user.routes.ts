import { Request, Response } from "express";
import { User } from "../models/user.model";
import { envConfig } from "../configs/env.config";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    courses: string[];
}

const userRouter = require("express").Router();
userRouter.get("/home", (req: Request, res: Response) => {
    res.send("Hello World");
})

userRouter.post("/register", async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const response = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword
    });

    res.json({
        "user created successfully. ": response
    });
})
userRouter.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        email: email,
    })
    if (user) {
        //@ts-ignore
        const passwordIsCorrect = await bcrypt.compareSync(password, user.password);
        if (passwordIsCorrect) {
            const token = jwt.sign({user}, envConfig.USER_JWT_SECRET) 
            res.status(200).json({
                "token": token,
                "user": user
            })
        }
        res.status(403).json({
            "Error": "Invalid email or password"
        })
    }
})

userRouter.get('/courses', (req: Request, res: Response) => {
    res.send("Courses")
})
userRouter.post('/purchase', (req: Request, res: Response) => {

})

export { userRouter }