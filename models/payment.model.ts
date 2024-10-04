import {Schema, model, ObjectId, isObjectIdOrHexString} from "mongoose"
import { User } from "./user.model"
import { Course } from "./course.model"

const purchaseSchema = new Schema ({
    userId: ObjectId,
    courseId: ObjectId,
    purchaseDate: Date,
    purchaseExpiryData: Date,
})
