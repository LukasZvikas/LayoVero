import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogPosts } from "../../actions/blogActions.js";

class BlogPosts extends Component {
  componentDidMount() {
    return this.props.fetchBlogPosts();
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <div>
          <div>{post.postName} </div>
          <div> {post.blogPost} </div>
          <div> {post.likes} </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.blogPosts.blogs == undefined) {
      return <div className="spinner"></div>;
    }
    return <div>{this.renderPosts(this.props.blogPosts.blogs)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    blogPosts: state.blog
  };
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPosts);
