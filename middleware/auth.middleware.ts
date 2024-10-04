const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';

const authMiddleware = (req, res, next) => {
    const token = req.header.token;

    if (!token) {
        return res.status(401).send('Unauthorized!');
    }
    const isVerified = jwt.compare(token, JWT_SECRET)

    if (isVerified) {
        next();
    }
}