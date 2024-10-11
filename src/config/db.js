const mongoose = require('mongoose'); // Import mongoose for database interaction
const dotenv = require('dotenv'); // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

// Function to connect to MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to MongoDB
        console.log("MongoDB connected"); // Log success message
    } catch (err) {
        console.error(err.message); // Log error message
        console.log("gaurav"); // Log error message
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDB; // Export the connectDB function