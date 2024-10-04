import mongoose, {Schema, model } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    courses: [ObjectId],
})

export const Admin = model("Admin", adminSchema);
