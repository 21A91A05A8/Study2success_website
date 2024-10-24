// const  Login  = require('../models/login');
const Signup = require('../models/signup');

const loginController = async (req, res) => {
    console.log("login");
    console.log(req.body);
    const { name, password } = req.body;
    try {
        const user = await Signup.findOne({ name: name, password: password });
        if (user) {
            return res.status(200).json({ msg: "Login successful", user });
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



const signupController = async (req, res) => {
   
    console.log(req.body); // Log the request body to check if it contains the expected fields

    const { name, password, email } = req.body;
    try {
        const newUser = new Signup({ name: name, password, email }); // Use shorthand syntax for object creation
        console.log(newUser);

        // Save the user data to the database
        const savedUser = await newUser.save();

        // Respond with a success message and the saved user data
        return res.status(201).json({ msg: "success", savedUser });
    } catch (error) {
        console.error("Error:", error); // Log any caught errors
        res.status(400).json({ error: "Failed to save user data" }); // Respond with an error message
    }
};

//module.exports = { signupController };


module.exports = { loginController, signupController };