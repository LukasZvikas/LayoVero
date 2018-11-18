import React from "react";
import sacreCoeur from "../../../../images/sacreCoeur.png";
import { Heading, GameButton } from "../customComps";
import { isChosen, correctChecker } from "./functions";
export const Question = props => {
  //`../../../../images/${image}.png`

  return (
    <div>
      <div className={`${isChosen(props)} ${correctChecker("class", props)}`}>
        <div className="game-info__image-wrap" onClick={props.onClick}>
{/*          <div>
            Located in Kuala Lumpur, Malaysia, the Petronas Towers stand at
            1,483 feet. They also boast the world's highest two-story bridge, a
            sky bridge on the 41st and 42nd floors, that takes visitors between
            the two skyscrapers
          </div>*/}
          <img src={sacreCoeur} className="game-info__image" />
        </div>
        <div className="game-info__image-main-title">{props.title}</div>
      </div>
      <div className={`game-info__answer ${correctChecker("class", props)}`}>
        {correctChecker("text", props)}
      </div>
    </div>
  );
};

export default Question;
