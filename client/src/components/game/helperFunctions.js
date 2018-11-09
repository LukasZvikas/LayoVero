import React from "react";
import { ImageBox } from "./customComps";
//import GameImageBox from "./mainGame/gameImageBox";

export const errorRenderer = (nameOfClass, msg) => {
  let errEl = document.getElementsByClassName(nameOfClass)[0];
  errEl.innerHTML = msg;
  return errEl.innerHTML;
};

export const renderBoxes = (arr, type) => {
  if (type == "example") {
    return arr.map(item => (
      <ImageBox
        img={item.image}
        title={item.title}
        status={item.status}
        key={item.title}
      />
    ));
  }

  //return arr.map(item => <GameImageBox img={item.image} title={item.title} />);
};

export const renderRoundBoxes = (arr, action) => {
  return arr.map(item => {
    if (item.status) {
      return (
        <ImageBox
          img={item.image}
          title={item.title}
          status={item.status}
          key={item.title}
          onClick={() => {
            action.startGame();
            action.getRoundQuestions(item.city);
          }}
        />
      );
    }
    return (
      <ImageBox
        img={item.image}
        title={item.title}
        status={item.status}
        key={item.title}
      />
    );
  });
};
