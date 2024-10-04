import { Router } from 'express';
const adminRouter = Router();
const bcrypt = require('bcrypt');
import { Admin } from '../models/admin.model';
import { envConfig } from '../configs/env.config';
import { Course } from '../models/course.model';
import { adminAuthMiddleware } from '../middleware/auth.middleware';
const jwt = require('jsonwebtoken');


//@ts-ignore
adminRouter.post('/register', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);

    const response = await Admin.create({
        firstName,
        lastName,
        email,
        password: hashPassword
    })
    return res.status(201).json({
        "Success": "Admin created successfully",
        response
    })
})

//@ts-ignore
adminRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });

    if (admin) {
        //@ts-ignore
        const passwordIsCorrect = await bcrypt.compareSync(password, admin.password);
        if (passwordIsCorrect) {
            //@ts-ignore
            const token = jwt.sign({ id: admin._id }, envConfig.ADMIN_JWT_SECRET);
            res.status(200).json({
                "Success": "Login successful",
                "token": token,
            })
        } else {
            res.status(403).json({
                "Error": "Invalid email or password"
            })
        }

    }
    return res.status(404).json({
        "Error": "Admin not found"
    })
})
//@ts-ignore
adminRouter.post('/course', adminAuthMiddleware, async (req, res) => {
    //@ts-ignore
    const adminId = req.adminId;
    const { courseName, courseDescription, coursePrice } = req.body;
    const response = await Course.create({
        courseName,
        courseDescription,
        coursePrice,
        courseCreatorId: adminId
    })
    if (!response) {
        res.status(400).json({
            "ERROR": "Course not created"
        })
    }
    return res.send({
        "Success": "Course created successfully",
        response
    })
})




//@ts-ignore
adminRouter.put('/course', adminAuthMiddleware, async (req, res) => {
    //@ts-ignore
    const admin = req.adminId;
    const { courseName, courseDescription, coursePrice, courseId } = req.body;

    if(!courseId){
        res.json({"ERROR": "Course Id is required"})
    }
    if(!admin){
    res.json({"ERROR": "NO related course found."})
    }

    const response = await Course.findOneAndUpdate({ _id: courseId, courseCreatorId: admin }, { courseName, courseDescription, coursePrice }, { new: true });
    if (!response) {
        res.status(400).json({
            "Error": "Course not updated"
        })
    }
    return res.status(201).json({ "Success": "Course updated successfully" })

})


//@ts-ignore
adminRouter.delete('/courses/:id', adminAuthMiddleware, (req, res) => {
    res.send("Delete course")
})

export { adminRouter }