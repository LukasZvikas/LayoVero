import React from "react";

const Question = ({ img, title }) => {
  return (
    <div>
      <div className="game-info__image-wrap">
        <img src={img} className="game-info__image" />
      </div>
      <div className="game-info__image-main-title">{title}</div>
    </div>
  );
};

export default Question;
