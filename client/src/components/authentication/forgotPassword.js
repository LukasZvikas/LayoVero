import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { emailField } from "./formfields";
import { connect } from "react-redux";
import { SendForgotEmail } from "../../actions/authActions";

import layovero from "../../../images/layovero.png";

class ForgotPassword extends Component {
  onFormSubmit({ email }) {
    this.props.SendForgotEmail({ email });
  }

  render() {
    const { hide, handleSubmit, fields: { email } } = this.props;
    return (
      <form
        className="auth-form"
        style={{ width: 65 + "rem" }}
        onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
      >
        <div className="auth-form__exit" onClick={hide}>
          &times;
        </div>
        <div className="auth-form__box">
          <div className="auth-form__logo">
            <img src={layovero} width="65" height="65" />
          </div>
          <div className="auth-form__vm-text-box">
            <div className="auth-form__vm-heading">Forgot Password</div>
            <div className="auth-form__vm-text">
              We will send you an email with instructions on how to reset your
              password.
            </div>
          </div>
          <div className="auth-form__field-wrapper forgot">
            <div className="auth-form__input-box">
              <Field
                key={"email"}
                type="text"
                label={"Email"}
                name={"email"}
                placehold={"Enter your email"}
                component={emailField}
              />
            </div>
            <button className="auth-form__button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "forgotEmail",
  fields: ["email"]
})(connect(null, { SendForgotEmail })(ForgotPassword));
