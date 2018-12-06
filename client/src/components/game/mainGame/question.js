import React from "react";
import sacreCoeur from "../../../../images/sacreCoeur.png";
import { Heading, GameButton } from "../customComps";
import { isChosen, correctChecker } from "./functions";
export const Question = props => {
  //`../../../../images/${image}.png`
  return (
    <div className="">
      <div
        className={`${isChosen(props)} ${correctChecker( "class", props )} game-info__q-frame`} >
        <div className="game-info__image-wrap" onClick={props.onClick}>
          <img src={sacreCoeur} className="game-info__image" />
          <div className={`game-info__answer ${correctChecker("class", props)}`} >
            {correctChecker("text", props)}
          </div>
        </div>
        <div className="game-info__image-main-title">{props.title}</div>
      </div>
    </div>
  );
};

export default Question;
