// feedback.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const feedbackSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
});

const Feedback = model("Feedback", feedbackSchema);
module.exports = Feedback;