import React, { Component } from "react";
import BlogPosts from "./BlogPosts";

class BlogWrapper extends Component {
  render() {
    return (
      <div>
        <div>This is Blog</div>
        <BlogPosts />
      </div>
    );
  }
}


export default BlogWrapper;