import React, { Component } from "react";
import { connect } from "react-redux";
import { openPost, fetchBlogPosts } from "../../actions/blogActions";
import BlogPosts from "./BlogPosts";
import { Link } from "react-router-dom";
import ProgImageLoading from "./loadingImage";

import fb from "../../../images/facebook.svg";
import insta from "../../../images/instagram.svg";
import thumbs from "../../../images/thumbs-up.svg";
import twitter from "../../../images/twitter.svg";
import youtube from "../../../images/youtube.svg";

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: 0,
      lastScrollY: 0,
      visible: "visible",
      opacity: 1
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(window.scrollY);

    return (
      this.props.openPost(this.props.match.params[0]),
      this.props.fetchBlogPosts()
    );
  }

  componentWillUnmount() {
    console.log(window.scrollY);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    console.log(event);
    const { lastScrollY } = this.state;
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY) {
      this.setState({ visible: "hidden", opacity: 0 });
    } else {
      this.setState({ visible: "visible", opacity: 1 });
    }
    this.setState({ lastScrollY: currentScroll });
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
            this.refreshPage();
          }}
        >
   

          <ProgImageLoading
            regPhoto={`${post.image}`}
            thumbPhoto={`${post.image}thumb`}
            imageClass={"secondary"}
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
    console.log(this.props);
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
        <div
          className="postActionBar"
          style={{
            visibility: `${this.state.visible}`,
            opacity: `${this.state.opacity}`
          }}
        >
          <img className="social__icons-items" src={thumbs} />
          <img className="social__icons-items" src={twitter} />
          <img className="social__icons-items" src={fb} />
          <img className="social__icons-items" src={insta} />
          <img className="social__icons-items" src={youtube} />
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
