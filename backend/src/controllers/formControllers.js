const Form = require('../models/form');

const createForm = async (req, res) => {
  try {
    const { firstName, lastName, email, goal, certifications } = req.body;

    const newForm = new Form({
      firstName,
      lastName,
      email,
      goal,
      certifications,
    });

    const savedForm = await newForm.save();
    const sentence = `${firstName} ${lastName} has a goal of ${goal} and holds certifications in ${certifications}.Provide the certifications which are necessary to achieve ${goal}.Don't give more information.Give the necessary info only.`;

    res.status(201).json({ message: 'Form submitted successfully!', data: savedForm, sentence });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      console.log(req.body);
      res.status(400).json({ message: 'Email already exists!' });
    } else {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

module.exports = { createForm };
