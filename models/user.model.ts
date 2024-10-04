import {Schema, model, ObjectId} from 'mongoose';

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    courses:[ObjectId] ,
})


export const User = model("User", userSchema);
