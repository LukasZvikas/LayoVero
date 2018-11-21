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
          <Heading
            onClick2={() => ShowSignUpModal()}
            selectOrIdle={{ first: "selected", second: "idle" }}
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
            </div>
            <button className="auth-form__button" type="submit">
              Sign In
            </button>
            <div className="auth-form__cross-line">
              <span className="auth-form__cross-text">or</span>
            </div>
            <Oauth />
            <Footer
              text={"Not a member?"}
              onClick={() => this.props.ShowSignUpModal()}
            />
            <Footer
              text={"Forgot password?"}
              onClick={() => this.props.ShowForgotPassword()}
            />
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
