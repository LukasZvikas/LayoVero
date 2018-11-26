import React, { Component } from "react";
import MainGameProvider from "./mainGameProvider";
import QuestionsWrapper from "./QuestionsWrapper";
import GameEndWrapper from "./GameEndWrapper";
import * as functions from "./functions";

const MainGameWrapper = props => {
  return (
    <MainGameProvider>
      <QuestionsWrapper />
      <GameEndWrapper />
    </MainGameProvider>
  );
};

export default MainGameWrapper;
