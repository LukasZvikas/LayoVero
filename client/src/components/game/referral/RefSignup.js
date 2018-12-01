import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { emailField, passwordField } from "../../authentication/formFields.js";
import { connect } from "react-redux";
import { removeFooter } from "../helperFunctions";
import { SignUserUp } from "../../../actions/authActions";

class RefSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    removeFooter();
  }

  onFormSubmit({ email, password }) {
    const refCode = localStorage.getItem("referralCode");
    console.log("REFFF", refCode);
    this.props.SignUserUp({ email, password, refCode });
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          /* margin: 13rem 0 0 0; */
          height: 100 + "vh"
        }}
      >
        <form
          className="auth-form"
          style={{ height: 60 + "%" }}
          onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
        >
          <div className="auth-form__box">
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "refSignUp",
  fields: ["email", "password", "passwordConfirm"]
})(connect(null, { SignUserUp })(RefSignup));
