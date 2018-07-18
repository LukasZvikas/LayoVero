import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { emailField, passwordField } from "./formFields.js";
import { connect } from "react-redux";
import { SignUserUp } from "../../actions/authActions";

class SignUp extends Component {
  onFormSubmit({ email, password }) {
    console.log("HERE", { email, password });
    this.props.SignUserUp({ email, password });
  }

  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm }
    } = this.props;

    return (
      <div className="form-container" style={{ margin: 14 + "rem" }}>
        This is SignUp
        <form
          className="auth-form"
          onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
        >
          <div className="auth-form__left" />

          <div className="auth-form__right">
            <div>Sign In</div>
            <span>or</span>
            <div> SignUp </div>
            <Field
              key={"email"}
              type="text"
              label={"Enter Email"}
              name={"email"}
              component={emailField}
            />

            <Field
              key={"password"}
              type="text"
              label={"Enter Password"}
              name={"password"}
              component={passwordField}
            />

            <Field
              key={"passwordConfirm"}
              type="text"
              label={"Confirm Password"}
              name={"passwordConfirm"}
              component={passwordField}
            />
            <button className="auth-form__button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "signUpForm",
  fields: ["email", "password", "passwordConfirm"]
})(connect(null, { SignUserUp })(SignUp));
