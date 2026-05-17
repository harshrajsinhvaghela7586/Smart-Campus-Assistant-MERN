# 🚀 MERN Stack Web Application (Smart Campus Assistant)

![MERN](https://img.shields.io/badge/Stack-MERN-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-success)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

A Full Stack Web Application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js).  
This project is designed as a **Smart Campus Assistant** focusing on clean UI, secure backend APIs, scalability, and real-world use cases.

--------------------------------------------------

## 📌 Project Overview

The Smart Campus Assistant helps manage and simplify campus-related operations by providing a centralized platform for users.

This application allows users to:
- Register and login securely
- Access protected routes based on roles
- Perform CRUD operations
- Interact with backend through REST APIs
- Use a responsive and user-friendly interface
- Manage academic and campus-related data efficiently

--------------------------------------------------

## ✨ Key Features

### 🔐 Authentication & Authorization
- User Registration & Login
- JWT-based Authentication
- Secure Password Hashing using Bcrypt
- Role Based Access Control (Admin / User)

### 🗂 Core Functionalities
- CRUD Operations (Create, Read, Update, Delete)
- Centralized Data Management
- Protected APIs
- Dynamic Dashboard

### 🎨 Frontend Features
- Clean and modern UI
- Fully responsive design
- Reusable React components
- Form validation & error handling
- Fast navigation using React Router

### 🛡 Security Features
- JWT token verification middleware
- Encrypted passwords
- Environment variables for sensitive data
- Secure API access

--------------------------------------------------

## 🎨 UI & Design

- Minimal and modern interface
- Responsive for desktop, tablet, and mobile devices
- Simple navigation and user-friendly layout

Screens included:
- Home Page
- Login Page
- Registration Page
- Dashboard
- Admin Panel / User Panel

--------------------------------------------------

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS / Bootstrap / Tailwind
- Vite (for fast development)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- dotenv

--------------------------------------------------
## 📁 Project Structure

```
MERN-Smart-Campus-Assistant/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```


--------------------------------------------------

## ⚙️ Installation & Setup

### Step 1: Clone Repository

git clone https://github.com/harshrajsinhvaghela7586/Smart-Campus-Assistant-MERN.git  
cd MERN-Smart-Campus-Assistant

--------------------------------------------------

### Step 2: Backend Setup

cd backend  
npm install  
npm run dev  

Create a `.env` file inside backend folder:

PORT=5000
MONGO_URI=your_demo_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
SMS_ENABLED=false
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE=your_twilio_phone
FRONTEND_URL=your_frontend_url

Backend runs on:  
http://localhost:5000

--------------------------------------------------

### Step 3: Frontend Setup

cd frontend  
npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173

--------------------------------------------------

## 📜 Available Scripts

### Backend
- npm run dev → Run backend using nodemon
- npm start → Run backend normally

### Frontend
- npm run dev → Start development server
- npm run build → Build production-ready frontend

--------------------------------------------------

## 🔐 API Endpoints

Authentication:
POST    /api/auth/register   → User Registration  
POST    /api/auth/login      → User Login  

Users:
GET     /api/users           → Get All Users  

Data Management:
POST    /api/data            → Create Data  
GET     /api/data            → Get Data  
PUT     /api/data/:id        → Update Data  
DELETE  /api/data/:id        → Delete Data  

--------------------------------------------------

## 🧪 Testing

- APIs tested using Postman
- Frontend tested on modern browsers
- Authentication and protected routes verified
- Error handling tested for invalid requests

--------------------------------------------------

## 🚀 Future Enhancements

- Email Verification
- Forgot Password functionality
- Notification System
- Advanced Admin Dashboard
- Deployment on Render / Vercel
- Role-based Analytics
- UI Animations and Dark Mode
- Mobile App Integration

--------------------------------------------------

## 🌐 Deployment (Planned)

Frontend:
- Vercel / Netlify

Backend:
- Render / Railway

Database:
- MongoDB Atlas

--------------------------------------------------

## 🤝 Contribution

Contributions are welcome.
Steps:
1. Fork the repository
2. Create a new branch
3. Commit changes
4. Push to your fork
5. Create a Pull Request

--------------------------------------------------

## 👨‍💻 Developer Details

Name: Harshrajsinh Vaghela  
Project Type: MERN Stack Web Application  
Project Name: Smart Campus Assistant  
Purpose: Academic / Learning Project  

--------------------------------------------------

## 📜 License

This project is developed for educational purposes only.

--------------------------------------------------

⭐ Thank you for checking out this project!

