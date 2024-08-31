const router = require('express').Router();
const Jobseeker = require('../models/JobSeeker.js');
const multer = require('multer');
const fs = require('fs');
const bcrypt = require('bcrypt');

// Check if uploads directory exists, if not create it
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

router.post('/', upload.single('resume'), async (req, res) => {
    try {
        // Ensure the file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Resume file is required.' });
        }

        if(!req.body.name|| !req.body.password || !req.body.email || !req.body.mobile || !req.body.address) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        if(req.body.mobile.length !== 10) {
            return res.status(400).json({ message: 'Mobile number should be 10 digits.' });
        }

        const emailExists = await Jobseeker.findOne({ email: req.body.email });
        if (emailExists) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        const resume = req.file.path;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const jobseeker = new Jobseeker({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address,
            password: hashedPassword,
            resume: resume,

        });

        // Save the job seeker to the database
        const savedJobseeker = await jobseeker.save();
        res.status(201).json(savedJobseeker);
    } catch (err) {
        console.error('Error saving job seeker:', err);  // Log error on server side
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
