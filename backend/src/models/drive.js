const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
  yearOfPassing: {
    type: Number,
    required: true,
  },
});

const Drive = mongoose.model('Drive', driveSchema);

module.exports = Drive;
