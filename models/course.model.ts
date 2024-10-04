import {Schema, model, ObjectId} from 'mongoose';

const courseSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    creatorId: ObjectId
})

export const Course = model("Course", courseSchema);