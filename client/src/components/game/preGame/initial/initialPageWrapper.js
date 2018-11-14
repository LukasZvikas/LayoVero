import React, { Component } from "react";
import { connect } from "react-redux";
import { askForAuth } from "../../../../actions/gameActions";
import { GameButton } from "../../customComps";
import MainHeading from "./mainHeading";

class InitialPageWrapper extends Component {
  render() {
    const { askForAuth } = this.props;
    return (
      <div className="game-info__main-wrap">
        <MainHeading />
        <GameButton
          action={() => {
            console.log("clicked");
            askForAuth();
          }}
          name={"Start"}
          classType={"game-info__btn-tertiary"}
        />
      </div>
    );
  }
}

export default connect(null, { askForAuth })(InitialPageWrapper);
