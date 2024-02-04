const mongoose = require("mongoose");
const { Schema, model } = mongoose;

mongoose.connect('mongodb+srv://fasihaar:Aa123456789@cluster0.7vnhkpm.mongodb.net/?retryWrites=true&w=majority');

const userSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true, min: 8 },
});

const userModel = model('User', userSchema);
module.exports = userModel;
