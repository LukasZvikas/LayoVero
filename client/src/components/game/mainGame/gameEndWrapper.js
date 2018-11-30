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
  render() {
    return (
      <GameContext.Consumer>
        {({ resetState, props }) => (
          <div className="game-info">
            <div className="game-info__end-wrap">
              Congratulations, you finished the Quiz! You earned{" "}
              {props.game.resultCount} points.{" "}
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
