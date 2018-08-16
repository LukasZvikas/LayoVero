import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { emailField, passwordField } from "./formFields.js";
import { connect } from "react-redux";
import {
  SignUserIn,
  SignInWithGoogle,
  ShowForgotPassword,
  ShowSignUpModal
} from "../../actions/authActions";
import { Modal } from "../Modal";
import { Link, withRouter } from "react-router-dom";

import fb from "../../../images/facebook.svg";
import google from "../../../images/google.svg";
import layovero from "../../../images/layovero.png";
import { Facebook } from "../svgIcons";

class SignIn extends Component {
  onFormSubmit({ email, password }) {
    this.props.SignUserIn({ email, password });
    this.props.history.push("/");
  }

  render() {
    const {
      handleSubmit,
      fields: { email, password },
      ShowSignUpModal
    } = this.props;

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
            <div className="auth-form__heading-item selected">Sign In</div>
            <span className="auth-form__heading-item or">or</span>
            <div
              className="auth-form__heading-item idle"
              onClick={() => ShowSignUpModal()}
            >
              Sign Up
            </div>
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
                <div className="auth-form__oauth-text">
                  Sign in with Facebook
                </div>

                <Facebook
                  svgClass={"auth-form__oauth-logo"}
                  height={2.4 + "rem"}
                  width={2.4 + "rem"}
                  fill={"#fff"}
                />
              </div>
            </div>
            <div className="auth-form__new-forgot">Not a Member?</div>
            <div
              className="auth-form__new-forgot"
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
export default withRouter(
  reduxForm({
    form: "signInForm",
    fields: ["email", "password"]
  })(
    connect(null, {
      SignUserIn,
      SignInWithGoogle,
      ShowForgotPassword,
      ShowSignUpModal
    })(SignIn)
  )
);
