# YourHR : The Job Seeker Application

This is a web application that allows job seekers to sign up by filling out their personal information and uploading their resume. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration with personal information and resume upload.
- User login with email and password.
- Secure password storage with bcrypt.
- RESTful API for handling user data.
- Responsive design using Tailwind CSS.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **File Upload:** Multer
- **Security:** bcrypt for password hashing

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository

```bash
git clone https://github.com/your-username/YourHR.git
cd YourHR
```

### Install Dependencies

For both frontend and backend:

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your-mongodb-connection-string
PORT=5000
JWT_SECRET = your-secret
```

### Start the Application

Start the backend server:

```bash
cd backend
node index.js
```

Start the frontend:

```bash
npm start
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## API Endpoints

### User Signup

- **URL:** `/signup`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  - `name` (string)
  - `email` (string)
  - `mobile` (string)
  - `address` (string)
  - `resume` (file)

### User Login

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Authenticate a user.
- **Request Body:**
  - `email` (string)
  - `password` (string)

## Folder Structure

```
job-seeker-app/
├── backend/             # App backend
  ├── routers/            # Express routers
  │   ├── signupform.js
  │   ├── loginform.js
  │   └── ...
  ├── models/             # Mongoose models
  │   ├── JobSeeker.js
  │   └── ...
  ├── uploads/            # Uploaded resume files
  ├── .env
  ├── server.js
└── README.md
├── src/
│   │   ├── components/ # React components
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── ...
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```

### Customization
- Replace `your-username` with your actual GitHub username in the clone command.
- Customize the `API Endpoints` section based on the actual API endpoints available in your project.
- Add any additional sections as needed based on your project’s requirements.

This `README.md` will provide a good overview of your project and help others understand how to set it up and contribute.
