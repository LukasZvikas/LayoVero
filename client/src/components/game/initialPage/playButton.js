import React from "react";

const PlayButton = ({ action }) => {
  return (
    <button onClick={action} className="ip__play-button">
      Start
    </button>
  );
};

export default PlayButton;
