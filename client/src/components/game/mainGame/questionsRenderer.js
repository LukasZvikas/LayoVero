import React from "react";
import { GameContext } from "./mainGameProvider";
import Question from "./question";
import { renderQuestions } from "./functions";

const QuestionsRenderer = () => {
  return (
    <GameContext.Consumer>
      {({ props, state, actions }) => (
        <div className="game-info__image-box-wrap-main mg-wrap-margin">
          {renderQuestions({
            questions: props.game.questions,
            questCount: props.game.questCount,
            answered: state.answered,
            choice: state.choice,
            actions
          })}
        </div>
      )}
    </GameContext.Consumer>
  );
};

export default QuestionsRenderer;
