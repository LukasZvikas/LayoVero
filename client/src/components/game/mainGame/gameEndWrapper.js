import React from "react";
import { Heading, GameButton } from "../customComps";

const GameEndWrapper = ({ LSResultCount, action }) => {
  return (
    <div className="game-info">
      <div className="game-info__end-wrap">
        Congratulations, you finished the Quiz! You earned {LSResultCount}{" "}
        points.{" "}
        <GameButton
          name={"Play Again"}
          classType={"game-info__btn-primary"}
          action={action}
        />
      </div>
    </div>
  );
};

export default GameEndWrapper;
