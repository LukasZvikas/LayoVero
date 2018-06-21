const blogController = require("../controllers/blogController");

module.exports = app => {
  app.post("/admin/newPost", blogController.newPost);

  app.get("/blogPosts", blogController.fetchPosts);
};
