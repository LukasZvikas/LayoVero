import React from "react";
import { GameContext } from "./mainGameProvider";
import { GameButton } from "../customComps";
import { renderQuestions } from "./functions";

const QuestionsRenderer = () => {
  return (
    <GameContext.Consumer>
      {({ props, state, actions }) => (
        <div className="game-info__image-box-wrap-main mg-wrap-margin">
          {{renderButtonType({
                state,
                props,
                actions
              })}}
        </div>
      )}
    </GameContext.Consumer>
  );
};

export default QuestionsRenderer;