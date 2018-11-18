import React from "react";
import Question from "./question";
import { Heading, GameButton } from "../customComps";

//QUESTION COMPONENT
////////////////////

export const isChosen = props => {
  if (props.choice === props.title) return "chosen";
  else if (props.isAnswered && props.isCorrect) return "chosen";
  return "";
};

export const correctChecker = (type, props) => {
  if (props.isCorrect && props.isAnswered && props.choice === props.title) {
    if (type === "class") return "correct";
    return "CORRECT!";
  } else if (
    !props.isCorrect &&
    props.isAnswered &&
    props.choice === props.title
  ) {
    if (type === "class") return "incorrect";
    return "INCORRECT!";
  } else if (
    props.isCorrect &&
    props.isAnswered &&
    props.choice !== props.title
  ) {
    if (type === "class") return "correct";
    return "CORRECT!";
  }

  return "";
};

//MAIN WRAPPER
//////////////
export const isCorrect = (title, correctAnswer) => {
  if (title === correctAnswer) return true;
  return false;
};

export const buttonStateCheck = state => {
  if (state === "") return true;
  return false;
};

export const incrementLSCount = key => {
  const storage = localStorage.getItem(key);
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
  const LSquestions = localStorage.getItem("questions");
  const LSresultCount = localStorage.getItem("resultCount");
  const LSquestCount = localStorage.getItem("questCount");
  const LSquestCountHelp = localStorage.getItem("questCountHelp");

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
  const parsedLSQuestions = JSON.parse(LSquestions);
  setQState(parsedLSQuestions);
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

export const renderButtonType = (
  state,
  questionsFromReq,
  setResultState,
  changeToAnswered,
  incrementCount,
  checkIfLast
) => {
  //console.log("checkIfLast", checkIfLast);

  const token = localStorage.getItem("token");
  const last = checkIfLast;

  let isMatch = getCountNumber("questCount", state.questCount);
  if (state.answered === false)
    return (
      <GameButton
        name={"Check answer"}
        classType={"game-info__btn-primary"}
        action={() => {
          let isCorrect = checkIfCorrect(
            state.choice,
            state.questionsFromLS,
            questionsFromReq,
            getCountNumber,
            state.questCount
          );
          answerHandler(isCorrect, setResultState, incrementLSCount);
          changeToAnswered();
          if (typeof last === "function") {
            const score = localStorage.getItem("resultCount");
            last(score, token);
          }
        }}
        isDisabled={buttonStateCheck(state.choice)}
      />
    );
  return (
    <GameButton
      name={"Next question"}
      classType={"game-info__btn-primary"}
      action={() => incrementCount()}
      isDisabled={buttonStateCheck(state.choice)}
    />
  );
};
// render a set of 4 questions everytime.
export const renderQuestions = (
  questArray,
  correctAnswer,
  state,
  isCorrect,
  checkIfAnswered
) => {
  const answersArr = questArray.answers;
  return answersArr.map(item => (
    <Question
      title={item.title}
      onClick={() => checkIfAnswered(item.title)}
      image={item.image}
      choice={state.choice}
      isCorrect={isCorrect(item.title, correctAnswer)}
      isAnswered={state.answered}
    />
  ));
};

export const getRoundQuestions = (
  arr,
  getCountNumber,
  renderQuestions,
  state,
  isCorrect,
  checkIfAnswered
) => {
  const roundCounter = getCountNumber("questCount");
  const currentQuest = arr[roundCounter];
  return renderQuestions(
    currentQuest,
    arr[roundCounter].correct_answer,
    state,
    isCorrect,
    checkIfAnswered
  );
};

export const getQuestTitle = (arr, getCountNumber) => {
  const roundCounter = getCountNumber("questCount");
  const getCurrentQuests = arr[roundCounter];
  const primary = getCurrentQuests.primaryText;
  const special = getCurrentQuests.specialWord;
  return { primary, special };
};
//checks if localStorage's and state's questCount's match
export const getCountNumber = (key, questCount) => {
  const storage = localStorage.getItem(key);
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
  const roundCounter = getCountNumber("questCount", questCount);
  const whichAvailable = dataFromLS || dataFromReq;
  if (choice === whichAvailable[roundCounter].correct_answer) return true;
  return false;
};

export const incrementLSQuestCount = () => {
  const storage = localStorage.getItem("questCount");
  let parsedStorage = JSON.parse(storage);
  parsedStorage++;
  return parsedStorage;
};
