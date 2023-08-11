const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader) {
            return res.sendStatus(401); // Unauthorized
        }
        
        const token = authHeader.split(' ')[1];
        
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

const isEmployer = async (req, res, next) => {
    try {

        const user = await User.findById(req.userId);
        
        if(user.role === 'employer') {
            next();
        }
        else {
            res.status(401).json({ message: "Only for employer" })
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = { 
    authMiddleware,
    isEmployer
}