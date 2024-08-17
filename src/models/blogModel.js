const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  author: {
    type: String,
    required: true,
  },
  authorEmail: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
