import React from "react";
import { Facebook, Google } from "../../svgIcons";
import google from "../../../../images/google.svg";

export const GoogleAuth = ({ buttonWidth }) => {
  return (
    <div
      className="auth-form__oauth__item auth-form__oauth__google"
      style={{ width: buttonWidth }}
    >
      <a href="/user/auth/google" className="auth-form__oauth__text-google">
        Google
      </a>
      <Google
        svgClass={"auth-form__oauth__logo"}
        height={2.4 + "rem"}
        width={2.4 + "rem"}
        fill={"#d34836"}
      />
    </div>
  );
};

export const FacebookAuth = ({ buttonWidth }) => {
  return (
    <div
      className="auth-form__oauth__item auth-form__oauth__facebook"
      style={{ width: buttonWidth }}
    >
      <div className="auth-form__oauth__text-facebook">Facebook</div>
      <Facebook
        svgClass={"auth-form__oauth__logo"}
        height={2.4 + "rem"}
        width={2.4 + "rem"}
        fill={"#3b5998"}
      />
    </div>
  );
};
