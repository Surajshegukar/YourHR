const express = require('express');
const router = express.Router();
const Jobseeker = require('../models/JobSeeker.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser.js');


router.get('/',fetchUser, async (req, res) => {
    try {
        const jobseeker = await Jobseeker.findById(req.user).select('-password');
        if (!jobseeker) {
            return res.status(400).json({ message: 'Jobseeker not found.' });
        }
        res.status(200).json(jobseeker);
    } catch (err) {
        console.error('Profile error:', err);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}
);

module.exports = router;