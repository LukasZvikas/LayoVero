import React, { Component } from "react";
import { connect } from "react-redux";
import { askForAuth } from "../../../../actions/gameActions";
import { GameButton } from "../../customComps";
import MainHeading from "./mainHeading";

class InitialPageWrapper extends Component {
  render() {
    const { askForAuth } = this.props;
    return (
      <div className="game-info__main-wrap pre">
        <MainHeading />
        <GameButton
          action={() => askForAuth()}
          name={"Start"}
          classType={"game-info__btn-tertiary"}
          to={"/ready"}
        />
      </div>
    );
  }
}

export default connect(null, { askForAuth })(InitialPageWrapper);
