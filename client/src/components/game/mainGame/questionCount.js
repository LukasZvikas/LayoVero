import React from "react";
import { GameContext } from "./mainGameProvider";

const QuestionCount = props => {
  return (
    <GameContext.Consumer>
      {({ props }) => {
        return (
          <div className="game-info__count-wrap">
            <div className="game-info__correct-count">
              Question {props.game.questCount + 1} / 20{" "}
            </div>
            <div className="game-info__correct-count">
              Correct {props.game.resultCount} / 20{" "}
            </div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
};

export default QuestionCount;

