import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import { blogRoutes } from "../routes/noteRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Set the view engine
app.set("view engine", "ejs");

// ✅ Mount routes
app.use("/", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
