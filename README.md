# Smart Campus Assistant - MERN Stack

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![Express.js](https://img.shields.io/badge/API-Express.js-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

Smart Campus Assistant is a full-stack MERN web application designed to manage academic and campus-related workflows through separate role-based panels for Admin, Faculty, and Students.

The project focuses on secure authentication, role-based access control, timetable management, attendance workflows, academic data handling, notifications, result management, and clean dashboard-based UI.

---

## Project Overview

Smart Campus Assistant provides a centralized platform for managing campus operations digitally.

It includes different panels for:

- Admin
- Faculty / Teacher
- Student

Each role has access to specific features based on permissions. The application is built with a scalable MERN architecture and follows a clean separation between frontend, backend, routes, controllers, models, middleware, and services.

This project was originally created as an academic project and has been prepared as a demo-safe MERN portfolio project using anonymized/sample data.

---

## Screenshots

### Home Page

![Home Page](screenshots/homepage.png)

### Login Page

![Login Page](screenshots/login.png)

---

## Key Features

### Authentication & Authorization

- User registration and login
- JWT-based authentication
- Secure password hashing using Bcrypt
- Role-based access control
- Protected frontend routes
- Protected backend APIs
- Separate access for Admin, Faculty, and Students

### Admin Panel

- Admin dashboard
- Manage students
- Manage faculty members
- Manage subjects
- Manage timetable data
- Manage attendance-related records
- Manage academic results
- View campus-related data from a centralized dashboard
- Upload academic data using bulk upload features
- Control role-based access and user information

### Faculty / Teacher Panel

- Faculty dashboard
- View assigned subjects
- View timetable
- Manage attendance for assigned lectures
- Access student-related academic data
- View notifications
- Interact with academic workflows through a dedicated faculty interface

### Student Panel

- Student dashboard
- View timetable
- View attendance details
- View subjects
- View academic result information
- View notifications
- Access campus-related information through a clean student interface

### Timetable Management

- Structured timetable management
- Subject-wise scheduling
- Faculty-wise lecture allocation
- Student-side timetable viewing
- Faculty-side timetable viewing
- Admin-side timetable management
- Support for academic scheduling workflows

### Attendance Management

- Attendance-related workflow support
- Faculty-side attendance handling
- Student-side attendance viewing
- Attendance records stored in MongoDB
- PDF/report generation support for attendance data
- Demo-safe data can be used for public deployment

### Notification System

- Role-based notification support
- Admin-to-user communication workflow
- Student and faculty notification views
- Centralized notification handling

### Result Management

- Result management workflow
- Student result viewing
- Admin-side result handling
- Academic performance data management
- Ranking/topper-related workflow support

### Bulk Upload Support

- Bulk upload support for academic data
- CSV-based data insertion workflow
- Useful for adding users, timetable, subjects, and academic records
- Helps quickly populate demo or academic databases

### Frontend Features

- Clean and responsive user interface
- Dashboard-based layout
- Role-based navigation
- Reusable React components
- Form validation
- Error handling
- Fast routing using React Router
- API integration using Axios

### Security Features

- JWT authentication
- Password hashing with Bcrypt
- Protected routes
- Middleware-based API protection
- Role-based authorization
- Environment variables for sensitive configuration
- Demo mode support for safe public deployment

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- JavaScript
- CSS / Tailwind CSS / Bootstrap
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js
- Multer / File Upload Support
- dotenv

### Integrations / Services

- Cloudinary support for file or image uploads
- Email service support
- SMS service support
- PDF/report generation support

### Tools

- Git
- GitHub
- Postman
- VS Code
- MongoDB Atlas
- Vercel
- Render

---

## Project Structure

    Smart-Campus-Assistant-MERN/
    |
    |-- frontend/
    |   |-- src/
    |   |   |-- components/
    |   |   |-- pages/
    |   |   |-- services/
    |   |   |-- context/
    |   |   |-- assets/
    |   |   `-- App.jsx
    |   |
    |   |-- public/
    |   |-- package.json
    |   `-- vite.config.js
    |
    |-- backend/
    |   |-- config/
    |   |-- controllers/
    |   |-- middleware/
    |   |-- models/
    |   |-- routes/
    |   |-- services/
    |   |-- utils/
    |   |-- server.js
    |   `-- package.json
    |
    |-- .gitignore
    |-- README.md
    `-- package.json

---

## Installation & Setup

### 1. Clone the Repository

    git clone https://github.com/harshrajsinhvaghela7586/Smart-Campus-Assistant-MERN.git
    cd Smart-Campus-Assistant-MERN

---

## Backend Setup

Go to the backend folder:

    cd backend
    npm install

Create a .env file inside the backend folder:

    PORT=5000
    NODE_ENV=development

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

    FRONTEND_URL=http://localhost:5173

    DEMO_MODE=false
    SMS_ENABLED=false
    EMAIL_ENABLED=false
    UPLOAD_ENABLED=false

    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    EMAIL_USER=your_email_address
    EMAIL_PASS=your_email_app_password

    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE=your_twilio_phone_number

Start the backend server:

    npm run dev

Backend will run on:

    http://localhost:5000

---

## Frontend Setup

Open a new terminal and go to the frontend folder:

    cd frontend
    npm install

Create a .env file inside the frontend folder:

    VITE_API_BASE_URL=http://localhost:5000/api

Start the frontend:

    npm run dev

Frontend will run on:

    http://localhost:5173

---

## Available Scripts

### Backend

    npm run dev

Runs the backend server using nodemon.

    npm start

Runs the backend server normally.

### Frontend

    npm run dev

Starts the Vite development server.

    npm run build

Builds the frontend for production.

    npm run preview

Previews the production build locally.

---

## Demo Mode

For public portfolio deployment, this project can be configured in demo mode.

Recommended demo environment:

    NODE_ENV=production
    DEMO_MODE=true
    SMS_ENABLED=false
    EMAIL_ENABLED=false
    UPLOAD_ENABLED=false

In demo mode, sensitive actions such as real SMS, real email sending, and real file uploads can be disabled.

This helps keep the deployed project safe for public viewing while still allowing recruiters or reviewers to explore the main Admin, Faculty, and Student workflows.

---

## Demo Data Recommendation

For public deployment, use only demo-safe data such as:

    Demo Admin
    Prof. Demo Faculty
    Prof. Sample Teacher
    Student Demo One
    Student Demo Two
    Smart Campus Institute
    Room A-101
    Lab B-201
    DEMO2026001
    DEMO2026002

Avoid using:

    Real student names
    Real faculty names
    Real college data
    Real enrollment numbers
    Real attendance records
    Real timetable data
    Private documents
    College PPT or documentation files

---

## Demo Credentials

You can create demo users manually or through the application.

Recommended demo accounts:

    Admin:
    Email: admin.demo@smartcampus.com
    Password: Admin@123

    Faculty:
    Email: faculty.demo@smartcampus.com
    Password: Faculty@123

    Student:
    Email: student.demo@smartcampus.com
    Password: Student@123

Note: These credentials are only recommended for demo deployment with sample data. Do not use them in a real production environment.

---

## Deployment

Recommended deployment setup:

    Frontend: Vercel
    Backend: Render
    Database: MongoDB Atlas

### Backend Deployment on Render

Render settings:

    Root Directory: backend
    Build Command: npm install
    Start Command: npm start

Required environment variables on Render:

    NODE_ENV=production
    PORT=5000
    MONGO_URI=your_demo_mongodb_uri
    JWT_SECRET=your_jwt_secret
    FRONTEND_URL=https://your-frontend-domain.vercel.app
    DEMO_MODE=true
    SMS_ENABLED=false
    EMAIL_ENABLED=false
    UPLOAD_ENABLED=false

### Frontend Deployment on Vercel

Vercel settings:

    Root Directory: frontend
    Framework Preset: Vite
    Build Command: npm run build
    Output Directory: dist
    Install Command: npm install

Required environment variable on Vercel:

    VITE_API_BASE_URL=https://your-backend-domain.onrender.com/api

---

## API Overview

Common API modules include:

    Authentication APIs
    User Management APIs
    Student APIs
    Faculty APIs
    Subject APIs
    Timetable APIs
    Attendance APIs
    Notification APIs
    Result APIs
    Upload APIs

Example authentication routes:

    POST /api/auth/register
    POST /api/auth/login
    GET  /api/auth/me

Example admin/user routes:

    GET    /api/users
    POST   /api/users
    PUT    /api/users/:id
    DELETE /api/users/:id

Exact routes may vary based on the backend implementation.

---

## Testing

The application was tested for:

- User authentication
- Role-based access
- Protected routes
- Admin dashboard workflows
- Faculty dashboard workflows
- Student dashboard workflows
- Timetable management
- Attendance workflows
- API request handling
- Error handling
- Responsive UI behavior

APIs were tested using Postman during development.

---

## Future Enhancements

- Advanced attendance analytics
- Improved result ranking dashboard
- Timetable conflict detection
- Notification preferences
- Audit logs for admin actions
- More advanced reporting features
- Mobile app integration
- Dark mode support
- Improved demo account switching

---

## Security Notes

- .env files are not included in the repository.
- Sensitive credentials must be stored only in deployment dashboards such as Render and Vercel.
- Real academic data should not be used in public deployments.
- Demo deployment should use anonymized sample data.
- Private documents, PPT files, PDFs, and college-related documentation should not be committed to GitHub.

---

## Developer

    Name: Harshrajsinh Vaghela
    Role: MERN Stack Developer
    Project: Smart Campus Assistant - MERN Stack
    Location: Ahmedabad, Gujarat, India

GitHub: [harshrajsinhvaghela7586](https://github.com/harshrajsinhvaghela7586)

Portfolio: [Harshrajsinh Vaghela Portfolio](https://portfolio-seven-beige-78.vercel.app/)

LinkedIn: [Harshrajsinh Vaghela](https://www.linkedin.com/in/harshrajsinh-vaghela-a38bba300/)

---

## License

This project is developed for academic learning and portfolio demonstration purposes.

---

## Acknowledgement

Thank you for checking out this project.

If you found this project useful or interesting, feel free to star the repository.
