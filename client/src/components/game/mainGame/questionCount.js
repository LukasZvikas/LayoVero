import React from "react";
import { incrementLSQuestCount } from "./functions";
import { GameContext } from "./mainGameProvider";

const QuestionCount = () => {
  const checkQuestionCount = (LSQcount, stateQCount) => {
    return LSQcount ? incrementLSQuestCount() : stateQCount + 1;
  };

  const getCountFromLS = key => {
    return localStorage.getItem(key);
  };
  return (
    <GameContext.Consumer>
      {({ props }) => {
        console.log("STATECOunt", props);
        return (
          <div className="game-info__count-wrap">
            <div className="game-info__correct-count">
              Question {props.questCount} / 20{" "}
            </div>
            <div className="game-info__correct-count">
              Correct {props.resultCount} / 20{" "}
            </div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
};

export default QuestionCount;

// LSQcount={localStorage.getItem("resultCount")}
// action={localStorage.getItem("questCount")}
// stateQCount={1}
// LSResultCount={props.LSResultCount}
