const mongoose = require('mongoose'); // Import mongoose

// Define the assignment schema
const assignmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to user
    task: { type: String, required: true }, // Task description
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }, // Reference to admin
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }, // Assignment status
    createdAt: { type: Date, default: Date.now } // Creation date
});

// Export the Assignment model
module.exports = mongoose.model('Assignment', assignmentSchema);
