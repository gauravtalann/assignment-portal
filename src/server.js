const app = require('./app'); // Import the app
const PORT = process.env.PORT || 5000; // Define port

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start message
});
