const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY || "Hartik";

function generateAccessToken(user) {
    return jwt.sign({ userId: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
}   

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid access token' });
        }
        req.body.userId = user.userId;
        next();
    });
}

module.exports = {
    generateAccessToken,
    authenticateToken
};