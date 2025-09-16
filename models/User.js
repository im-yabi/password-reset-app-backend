const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  dob: { type: String },
  occupation: { type: String },
  education: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
