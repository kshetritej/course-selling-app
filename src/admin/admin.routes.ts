import {Router} from 'express';
const adminRouter = Router();



adminRouter.post('/login', (req, res) => { 

})
adminRouter.post('/register', (req, res) => { 

})

adminRouter.post('/create-course', (req, res) => {

})



adminRouter.delete('/courses/:id', (req, res) => {
    res.send("Delete course")
})

export {adminRouter}