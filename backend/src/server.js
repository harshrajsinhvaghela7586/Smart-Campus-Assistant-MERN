  import express from "express";
  import cors from "cors";
  import dotenv from "dotenv";

  import connectDB from "./config/db.js";
  import authRoutes from "./routes/adminRoutes/auth.Routes.js";
  import userRoutes from "./routes/adminRoutes/user.Routes.js";
  import adminRoutes from "./routes/adminRoutes/admin.Routes.js";
  import attendanceRoutes from "./routes/adminRoutes/attendance.Routes.js";
  import timetableRoutes from "./routes/adminRoutes/timetable.Routes.js";
  import systemlogRoutes from "./routes/adminRoutes/systemlog.Routes.js";
  import subjectRoutes from "./routes/teacherRoutes/subjects.Routes.js";
  import materialRoutes from "./routes/teacherRoutes/material.Routes.js";
  import teacherAttendanceRoutes from "./routes/teacherRoutes/attendance.Routes.js";
  import studentRoutes from "./routes/students.Routes.js";
  import TeacherTimetableRoutes from "./routes/teacherRoutes/timetable.Routes.js"
  import notificationRoutes from "./routes/adminRoutes/notificationRoutes.js";
  import availabilityRoutes from "./routes/adminRoutes/availability.Routes.js";
  import subjectRoutes1 from "./routes/adminRoutes/subject.Routes.js";
  import overrideRoutes from "./routes/adminRoutes/override.Routes.js";
  import overrideRoutes1 from "./routes/teacherRoutes/override.Routes.js"
  import notificationRoutes1 from "./routes/teacherRoutes/notification.Routes.js"
  import conflictRoutes from "./routes/adminRoutes/conflict.Routes.js";
  import announcementRoutes from "./routes/adminRoutes/announcement.Routes.js";
  import discussionRoutes from "./routes/teacherRoutes/discussion.Routes.js";


  dotenv.config();
  connectDB();

  const app = express();


  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, // 🔥 VERY IMPORTANT
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));


  app.use(express.json());

  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/admin", adminRoutes);
  app.use("/api/admin/attendance-api", attendanceRoutes);
  app.use("/api/timetable", timetableRoutes);
  app.use("/api/systemlogs", systemlogRoutes);
  app.use("/api/subjects", subjectRoutes);
  app.use("/api/materials", materialRoutes);

  app.use("/api", availabilityRoutes);
  app.use("/api/notifications", notificationRoutes);
app.use("/api/admin/subjects", subjectRoutes1);
app.use("/api/check-conflict", conflictRoutes);
app.use("/api/override", overrideRoutes);
app.use("/api/override/teacher",overrideRoutes1);
app.use("/api/teacher/timetable",TeacherTimetableRoutes);
  app.use("/api/teacher/attendance", teacherAttendanceRoutes);
  app.use("/api/student", studentRoutes);

app.use("/api/admin/announcements", announcementRoutes);
app.use("/api/teacher/notifications", notificationRoutes1);
app.use("/api/teacher/discussion", discussionRoutes);

  app.get("/", (req, res) => {
    res.send("Smart Campus Assistant Backend Running");
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
