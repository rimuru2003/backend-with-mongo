import { Router } from "express";
import {
  getBlog,
  addBlog,
  updateBlog,
  deleateBlog,
} from "../controller/noteController.js";

const router = Router();

// Render + fetch all notes
router.get("/", getBlog);

// Add a new note
router.post("/", addBlog);

// Update an existing note (use POST for form compatibility)
router.post("/update/:id", updateBlog);

// Delete a note
router.post("/delete/:id", deleateBlog);

export const blogRoutes = router;
