const jwt = require('jsonwebtoken'); // Import jsonwebtoken

// Middleware to authenticate user or admin
const auth = (req, res, next) => {
    const token = req.header('x-auth-token'); // Get token from headers
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' }); // Handle missing token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request object
        next(); // Move to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' }); // Handle invalid token
    }
};

module.exports = auth; // Export the auth middleware
