
const student = require("../models/student");


// const addUser = async (req, res, next) => {
//   console.log("write ur functionality here")
 
// }
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Create a new instance of the student model
    const stud = new student({
      name,
      email,
      password
    });
    // Save the new student record
    const newUser = await stud.save();
    res.status(201).json({ user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while adding the user' });
  }

};

exports.addUser = addUser;
