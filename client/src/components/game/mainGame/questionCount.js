import React from "react";

const QuestionCount = ({ LSQcount, LSResultCount, action, stateQCount }) => {
  const checkQuestionCount = () => {
    return LSQcount ? action() : stateQCount + 1;
  };
  return (
    <div className="game-info__count-wrap">
      <div className="game-info__correct-count">
        Question {checkQuestionCount()} / 20{" "}
      </div>
      <div className="game-info__correct-count">
        Correct {LSResultCount} / 20{" "}
      </div>
    </div>
  );
};

export default QuestionCount;
