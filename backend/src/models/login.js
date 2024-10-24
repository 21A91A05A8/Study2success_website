const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{collection:"login"});

const Login = mongoose.model('login', loginSchema);

module.exports = Login;
