import {Schema, model, ObjectId} from 'mongoose';

const adminSchema = new Schema({
    adminFirstName: String,
    adminLastName: String,
    adminEmail: {
        type: String,
        unique: true,
    },
    adminPassword: String,
    adminCourses: ObjectId[],
})

export const Admin = model("Admin", adminSchema);
