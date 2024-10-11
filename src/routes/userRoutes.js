const express = require('express'); // Import express
const { registerUser, loginUser, uploadAssignment, getAdmins } = require('../controllers/userController'); // Import user controller
const auth = require('../middleware/auth'); // Import auth middleware

const router = express.Router(); // Create a new router

router.post('/register', registerUser); // Route for user registration
router.post('/login', loginUser); // Route for user login
router.post('/upload', auth, uploadAssignment); // Route for uploading assignments (protected)
router.get('/admins', getAdmins); // Route for fetching all admins

module.exports = router; // Export the router
