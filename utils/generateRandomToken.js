const jwt = require('jsonwebtoken');

function generateRandomToken() {
    const secretKey = 'your-secret-key'; // (To replace with my actual secret key later)
    const randomToken = jwt.sign({}, secretKey, { expiresIn: '1h' });
    return randomToken;
}

module.exports = generateRandomToken;