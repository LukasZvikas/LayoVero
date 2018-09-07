import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogPosts, openPost } from "../../actions/blogActions.js";
import { Link } from "react-router-dom";
import ProgImageLoading from "./loadingImage";

class BlogPosts extends Component {
  componentDidMount() {
    return this.props.fetchBlogPosts();
  }

  renderPosts(posts) {
    return posts.map(post => {
      console.log(post);
      return (
        <Link
          to={`/blog/post/${post.postName}`}
          className="blog-posts-main-post"
        >
          <ProgImageLoading
            regPhoto={`../../../..${post.image}.jpg`}
            thumbPhoto={`../../../..${post.image}thumb.jpg`}
            imageClass={"main"}
          />
          <div className="blog-posts-main-info">
            <div className="blog-posts-main-name"> {post.postName} </div>
            <div className="blog-posts-main-date">{post.date.slice(0, 10)}</div>
          </div>
        </Link>
      );
    });
  }

  render() {
    if (this.props.blogPosts.blogs == undefined) {
      return <div className="spinner" />;
    }
    return (
      <div className="blog-posts-main">
        {this.renderPosts(this.props.blogPosts.blogs)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogPosts: state.blog
  };
}

export default connect(mapStateToProps, { fetchBlogPosts, openPost })(
  BlogPosts
);
