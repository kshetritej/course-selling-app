import mongoose, {Schema, model } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }] ,
})


export const User = model("User", userSchema);
