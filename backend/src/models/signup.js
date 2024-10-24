const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{collection:"signup"});

const Signup = mongoose.model('signup', signupSchema);

module.exports = Signup;
