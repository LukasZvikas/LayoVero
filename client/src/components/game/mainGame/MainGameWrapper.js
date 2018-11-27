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
        {({ questionsSource, actions, state }) => {
          if (questionsSource) {
            if (
              questionsSource.length !=
              getCountNumber("questCount", state.questCount)
            ) {
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
