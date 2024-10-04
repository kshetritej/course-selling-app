import {Schema, model, ObjectId} from 'mongoose';

const courseSchema = new Schema({
    courseName: String,
    courseDescription: String,
    coursePrice: Number,
    courseCreatorId: ObjectId
})

export const Course = model("Course", courseSchema);