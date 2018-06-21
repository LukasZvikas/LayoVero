const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  postName: String,
  postText: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  date: Date
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
