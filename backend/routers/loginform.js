const router = require('express').Router();
const Jobseeker = require('../models/JobSeeker.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find jobseeker by email
        const jobseeker = await Jobseeker.findOne({ email: email });
        if (!jobseeker) {
            return res.status(400).json({ message: 'Email not found.' });
        }

        // Compare the provided password with the stored hashed password
        const validPassword = await bcrypt.compare(password, jobseeker.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password.' });
        }

        // If successful, send a success response
        const token = jwt.sign({ id: jobseeker._id,email:jobseeker.email
         }, process.env.JWT_SECRET);
        res.status(200).json({ message: 'Login successful.',
            token: token,
         });
    } catch (err) {
        console.error('Login error:', err); // Log the error for debugging purposes
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
