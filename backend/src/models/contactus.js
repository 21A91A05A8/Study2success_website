// contactUs.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ContactUsSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const ContactUs = model("ContactUs", ContactUsSchema);
module.exports = ContactUs;