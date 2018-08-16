import React, { Component } from "react";
import { connect } from "react-redux";
import {HideModal} from "../../actions/authActions";

import About1 from "./aboutUsMain";
import About2 from "./aboutUsSecondary";
import Social from "./Social";
import ComingSoon from "./ComingSoon";

class aboutWrapper extends Component {

   hideModal() {
    this.props.HideModal();
  }
  render() {
    return (
      <div className="main">
        <About1 />
        <About2 />
        <Social />
        <ComingSoon />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { HideModal })(aboutWrapper);
