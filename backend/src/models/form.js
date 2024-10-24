const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  goal: {
    type: String,
    required: true,
  },
  certifications: {
    type: String,
    // required: true,
  },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
