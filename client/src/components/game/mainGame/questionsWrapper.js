import React, { createContext } from "react";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import QuestionCount from "./questionCount";
import {
  renderQuestions,
  renderButtonType,
  isCorrect,
  getQuestTitle,
  getCountNumber,
  checkIfLast
} from "./functions";
import { GameContext } from "./mainGameProvider";

const QuestionWrapper = props => {
  const showExplanation = (answered, explanation) => {
    return answered ? explanation : null;
  };
  return (
    <GameContext.Consumer>
      {({
        functions,
        questionsSource,
        props,
        state,
        checkIfAnswered,
        actions
      }) => (
        <div className="game-info">
          <QuestionCount />
          <div className="game-info__main-wrap">
            <Heading
              primaryText={
                getQuestTitle(questionsSource, getCountNumber, state.questCount)
                  .primary
              }
              secondaryText={
                getQuestTitle(questionsSource, getCountNumber, state.questCount)
                  .special
              }
              tertiaryText={"?"}
            />
            <div className="game-info__image-box-wrap-main mg-wrap-margin">
              {renderQuestions(
                questionsSource,
                getCountNumber("questCount", state.questCount),
                state,
                isCorrect,
                actions.checkIfAnswered
              )}
            </div>
            <div className="game-info__explanation">
              {showExplanation(
                state.answered,
                questionsSource[getCountNumber("questCount", state.questCount)]
                  .explanation
              )}
            </div>
            {renderButtonType(
              state,
              props.questionsFromReq,
              actions.setResultState,
              actions.changeToAnswered,
              actions.incrementCount,
              checkIfLast(
                getCountNumber("questCount", state.questCount),
                questionsSource,
                props.saveScore
              )
            )}
          </div>
        </div>
      )}
    </GameContext.Consumer>
  );
};

export default QuestionWrapper;
