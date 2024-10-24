const Student = require("../models/student");

const addStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Received data:", { name, email, password }); 
    const newStudent = new Student({ name, email, password });
    await newStudent.save();
    res.status(201).json({ message: "Student added successfully" });
  }  catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      console.error("Error adding student:", error);
      res.status(400).json({ error: "Email already exists" });
    } else {
      console.error("Error adding student:", error);
      res.status(500).json({ error: "An error occurred while adding the student" });
    }
  }
};

module.exports = { addStudent };