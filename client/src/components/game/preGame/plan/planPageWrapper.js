import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { GameButton, GameInput, Heading, ImageBox } from "../../customComps";
import imageBoxTypes from "./imageBoxTypes";
import { startGame, getRoundQuestions } from "../../../../actions/gameActions";
import { renderRoundBoxes, removeFooter } from "../../helperFunctions";

class PlanPageWrapper extends Component {
  getActions = () => {
    return {
      startGame: this.props.startGame,
      getRoundQuestions: this.props.getRoundQuestions
    };
  };

  componentDidMount() {
    removeFooter();
  }

  render() {
    return (
      <div className="game-info__main-wrap pre">
        <Heading primaryText={"LET'S"} secondaryText={"PLAY A GAME"} />
        <div className="game-info__tertiary-heading">
          This is{" "}
          <span className="game-info__special-word">not just a game</span>. It
          will not simply entertain you, but
          <span className="game-info__special-word">
            {" "}
            it will educate you{" "}
          </span>{" "}
          and after you complete all of the rounds you will not only
          <span className="game-info__special-word">
            {" "}
            know more facts about our World
          </span>, but also
          <span style={{ fontWeight: "bold" }}>
            {" "}
            become one of the candidates for our amazing prize
          </span>{" "}
          that will be announced later!
        </div>
        <div className="game-info__image-box-wrap-main">
          {renderRoundBoxes(imageBoxTypes, this.getActions())}
        </div>
        <GameButton name={"Rules"} classType={"button-primary plan"} />
      </div>
    );
  }
}

export default connect(null, { startGame, getRoundQuestions })(PlanPageWrapper);
