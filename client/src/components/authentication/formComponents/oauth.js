import React from "react";
import { Facebook } from "../../svgIcons";
import google from "../../../../images/google.svg";

const Oauth = () => {
  return (
    <div className="auth-form__oauth-box">
      <div className="auth-form__google" style={{ backgroundColor: "#dd4b39" }}>
        <a href="/user/auth/google" className="auth-form__oauth-text">
          Login With Google
        </a>

        <img
          className="auth-form__oauth-logo"
          src={google}
          style={{ left: 1.2 + "rem" }}
        />
      </div>

      
      <div
        className="auth-form__facebook"
        style={{ backgroundColor: "#3b5998" }}
      >
        <div className="auth-form__oauth-text">Sign in with Facebook</div>

        <Facebook
          svgClass={"auth-form__oauth-logo"}
          height={2.4 + "rem"}
          width={2.4 + "rem"}
          fill={"#fff"}
        />
      </div>
    </div>
  );
};

export default Oauth;
