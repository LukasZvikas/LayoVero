import React from "react";
import { GameContext } from "./mainGameProvider";
import { GameButton } from "../customComps";
import { renderQuestions } from "./functions";
import {
  isCorrect,
  answerScoreHandler,
  buttonStateCheck,
  checkIfCorrect
} from "./functions";

export const ButtonRenderer = props => {
  return (
    <GameContext.Consumer>
      {({ state, props, actions }) => {
        if (state.answered === false)
          return (
            <GameButton
              name={"Check answer"}
              classType={"game-info__btn-primary"}
              action={() => {
                let isCorrect = checkIfCorrect({
                  choice: state.choice,
                  questions: props.game.questions,
                  questCount: props.game.questCount
                });
                answerScoreHandler({
                  isCorrect,
                  correctAction: props.correctAnswerAction,
                  incorrectAction: props.incorrectAnswerAction
                });
                actions.changeToAnswered();
              }}
              isDisabled={buttonStateCheck(state.choice)}
            />
          );
        return (
          <GameButton
            name={"Next question"}
            classType={"game-info__btn-primary"}
            action={() => {
              props.incrementCount();
              actions.resetChoice();
            }}
            isDisabled={buttonStateCheck(state.choice)}
          />
        );
      }}
    </GameContext.Consumer>
  );
};

export default ButtonRenderer;