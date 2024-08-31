require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./DB.js');

const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Import routes
const signupRouter = require('./routers/signupform.js');
const loginRouter = require('./routers/loginform.js');
const profileRouter = require('./routers/profile.js');
// Register routes
app.use('/auth/login', loginRouter);
app.use('/auth/profile', profileRouter);
app.use('/auth/signup', signupRouter); 


// Default route
app.get('/', (req, res) => {
    res.send({ message: 'Hello, World!' });
});

app.get('/signup', (req, res) => {
    res.send({ message: 'Signup form' });
});

app.get('/login', (req, res) => {
    res.send({ message: 'Login form' });
}
);
// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
