import React, { Component } from "react";
import { connect } from "react-redux";
import { Heading, GameButton } from "../customComps";
import { saveScore, resetGame } from "../../../actions/gameActions";
import { GameContext } from "./mainGameProvider";
import {
  getCountNumber,
  incrementLSQuestCount,
  clearQStorage
} from "./functions";

class GameEndWrapper extends Component {
  componentDidMount() {
    const saved = localStorage.getItem("saved");
    const token = localStorage.getItem("token");
    const score = localStorage.getItem("resultCount");
  }
  render() {
    return (
      <GameContext.Consumer>
        {({ resetState, resultCount }) => (
          <div className="game-info">
            <div className="game-info__end-wrap">
              Congratulations, you finished the Quiz! You earned{" "}
              {getCountNumber("resultCount", resultCount)} points.{" "}
              <GameButton
                name={"Play Again"}
                classType={"game-info__btn-primary"}
                action={() => {
                  resetState;
                  this.props.resetGame();
                  window.location.reload();
                }}
              />
            </div>
          </div>
        )}
      </GameContext.Consumer>
    );
  }
}

export default connect(null, { saveScore, resetGame })(GameEndWrapper);
