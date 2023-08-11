const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    const { email, password, firstname, lastname, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if(existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);
        
        const user = await User.create({ email, password: hashedPassword, firstname, lastname, role });

        const token = jwt.sign({ email: user.email, id: user._id}, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: user, token })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist."})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}