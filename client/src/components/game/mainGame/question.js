import React from "react";
import sacreCoeur from "../../../../images/sacreCoeur.png";
import { Heading, GameButton } from "../customComps";

export const Question = ({
  img,
  title,
  onClick,
  image,
  choice,
  isAnswered,
  isCorrect
}) => {
  //`../../../../images/${image}.png`

  const isChosen = () => {
    if (choice === title) {
      return "chosen";
    }
    return "";
  };

  const answerStyle = type => {
  	
    if (isCorrect && isAnswered && choice === title) {
      if (type === "class") return "correct";
      return "CORRECT!";
    } else if (!isCorrect && isAnswered && choice === title) {
      if (type === "class") return "incorrect";
      return "INCORRECT!";
    }
    return "";
  };

  return (
    <div>
      <div className={isChosen()}>
        <div className="game-info__image-wrap" onClick={onClick}>
          <img src={sacreCoeur} className="game-info__image" />
        </div>
        <div className="game-info__image-main-title">{title}</div>
      </div>
      <div className={`game-info__answer ${answerStyle("class")}`}>
        {" "}
        {answerStyle("text")}{" "}
      </div>
    </div>
  );
};

export default Question;
