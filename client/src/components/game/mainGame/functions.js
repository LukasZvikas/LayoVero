import React from "react";
import Question from "./question";

export const isCorrect = (title, correctAnswer) => {
  if (title === correctAnswer) return true;
  return false;
};

export const buttonStateCheck = state => {
  if (state === "") return true;
  return false;
};

export const incrementLSCount = key => {
  let storage = localStorage.getItem(key);
  if (!storage) {
    localStorage.setItem(key, 1);
  } else {
    let parsedStorage = JSON.parse(storage);
    parsedStorage++;
    let stringStorage = JSON.stringify(parsedStorage);
    localStorage.setItem(key, stringStorage);
  }
};

export const getInitialQuestions = (action, setQState, incrementLSCount) => {
  let LSquestions = localStorage.getItem("questions");
  let LSresultCount = localStorage.getItem("resultCount");
  let LSquestCount = localStorage.getItem("questCount");
  let LSquestCountHelp = localStorage.getItem("questCountHelp");

  if (LSquestions === null) {
    action(1);
    localStorage.setItem("questCount", 0);
    localStorage.setItem("resultCount", 0);
    localStorage.setItem("questCountHelp", 0);
  } else {
    //added LSquestCountHelp to make sure that if the question is answered and page is refreshed, it shows a new question, instead of the one answered
    if (LSquestCount !== LSquestCountHelp) {
      incrementLSCount("questCount");
    }
  }
  let parsedLSQuestions = JSON.parse(LSquestions);
  setQState(parsedLSQuestions);
};

export const renderQuestions = (
  questArray,
  correctAnswer,
  state,
  isCorrect
) => {
  console.log("Quests", questArray);
  const answersArr = questArray.answers;
  return answersArr.map(item => {
    return (
      <Question
        title={item.title}
        onClick={() =>
          this.state.answered
            ? this.incrementCount()
            : this.setState({ choice: item.title })
        }
        image={item.image}
        choice={state.choice}
        isCorrect={isCorrect(item.title, correctAnswer)}
        isAnswered={state.answered}
      />
    );
  });
};

export const doResultIncrement = prevState => ({
  resultCount: prevState.resultCount + 1
});

export const setResultState = () => {
  this.setState(doResultIncrement);
};

export const answerHandler = (isCorrect, setResultState, incrementLSCount) => {
  return isCorrect
    ? (setResultState(),
      incrementLSCount("resultCount"),
      incrementLSCount("questCountHelp"))
    : incrementLSCount("questCountHelp");
};

export const getRoundQuestions = (
  arr,
  getCountNumber,
  renderQuestions,
  state,
  isCorrect
) => {
  let roundCounter = getCountNumber("questCount");
  let currentQuest = arr[roundCounter];
  return renderQuestions(
    currentQuest,
    arr[roundCounter].correct_answer,
    state,
    isCorrect
  );
};

export const getQuestTitle = (arr, getCountNumber) => {
  let roundCounter = getCountNumber("questCount");
  const getCurrentQuests = arr[roundCounter];
  const primary = getCurrentQuests.primaryText;
  const special = getCurrentQuests.specialWord;
  return { primary, special };
};

export const getCountNumber = (key, questCount) => {
  //checks if localStorage's and state's questCount's match
  let storage = localStorage.getItem(key);
  if (questCount !== storage && storage !== null) return storage;
  return questCount;
};

export const checkIfCorrect = (
  choice,
  dataFromLS,
  dataFromReq,
  getCountNumber,
  questCount
) => {
  let roundCounter = getCountNumber("questCount", questCount);
  let whichAvailable = dataFromLS || dataFromReq;
  console.log("HAHA", choice, whichAvailable[roundCounter].correct_answer);
  if (choice === whichAvailable[roundCounter].correct_answer) return true;
  return false;
};

export const incrementLSQuestCount = () => {
  let storage = localStorage.getItem("questCount");
  let parsedStorage = JSON.parse(storage);
  parsedStorage++;
  return parsedStorage;
};
