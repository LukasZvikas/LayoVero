import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogPosts, openPost } from "../../actions/blogActions.js";
import { Link } from "react-router-dom";

class BlogPosts extends Component {
  componentDidMount() {
    return this.props.fetchBlogPosts();
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <Link to={`/blog/post/${post.postName}`} className="blog-posts__post">
          <img className="blog-posts__image" src={`../../${post.image}`} />
          {/*<img className={`blog-posts__image--${2}`} src={"../../images/logoyoutube.png"} />
          <img className={`blog-posts__image--${3}`} src={"../../images/logoyoutube.png"} />*/}
          {/*<div className="blog-posts__name">{post.postName}</div>*/}
          <div className="blog-posts__info">
            <div className="blog-posts__name"> {post.postName} </div>
            <div className="blog-posts__likes">{post.date.slice(0, 10)}</div>
          </div>
        </Link>
        // {        <div className="blog-posts__post"> {post.blogPost} </div>
        // <div className="blog-posts__post"> {post.likes} </div>}
        //../../${post.image}
      );
    });
  }

  render() {
    if (this.props.blogPosts.blogs == undefined) {
      return <div className="spinner" />;
    }
    return (
      <div className="blog-posts">
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
