const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser for JSON parsing
const connectDB = require('./config/db'); // Import database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express(); // Create an Express app
app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.use('/api/users', userRoutes); // Define user routes
app.use('/api/admins', adminRoutes); // Define admin routes
module.exports = app; // Export the app for server entry point
