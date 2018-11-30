import React from "react";
import Question from "./question";
import { Heading, GameButton } from "../customComps";

//QUESTION COMPONENT
////////////////////

export const isChosen = props => {
  if (props.choice === props.title || (props.isAnswered && props.isCorrect))
    return "chosen";
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

export const doResultIncrement = prevState => ({
  resultCount: prevState.resultCount + 1
});

export const checkIfLast = (roundCounter, arr, action) => {
  const diff = 1;
  if (diff === 1) return action;
  return null;
};

// export const clearQStorage = () => {
//   localStorage.removeItem("resultCount");
//   localStorage.removeItem("questCount");
//   localStorage.removeItem("questions");
//   localStorage.removeItem("questCountHelp");
// };

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

// export const getInitialQuestions = (action, setQState, incrementLSCount) => {
//   const LSquestions = localStorage.getItem("questions");
//   const LSresultCount = localStorage.getItem("resultCount");
//   const LSquestCount = localStorage.getItem("questCount");
//   const LSquestCountHelp = localStorage.getItem("questCountHelp");

//   if (LSquestions === null) {
//     action(1);
//   } else {
//     //added LSquestCountHelp to make sure that if the question is answered and page is refreshed, it shows a new question, instead of the one answered
//     if (LSquestCount !== LSquestCountHelp) {
//       incrementLSCount("questCount");
//     }
//   }
//   const parsedLSQuestions = JSON.parse(LSquestions);
//   setQState(parsedLSQuestions);
// };

export const answerScoreHandler = ({
  isCorrect,
  correctAction,
  incorrectAction
}) => {
  console.log("corr", correctAction, "incorr", incorrectAction);
  return isCorrect ? (setResultState(), correctAnswer()) : incorrectAction();
};

export const renderButtonType = ({ state, props, actions }) => {
  const token = localStorage.getItem("token");
  let isMatch = props.questCount;
  console.log("STTTT", state, "ACTIONs", actions);
  if (state.answered === false)
    return (
      <GameButton
        name={"Check answer"}
        classType={"game-info__btn-primary"}
        action={() => {
          let isCorrect = checkIfCorrect({
            choice: state.choice,
            questions: props.questions,
            questCount: props.questCount
          });
          answerScoreHandler({
            isCorrect,
            correctAction: props.correctAnswerAction,
            incorrectAction: props.incorrectAnswerAction
          });
          actions.changeToAnswered();
          if (typeof last === "function") {
            const score = localStorage.getItem("resultCount");
            checkIfLast(score, token);
          }
        }}
        isDisabled={buttonStateCheck(state.choice)}
      />
    );
  return (
    <GameButton
      name={"Next question"}
      classType={"game-info__btn-primary"}
      action={() => props.incrementCount()}
      isDisabled={buttonStateCheck(state.choice)}
    />
  );
};

// render a set of 4 questions everytime.
export const renderQuestions = ({
  questions,
  choice,
  questCount,
  answered,
  actions
}) => {
  const currentQuest = questions[questCount];
  const correctAnswer = currentQuest.correct_answer;
  const answersArr = currentQuest.answers;
  return answersArr.map(item => (
    <Question
      title={item.title}
      onClick={() => actions.checkIfAnswered(item.title)}
      image={item.image}
      choice={choice}
      isCorrect={isCorrect(item.title, correctAnswer)}
      isAnswered={answered}
    />
  ));
};

export const getQuestTitle = ({ questions, questCount }) => {
  console.log("Q", questCount, "quest", questions);
  const getCurrentQuests = questions[questCount];
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

export const checkIfCorrect = ({ choice, questions, questCount }) => {
  const whichAvailable = questions;
  if (choice === whichAvailable[questCount].correct_answer) return true;
  return false;
};

export const incrementLSQuestCount = () => {
  const storage = localStorage.getItem("questCount");
  let parsedStorage = JSON.parse(storage);
  parsedStorage++;
  return parsedStorage;
};
