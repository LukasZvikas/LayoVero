import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { emailField, passwordField } from "./formFields.js";
import { connect } from "react-redux";
import { SignUserIn, ShowForgotPassword } from "../../actions/authActions";
import { Modal } from "../Modal";

import fb from "../../../images/facebook.svg";
import google from "../../../images/google.svg";
import layovero from "../../../images/layovero.png";

class SignIn extends Component {
  onFormSubmit({ email, password }) {
    this.props.SignUserIn({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form
        className="auth-form"
        onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
      >
        <div className="auth-form__exit" onClick={this.props.hide}>
          &times;
        </div>
        <div className="auth-form__box">
          <div className="auth-form__logo">
            <img src={layovero} width="65" height="65" />
          </div>
          <div className="auth-form__heading">
            <div className="auth-form__heading-item in">Sign In</div>
            <span className="auth-form__heading-item or">or</span>
            <div className="auth-form__heading-item up"> Sign Up </div>
          </div>
          <div className="auth-form__field-wrapper">
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
            </div>
            <button className="auth-form__button" type="submit">
              Sign In
            </button>
            <div className="auth-form__cross-line">
              <span className="auth-form__cross-text">or</span>
            </div>
            <div className="auth-form__oauth-box">
              <div
                className="auth-form__google"
                style={{ backgroundColor: "#dd4b39" }}
              >
                <div className="auth-form__oauth-text">Sign in with Google</div>
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
                <div className="auth-form__oauth-text">
                  Sign in with Facebook
                </div>
                <img className="auth-form__oauth-logo" src={fb} />
              </div>
            </div>
            <div className="auth-form__new">Not a Member?</div>
            <div
              className="auth-form__new"
              onClick={() => this.props.ShowForgotPassword()}
            >
              Forgot Password?
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default reduxForm({
  form: "signInForm",
  fields: ["email", "password"]
})(connect(null, { SignUserIn, ShowForgotPassword })(SignIn));
