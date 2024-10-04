import { Request, Response } from "express";

const userRouter = require("express").Router();
userRouter.get("/home", (req: Request, res: Response) => {
    res.send("Hello World");
})

userRouter.post("/login", (req: Request, res: Response) => {
})

userRouter.post("/register", (req: Request, res: Response) => {
})
userRouter.get('/courses', (req: Request, res: Response) => {
    res.send("Courses")
})
userRouter.post('/purchase', (req: Request, res: Response) => {

})

export { userRouter }