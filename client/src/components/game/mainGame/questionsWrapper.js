import React from "react";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import QuestionCount from "./questionCount";

const QuestionWrapper = props => {
  console.log(props);
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
        <div class="game-info__image-box-wrap-main">
          {props.getRoundQuestions}
        </div>
        {props.renderButtonType}
      </div>
    </div>
  );
};

export default QuestionWrapper;
