import React from "react";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import QuestionCount from "./questionCount";

const QuestionWrapper = props => {
  console.log(props);

  const showExplanation = (answered, explanation) => {
    return answered ? explanation : null;
  };
  return (
    <div className="game-info">
      <QuestionCount
        LSQcount={props.LSQcount}
        action={props.incrementLSQCount}
        stateQCount={props.state.questCount}
        LSResultCount={props.LSResultCount}
      />
      <div className="game-info__main-wrap">
        <Heading
          primaryText={props.titleItems.primary}
          secondaryText={props.titleItems.special}
          tertiaryText={"?"}
        />
        <div className="game-info__image-box-wrap-main mg-wrap-margin">
          {props.getRoundQuestions}
        </div>
        <div className="game-info__explanation">
          {showExplanation(props.state.answered, props.explanation)}
        </div>
        {props.renderButtonType}
      </div>
    </div>
  );
};

export default QuestionWrapper;
