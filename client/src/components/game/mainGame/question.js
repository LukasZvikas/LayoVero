import React from "react";
import sacreCoeur from "../../../../images/sacreCoeur.png";
import { Heading, GameButton } from "../customComps";
import { isChosen, answerStyle } from "./functions";
export const Question = props => {
  //`../../../../images/${image}.png`
  return (
    <div>
      <div className={isChosen(props)}>
        <div className="game-info__image-wrap" onClick={props.onClick}>
          <img src={sacreCoeur} className="game-info__image" />
        </div>
        <div className="game-info__image-main-title">{props.title}</div>
      </div>
      <div className={`game-info__answer ${answerStyle("class", props)}`}>
        {answerStyle("text", props)}
      </div>
    </div>
  );
};

export default Question;
