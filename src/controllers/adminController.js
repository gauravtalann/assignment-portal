const Admin = require('../models/Admin'); // Import Admin model
const Assignment = require('../models/Assignment'); // Import Assignment model
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation

// Register a new admin
exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body; // Destructure username and password from request body
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const admin = new Admin({ username, password: hashedPassword }); // Create a new admin instance
    await admin.save(); // Save the admin to the database
    res.status(201).json({ message: 'Admin registered' }); // Respond with success message
};

// Login admin and return JWT token
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body; // Destructure username and password from request body
    const admin = await Admin.findOne({ username }); // Find the admin by username
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' }); // Handle invalid admin

    const isMatch = await bcrypt.compare(password, admin.password); // Check password match
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' }); // Handle invalid password

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate JWT token
    res.json({ token }); // Respond with token
};

// Get assignments tagged to the admin
exports.getAssignments = async (req, res) => {
    const assignments = await Assignment.find(); // Fetch assignments for the admin
    res.json(assignments); // Respond with the list of assignments
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id); // Find assignment by ID
    if (!assignment) return res.status(404).json({ message: 'Assignment not found' }); // Handle not found

    assignment.status = 'accepted'; // Update assignment status
    assignment.adminId = req.user.id; // Set admin ID on assignment
    await assignment.save(); // Save changes to the database
    res.json({ message: 'Assignment accepted', assignment }); // Respond with success message
};

// Reject an assignment
exports.rejectAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id); // Find assignment by ID
    if (!assignment) return res.status(404).json({ message: 'Assignment not found' }); // Handle not found

    assignment.status = 'rejected'; // Update assignment status
    await assignment.save(); // Save changes to the database
    res.json({ message: 'Assignment rejected', assignment }); // Respond with success message
};
