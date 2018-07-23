import React from "react";
import { Field } from "react-router-dom";
import { emailField, passwordField } from "./formFields";
import layovero from "../../../images/layovero.png";


export const signUpForm = () => {
  return (
    <div className="auth-form__box">
      <div className="auth-form__logo">
        <img src={layovero} width="65" height="65" />
      </div>
      <div className="auth-form__heading">
        <div className="auth-form__heading-item in">Sign In</div>
        <span className="auth-form__heading-item or">or</span>
        <div className="auth-form__heading-item up"> Sign Up </div>
      </div>
      <div className="auth-form__input-box">
        <Field
          key={"email"}
          type="text"
          label={"Email"}
          name={"email"}
          placehold={"Enter your email"}
          component={emailField}
        />

        <Field
          key={"password"}
          type="text"
          label={"Password"}
          name={"password"}
          placehold={"*******"}
          component={passwordField}
        />

        <Field
          key={"passwordConfirm"}
          type="text"
          label={"Confirm Password"}
          name={"passwordConfirm"}
          placehold={"*******"}
          component={passwordField}
        />
      </div>
      <button className="auth-form__button" type="submit">
        Sign Up
      </button>
      <div className="auth-form__legal">
        By clicking "Sign Up", you agree to Layovero's Terms of Use and
        acknowledge you have read the Privacy Policy.
      </div>
      <div className="auth-form__new">New Member?</div>
    </div>
  );
};
