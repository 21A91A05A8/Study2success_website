const Feedback = require('../models/feedback.js');
const submitFeedback = async (req, res) => {
  try {
    const { firstName, lastName, email, feedback } = req.body;
    const newFeedback = new Feedback({
      firstName,
      lastName,
      email,
      feedback,
    });

    const savedFeedback = await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully!', data: savedFeedback });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
module.exports = { submitFeedback };