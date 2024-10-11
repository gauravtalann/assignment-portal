const mongoose = require('mongoose'); // Import mongoose

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Unique username
    password: { type: String, required: true }, // User password
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }] // Assignments reference
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
