import {Router} from 'express';
const adminRouter = Router();
const bcrypt = require('bcrypt');
import {Admin} from '../models/admin.model';
import { envConfig } from '../configs/env.config';
const jwt = require('jsonwebtoken');

adminRouter.post('/register', async(req, res) => { 
    const { email, password, firstName, lastName } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);

    const response = await Admin.create({
        firstName,
        lastName,
        email,
        password: hashPassword
    })
    res.status(201).json({
        "Success":"Admin created successfully",
        response
    })
})
adminRouter.post('/login', async(req, res) => { 
    const {email, password} = req.body;
    const admin = await Admin.findOne({email: email});

    if(admin) {
        //@ts-ignore
        const passwordIsCorrect = await bcrypt.compareSync(password, admin.password);
        if(passwordIsCorrect) {
            const token = jwt.sign({admin}, envConfig.ADMIN_JWT_SECRET);
            res.status(200).json({
                "Success":"Login successful",
                "token":token,
            })
        }

        res.status(403).json({
            "Error":"Invalid email or password"
        })
    }
    res.status(404).json({
        "Error":"Admin not found"
    })
})

adminRouter.post('/create-course', (req, res) => {

})



adminRouter.delete('/courses/:id', (req, res) => {
    res.send("Delete course")
})

export {adminRouter}