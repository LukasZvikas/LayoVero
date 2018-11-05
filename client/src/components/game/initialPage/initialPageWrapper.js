import React, { Component } from "react";
import { connect } from "react-redux";
import { askForAuth } from "../../../actions/gameActions";
import PlayButton from "./playButton";
import MainHeading from "./mainHeading";

class InitialPageWrapper extends Component {
  render() {
    const { askForAuth } = this.props;
    return (
      <div className="ip">
        <MainHeading />
        <PlayButton
          action={() => {
            console.log("clicked");
            askForAuth();
          }}
        />
      </div>
    );
  }
}

export default connect(null, { askForAuth })(InitialPageWrapper);
