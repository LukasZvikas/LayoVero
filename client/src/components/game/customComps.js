import React from "react";

export const GameButton = ({ action, name, classType }) => {
  return (
    <button onClick={action} className={classType}>
      {name}
    </button>
  );
};

export const GameInput = ({ name, classType, placeholder, action }) => {
  return (
    <div className="game-info__input-error-wrap">
      <div className="game-info__input-error" />
      <input
        placeholder={placeholder}
        type="text"
        name={name}
        className={classType}
        onChange={action}
      />
    </div>
  );
};

export const Heading = ({ primaryText, secondaryText, tertiaryText }) => {
  return (
    <div className="game-info__secondary-heading">
      {primaryText}{" "}
      <span className="game-info__special-word">{secondaryText}</span>{" "}
      {tertiaryText}
    </div>
  );
};

export const ImageBox = ({ img, title, status, onClick }) => {
  const checkBoxStatus = status => {
    return status ? "game-info__image-wrap" : "game-info__image-wrap cs";
  };

  const checkTextStatus = status => {
    return status ? null : (
      <div className="game-info__image-main-text">COMING SOON </div>
    );
  };

  const checkImageOpacity = status => {
    return status ? "game-info__image" : "game-info__image blurred";
  };

  const onClickCheck = clickEvent => {
    return clickEvent ? clickEvent : console.log("no onclick");
  };
  console.log(onClick)
  return (
    <div>
      <div className={checkBoxStatus(status)} onClick={onClickCheck(onClick)}>
        <img src={img} className={checkImageOpacity(status)} />
        {checkTextStatus(status)}
      </div>
      <div className="game-info__image-main-title">{title}</div>
    </div>
  );
};
