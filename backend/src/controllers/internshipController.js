const Internship = require('../models/internship.js');

const createInternship = async (req, res) => {
  try {
    const { experience, fieldOfStudy } = req.body;

    const newInternship = new Internship({
      experience,
      fieldOfStudy,
    });

    const savedInternship = await newInternship.save();
    const sentence = `give me the list of comapnies which are providing internships offers in the field of ${fieldOfStudy}`;

    res.status(201).json({ message: 'Internship created successfully!', data: savedInternship, sentence });
  } catch (error) {
    console.error('Error creating internship:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createInternship };
