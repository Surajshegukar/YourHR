const express = require('express');
const JobSeeker = require('../models/JobSeeker');
const router = express.Router();
const jwt = require('jsonwebtoken');

const fetchUser = async (req, res, next) => {
    // Get the user from the database
    try {
        const token = req.header('auth-token');
        if (!token) {
            return res.status(401).json({ message: 'Access denied.' });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json({ message: 'Access denied.' });
        }

        const user = await JobSeeker.findById(verified.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found.' });
        }

        req.user = user;
        next();

    }
    catch (error) {
        console.error('Middleware error:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}

module.exports = fetchUser;