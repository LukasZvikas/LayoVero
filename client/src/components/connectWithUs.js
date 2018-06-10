import React, { Component } from "react";
import { connect } from "react-redux";
import * as socialActions from "../actions/socialActions";
import { map } from "lodash-es";

class ConnectWithUs extends Component {
  componentDidMount() {
    return this.props.instaFeed();
  }

  renderFeed(array) {
    return array.slice(0, 6).map(item => {
      return (
        <img
          style={{ width: "24.5rem", height: "26.5rem" }}
          src={item.images.standard_resolution.url}
        />
      );
    });
  }

  render() {
    if (this.props.instaData.data == undefined) {
      return <div> Loading...</div>;
    }
    return (
      <div>
        <div> @Connect With US </div>
        <div>{this.renderFeed(this.props.instaData.data)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instaData: state.social
  };
}

export default connect(mapStateToProps, socialActions)(ConnectWithUs);
