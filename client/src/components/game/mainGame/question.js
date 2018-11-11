import React from "react";
import sacreCoeur from "../../../../images/sacreCoeur.png";

const Question = ({ img, title, onClick }) => {
	// const selectAnswer = () => {

	// }
  return (
    <div>
      <div className="game-info__image-wrap" onClick={onClick}>
        <img src={sacreCoeur} className="game-info__image" />
      </div>
      <div className="game-info__image-main-title">{title}</div>
      <div className="game-info__answer"></div> 
    </div>
  );
};

export default Question;
