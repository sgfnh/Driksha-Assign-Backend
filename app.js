import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./util/db.js";
import teacherRoutes from "./routes/TeacherRoutes.js";

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/teachers", teacherRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);