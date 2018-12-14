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

export class GameEndWrapper extends Component {
  render() {
    return (
      <GameContext.Consumer>
        {({ props }) => (
          <div className="game-info__main-wrap pre">
            <div className="game-info__end-wrap">
              <div>
                Congratulations, you finished the Quiz! You earned{" "}
                {props.game.resultCount} points.{" "}
              </div>
              <GameButton
                name={"Play Again"}
                classType={"button-primary"}
                action={() => {
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
