const Blog = require("../models/blogSchema");

exports.newPost = async (req, res, next) => {
  const postName = req.body.postName;
  const postText = req.body.postText;
  console.log(postName);

  const newPost = new Blog({
  	postName,
    postText
  });

  await newPost.save(err => {
    return next(err);
  });

  res.send({success: "true"})
};


exports.fetchPosts = async (req, res, next) => {

	const posts = await Blog.find()

	res.send(posts);

}