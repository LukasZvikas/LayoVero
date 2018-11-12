import React from "react";
import { Link } from "react-router-dom";

export const GameButton = ({ action, name, classType, isDisabled }) => {
  console.log("ISIT", isDisabled);
  return (
    <button onClick={action} className={classType} disabled={isDisabled}>
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
      <span className="game-info__special-word">{secondaryText}</span>
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

  const mainStructure = () => {
    return (
      <div>
        <div className={checkBoxStatus(status)}>
          <img src={img} className={checkImageOpacity(status)} />
          {checkTextStatus(status)}
        </div>
        <div className="game-info__image-main-title">{title}</div>
      </div>
    );
  };
  return status ? (
    <Link to="/round/1">{mainStructure()}</Link>
  ) : (
    mainStructure()
  );
};
