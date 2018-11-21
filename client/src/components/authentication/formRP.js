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

import Heading from "./formComponents/heading";
import Oauth from "./formComponents/oauth";
import Footer from "./formComponents/footer";

class FormRP extends Component {
  onFormSubmit({ email, password }) {
    this.props.SignUserIn({ email, password });
    this.props.history.push("/");
  }

  fieldRenderer = fields => {
    const result = fields.map(field => {});
  };

  hideModal() {
    this.props.HideModal();
  }

  getActions = () => {
    return {
      SignUserIn: this.props.SignUserIn,
      ShowForgotPassword: this.props.ShowForgotPassword,
      ShowSignUpModal: this.props.ShowSignUpModal,
      onFormSubmit: this.onFormSubmit,
      hideModal: this.hideModal
    };
  };

  render() {
    const {
      handleSubmit,
      fields: { email, password },
      ShowSignUpModal,
      children
    } = this.props;

    console.log(children);

    return children(this.getActions(), fields);
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


 <div className="auth-form__logo">
            <img src={layovero} width="65" height="65" />
          </div>
          <div className="auth-form__heading">
            <div
              className="auth-form__heading-item idle"
              onClick={() => ShowSignInModal()}
            >
              Sign In
            </div>
            <span className="auth-form__heading-item or">or</span>
            <div className="auth-form__heading-item selected"> Sign Up </div>
          </div>








