const Question = require('../models/question.js');

const createQuestion = async (req, res) => {
  try {
    const { input } = req.body;

    const newQuestion = new Question({
      input,
    });

    const savedForm = await newQuestion.save();
    const sentence = `${input}`;

    res.status(201).json({ message: 'Form submitted successfully!', data: savedForm, sentence });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createQuestion };
