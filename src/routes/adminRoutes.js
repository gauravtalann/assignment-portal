const express = require('express'); // Import express
const { registerAdmin, loginAdmin, getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController'); // Import admin controller
const auth = require('../middleware/auth'); // Import auth middleware

const router = express.Router(); // Create a new router

router.post('/register', registerAdmin); // Route for admin registration
router.post('/login', loginAdmin); // Route for admin login
router.get('/assignments', auth, getAssignments); // Route for viewing assignments (protected)
router.post('/assignments/:id/accept', auth, acceptAssignment); // Route for accepting assignments (protected)
router.post('/assignments/:id/reject', auth, rejectAssignment); // Route for rejecting assignments (protected)

module.exports = router; // Export the router
