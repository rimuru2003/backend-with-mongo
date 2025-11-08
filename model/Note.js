import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

const Note = mongoose.model("user", schema);

export default Note;
