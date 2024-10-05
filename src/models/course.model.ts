import mongoose, { Schema, model, } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const courseSchema = new Schema({
    courseName: String,
    courseDescription: String,
    coursePrice: Number,
    courseCreatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    }
})

export const Course = model("Course", courseSchema);