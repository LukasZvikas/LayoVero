import React, { Component } from "react";
import BlogPosts from "./BlogPosts";

class BlogWrapper extends Component {
  render() {
    return (
      <div>
        <div className="textBox">
          <div className="textBox__heading">Recent Stories</div>
          <div className="textBox__text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
        <BlogPosts />
      </div>
    );
  }
}

export default BlogWrapper;
