const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  console.log('Request body:', req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    console.log('Email:', email);
    console.log('Password:', password);

    // Check if the user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token upon successful authentication
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });

    console.log('User found:', user); // Log user data after successful login
  } catch (error) {
    console.error('Error:', error);
    // Handle the error here or simply return a generic error message
    res.status(500).json({ error: 'An error occurred while signing in' });
  }
};

module.exports = { login };
