import React, { Component } from "react";
import { connect } from "react-redux";
import { openPost, fetchBlogPosts } from "../../actions/blogActions.js";
import BlogPosts from "./BlogPosts";
import { Link } from "react-router-dom";

class BlogPost extends Component {
  componentDidMount() {
    return (
      this.props.openPost(this.props.match.params[0]),
      this.props.fetchBlogPosts()
    );
  }
  refreshPage() {
    window.location.reload();
  }
  renderPosts(posts) {
    return posts.slice(0, 3).map(post => {
      return (
        <Link
          to={`/blog/post/${post.postName}`}
          className="blog-posts-secondary-post"
          onClick={() => {
            this.refreshPage;
          }}
        >
          <img
            className="blog-posts-secondary-image"
            src={`../../${post.image}`}
          />
          {/*<img className={`blog-posts__image--${2}`} src={"../../images/logoyoutube.png"} />
          <img className={`blog-posts__image--${3}`} src={"../../images/logoyoutube.png"} />*/}
          {/*<div className="blog-posts__name">{post.postName}</div>*/}
          <div className="blog-posts-secondary-info">
            <div className="blog-posts-secondary-name"> {post.postName} </div>
            <div className="blog-posts-secondary-date">
              {post.date.slice(0, 10)}
            </div>
          </div>
        </Link>
        // {        <div className="blog-posts__post"> {post.blogPost} </div>
        // <div className="blog-posts__post"> {post.likes} </div>}
        //../../${post.image}
      );
    });
  }

  render() {
    // console.log(this.props.match);
    if (
      this.props.foundPost == undefined ||
      this.props.blogPosts.blogs == undefined
    ) {
      return <div className="spinner" />;
    }

    return (
      <div>
        <div className="textBox">
          <div className="textBox__heading">
            {this.props.foundPost.postName}
          </div>
          <div className="textBox__text">{this.props.foundPost.postText}</div>
        </div>
        <div className="more-stories">More Stories</div>
        <div className="blog-posts-secondary">
          {this.renderPosts(this.props.blogPosts.blogs)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foundPost: state.blog.post,
    blogPosts: state.blog
  };
}

export default connect(mapStateToProps, { openPost, fetchBlogPosts })(BlogPost);
