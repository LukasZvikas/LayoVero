const Blog = require("../models/blogSchema");

exports.newPost = async (req, res, next) => {
  const postName = req.body.postName;
  const postText = req.body.postText;
  const image = req.file;

  const newPost = new Blog({
    postName,
    postText,
    image: image.path
  });

  await newPost.save(err => {
    return next(err);
  });

  res.send({ success: "true" });
};

exports.fetchPosts = async (req, res, next) => {
  const posts = await Blog.find();

  res.send(posts);
};

exports.openPost = async (req, res, next) => {
  const reqPost = req.params.name;


  const post = await Blog.findOne({ postName: reqPost }, (err, foundPost) => {
  	console.log("POST", foundPost);
    if (err) {
      return next(err);
    }

    
  });

  res.send(post);
};
