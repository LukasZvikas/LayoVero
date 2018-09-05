const blogController = require("../controllers/blogController");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

module.exports = app => {
  app.post("/admin/newPost", upload.single("image"), blogController.newPost);

  app.get("/blogPosts", blogController.fetchPosts);

  app.get("/blogPosts/post/:name", blogController.openPost);
};
