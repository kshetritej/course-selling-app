const {Schema, model, ObjectId} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    courses: ObjectId,
})


const userModel = model("User", userSchema);

module.exports = { userModel }