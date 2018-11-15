import React from "react";

const QuestionCount = ({ LSQcount, action, stateQCount }) => {
  const checkQuestionCount = () => {
    return LSQcount ? action() : stateQCount + 1;
  };
  return (
    <div className="game-info__correct-count">
      Question {checkQuestionCount()} / 20{" "}
    </div>
  );
};

export default QuestionCount;
