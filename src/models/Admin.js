const mongoose = require('mongoose'); // Import mongoose

// Define the admin schema
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Unique username
    password: { type: String, required: true } // Admin password
});

// Export the Admin model
module.exports = mongoose.model('Admin', adminSchema);
