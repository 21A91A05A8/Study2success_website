// const ContactUs = require('../models/contactus.js');
// const submitContactUs = async (req, res) => {
//   try {
//     const { fullname, email, message } = req.body;
//     const newContactUsEntry = new ContactUs({
//       fullname,
//       email,
//       message,
//     });

//     const savedContactUsEntry = await newContactUsEntry.save();

//     res.status(201).json({ message: 'Contact us form submitted successfully!', data: savedContactUsEntry });
//   } catch (error) {
//     console.error('Error submitting contact us form:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// module.exports = { submitContactUs };
const ContactUs = require('../models/contactus.js');
const submitContactUs = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    const newContactUsEntry = new ContactUs({
      fullName,
      email,
      message,
    });

    const savedContactUsEntry = await newContactUsEntry.save();

    res.status(201).json({ message: 'Contact us form submitted successfully!', data: savedContactUsEntry });
  } catch (error) {
    console.error('Error submitting contact us form:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { submitContactUs };