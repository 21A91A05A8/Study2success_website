//FILENAME : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 
},);
const user = mongoose.model("user", UserSchema);
module.exports = user;
