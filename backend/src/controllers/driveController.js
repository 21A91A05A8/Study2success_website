const Drive = require('../models/drive.js');

const createDrive = async (req, res) => {
  try {
    const { yearOfPassing } = req.body;

    const newDrive = new Drive({
      yearOfPassing,
    });

    const savedForm = await newDrive.save();
    const sentence = `give me the companies which are ready to hire or hiring in year '${yearOfPassing}' and also their company website links.give only names of comapny and website links.`;

    res.status(201).json({ message: 'Form submitted successfully!', data: savedForm, sentence });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createDrive };
