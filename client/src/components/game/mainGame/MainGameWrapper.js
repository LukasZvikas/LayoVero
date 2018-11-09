import React, { Component } from "react";
import { connect } from "react-redux";
import parisQData from "./parisQData";
import { renderBoxes } from "../helperFunctions";
import { Heading, GameButton } from "../customComps";

class MainGameWrapper extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="game-info__main-wrap">
        <Heading
          primaryText={"ha"}
          secondaryText={"ha"}
          tertiaryText={"?"}
        />
        <div class="game-info__image-box-wrap-main" />
        <GameButton name={"Done"} classType={"game-info__btn-primary"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionArray: state.game.questions
  };
};

export default connect(mapStateToProps)(MainGameWrapper);
