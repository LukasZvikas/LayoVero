import React from "react";

export const emailField = ({ input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form__wrapper">
      <label className="auth-form__item">{label}</label>
      <input className="auth-form__item" {...input} />
      <div className="auth-form__error"> {touched && error} </div>
    </div>
  );
};

export const passwordField = ({ input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form__wrapper">
      <label className="auth-form__item">{label}</label>
      <input className="auth-form__item" {...input} />
      <div className="auth-form__error"> {touched && error} </div>
    </div>
  );
};
