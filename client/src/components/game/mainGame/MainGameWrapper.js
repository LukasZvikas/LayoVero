import React, { Component } from "react";
import MainGameProvider from "./mainGameProvider";
import QuestionsWrapper from "./QuestionsWrapper";
import GameEndWrapper from "./GameEndWrapper";
import { getCountNumber } from "./functions";
import { GameContext } from "./mainGameProvider";

const MainGameWrapper = props => {
  return (
    <MainGameProvider>
      <GameContext.Consumer>
        {({ props, actions, state }) => {
          console.log("PRR", props.questCount);
          if (props.questions) {
            if (props.questions.length != props.questCount) {
              return <QuestionsWrapper />;
            }
          }
          return <GameEndWrapper />;
        }}
      </GameContext.Consumer>
    </MainGameProvider>
  );
};

export default MainGameWrapper;
