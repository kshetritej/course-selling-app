import {Schema, model, ObjectId} from 'mongoose';

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    courses: ObjectId[],
})

export const Admin = model("Admin", adminSchema);
