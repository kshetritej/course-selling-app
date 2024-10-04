import {Schema, model, ObjectId} from 'mongoose';

const userSchema = new Schema({
    userFirstName: String,
    userLastName: String,
    userEmail: {
        type: String,
        unique: true,
    },
    userPassword: String,
    userCourses:[ObjectId] ,
})


export const User = model("User", userSchema);
