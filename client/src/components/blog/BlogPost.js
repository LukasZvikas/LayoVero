import React, { Component } from "react";
import { connect } from "react-redux";
import { openPost } from "../../actions/blogActions.js";

class BlogPost extends Component {
  componentDidMount() {
    return this.props.openPost(this.props.match.params[0]);
  }
  render() {
    // console.log(this.props.match);
    if (this.props.foundPost == undefined) {
      return <div className="spinner" />;
    }

    return (
      <div>
        <div>{this.props.foundPost.postText}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foundPost: state.blog.post
  };
}

export default connect(mapStateToProps, { openPost })(BlogPost);
