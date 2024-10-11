const User = require('../models/User'); // Import User model
const Admin = require('../models/Admin');
const Assignment = require('../models/Assignment'); // Import Assignment model
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password } = req.body; // Destructure username and password from request body
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const user = new User({ username, password: hashedPassword }); // Create a new user instance
    await user.save(); // Save the user to the database
    res.status(201).json({ message: 'User registered' }); // Respond with success message
};

// Login user and return JWT token
exports.loginUser = async (req, res) => {
    const { username, password } = req.body; // Destructure username and password from request body
    const user = await User.findOne({ username }); // Find the user by username
    if (!user) return res.status(400).json({ message: 'Invalid credentials' }); // Handle invalid user

    const isMatch = await bcrypt.compare(password, user.password); // Check password match
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' }); // Handle invalid password

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate JWT token
    res.json({ token }); // Respond with token
};

// Upload an assignment
exports.uploadAssignment = async (req, res) => {
    const { task } = req.body; // Destructure task from request body
    const assignment = new Assignment({ userId: req.user.id, task }); // Create a new assignment instance

    await assignment.save(); // Save the assignment to the database
    res.status(201).json({ message: 'Assignment uploaded', assignment }); // Respond with success message
};

// Get all admins for the user
exports.getAdmins = async (req, res) => {
    const admins = await Admin.find(); // Fetch all admins from the database
    res.json(admins); // Respond with the list of admins
};
