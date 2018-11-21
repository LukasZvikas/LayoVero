import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { emailField, passwordField } from "./formFields.js";
import { connect } from "react-redux";
import {
  SignUserUp,
  ShowSignInModal,
  HideModal
} from "../../actions/authActions";
import { Modal } from "../Modal";

import Heading from "./formComponents/heading";
import Footer from "./formComponents/footer";

class SignUp extends Component {
  onFormSubmit({ email, password }) {
    this.props.SignUserUp({ email, password });
  }

  hideModal() {
    this.props.HideModal();
  }

  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm },
      ShowSignInModal,
      HideModal
    } = this.props;

    return (
      <form
        className="auth-form"
        onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
      >
        <div className="auth-form__exit" onClick={() => HideModal()}>
          &times;
        </div>
        <div className="auth-form__box">
          <Heading
            onClick1={() => ShowSignInModal()}
            selectOrIdle={{ first: "idle", second: "selected" }}
          />
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
            <Footer
              text={"Already a member?"}
              onClick={() => this.props.ShowSignInModal()}
            />
          </div>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email";
  }

  if (!values.password) {
    errors.password = "Please enter a password";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Plase enter a password confirmation";
  }

  if (values.password != values.passwordConfirm) {
    errors.passwordConfirm = "Both passwords must match";
  }
  return errors;
};

export default reduxForm({
  form: "signUpForm",
  fields: ["email", "password", "passwordConfirm"],
  validate
})(connect(null, { SignUserUp, ShowSignInModal, HideModal })(SignUp));
