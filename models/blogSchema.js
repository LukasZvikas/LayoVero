const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema } = mongoose;

const blogSchema = new Schema({
  blogId: Number,
  postName: String,
  postText: String,
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  image: String
});

blogSchema.plugin(AutoIncrement, { inc_field: "blogId" });

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
