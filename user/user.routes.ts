const userRouter = require("express").Router();
userRouter.get("/home", (req, res) => {
    res.send("Hello World");
})

userRouter.post("/login", (req, res) => {
})

userRouter.post("/register", (req, res) => {
})
userRouter.get('/courses', (req, res) => {
    res.send("Courses")
})
userRouter.post('/purchase', (req, res) => {

})

export {userRouter}