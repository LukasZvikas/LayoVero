import React from "react";
import layovero from "../../../../images/layovero.png";

const Heading = ({ onClick1, onClick2, selectOrIdle }) => {
  return (
    <div>
      <div className="auth-form__logo">
        <img src={layovero} width="65" height="65" />
      </div>
      <div className="auth-form__heading">
        <div
          className={`auth-form__heading-item ${selectOrIdle.first}`}
          onClick={onClick1}
        >
          Sign In
        </div>
        <span className="auth-form__heading-item or">or</span>
        <div
          className={`auth-form__heading-item ${selectOrIdle.second}`}
          onClick={onClick2}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Heading;