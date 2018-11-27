import React, { createContext } from "react";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import QuestionCount from "./questionCount";
import { renderQuestions, renderButtonType, getQuestTitle } from "./functions";
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
      }) => {
        const currentQuest = getCountNumber("questCount", state.questCount);
        return (
          <div className="game-info">
            <QuestionCount />
            <div className="game-info__main-wrap">
              <Heading
                primaryText={
                  getQuestTitle({
                    questionsSource,
                    state
                  }).primary
                }
                secondaryText={
                  getQuestTitle({
                    questionsSource,
                    state
                  }).special
                }
                tertiaryText={"?"}
              />
              <div className="game-info__image-box-wrap-main mg-wrap-margin">
                {renderQuestions({
                  state,
                  questionsSource,
                  actions
                })}
              </div>
              <div className="game-info__explanation">
                {showExplanation(
                  state.answered,
                  questionsSource[currentQuest].explanation
                )}
              </div>
              {renderButtonType({
                state,
                props,
                actions
              })}
            </div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
};
export default QuestionWrapper;
