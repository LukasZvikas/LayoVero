import React, { createContext } from "react";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import QuestionCount from "./questionCount";
import {
  renderQuestions,
  renderButtonType,
  getQuestTitle,
  getCountNumber
} from "./functions";
import { GameContext } from "./mainGameProvider";

const QuestionWrapper = props => {
  const showExplanation = (answered, explanation) => {
    return answered ? explanation : null;
  };
  return (
    <GameContext.Consumer>
      {({ functions, props, state, checkIfAnswered, actions }) => {
        console.log("STATEEE", state)
        return (
          <div className="game-info">
            <QuestionCount />
            <div className="game-info__main-wrap">
              <Heading
                primaryText={
                  getQuestTitle({
                    questions: props.questions,
                    questCount: props.questCount
                  }).primary
                }
                secondaryText={
                  getQuestTitle({
                    questions: props.questions,
                    questCount: props.questCount
                  }).special
                }
                tertiaryText={"?"}
              />
              <div className="game-info__image-box-wrap-main mg-wrap-margin">
                {renderQuestions({
                  choice: state.choice,
                  answered: state.answered,
                  questions: props.questions,
                  actions,
                  questCount: props.questCount
                })}
              </div>
              <div className="game-info__explanation">
                {showExplanation(
                  state.answered,
                  props.questions[props.questCount].explanation
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
