import mongoose, { Schema, model, mongo } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }]
})

export const Admin = model("Admin", adminSchema);
