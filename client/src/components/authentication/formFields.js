import React from "react";

export const emailField = ({ placehold, input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form__wrapper">
      <label className="auth-form__item label">{label}</label>
      <input className="auth-form__item input" {...input} placeholder={placehold} />
      <div className="auth-form__error"> {touched && error} </div>
    </div>
  );
};

export const passwordField = ({ placehold, input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form__wrapper">
      <label className="auth-form__item label">{label}</label>
      <input className="auth-form__item input" {...input} placeholder={placehold} />
      <div className="auth-form__error"> {touched && error} </div>
    </div>
  );
};


