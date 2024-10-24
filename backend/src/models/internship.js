const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  experience: {
    type: String,
    // required: true,
  },
  fieldOfStudy: {
    type: String,
    required: true,
  },
});

const Internship = mongoose.model('Internship', internshipSchema);

module.exports = Internship;
