import Note from "../model/Note.js";

// 🟢 Display all notes (renders the EJS page)
export const getBlog = async (req, res) => {
  try {
    const notes = await Note.find();
    res.render("index", { notes }); // ✅ renders EJS file
  } catch (err) {
    res.status(500).send("Error loading notes");
  }
};

// 🟢 Add a note
export const addBlog = async (req, res) => {
  try {
    await Note.create(req.body);
    res.redirect("/"); // ✅ redirect back to home page
  } catch (err) {
    res.status(500).send("Error adding note");
  }
};

// 🟢 Update a note (optional for now)
export const updateBlog = async (req, res) => {
  try {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error updating note");
  }
};

// 🟢 Delete a note
export const deleateBlog = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error deleting note");
  }
};
