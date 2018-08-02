import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { passwordField } from "./formfields";
import { connect } from "react-redux";
import { SendForgotEmail, ShowResetComponent } from "../../actions/authActions";

import layovero from "../../../images/layovero.png";

class ResetPassword extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.ShowResetComponent();
  }



  onFormSubmit({ password }) {}

  render() {
    const {
      isResetShown,
      hide,
      handleSubmit,
      fields: { password }
    } = this.props;

    console.log("IS IT SHOWS", isResetShown);
    return (
      <div className="form-container">
        {isResetShown ? (
          <form
            className="auth-form"
            style={{ height: 53 + "rem", width: 65 + "rem" }}
          >
            <div className="auth-form__box reset-pass">
              <div className="auth-form__logo">
                <img src={layovero} width="65" height="65" />
              </div>
              <div className="auth-form__vm-text-box">
                <div className="auth-form__vm-heading">Reset Password</div>
                <div className="auth-form__vm-text">
                  Create a new password and continue using Layovero again!
                </div>
              </div>
              <div className="auth-form__field-wrapper forgot">
                <div className="auth-form__input-box">
                  <Field
                    key={"password"}
                    type="text"
                    label={"New Password"}
                    name={"password"}
                    placehold={"New password"}
                    component={passwordField}
                  />
                  <Field
                    key={"password"}
                    type="text"
                    label={"Confirm Password"}
                    name={"password"}
                    placehold={"Confirm password"}
                    component={passwordField}
                  />
                </div>
                <button className="auth-form__button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div>Wrong token</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    isResetShown: state.auth.showReset
  };
};

export default reduxForm({
  form: "resetPassword",
  fields: ["password"]
})(
  connect(mapStateToProps, { SendForgotEmail, ShowResetComponent })(
    ResetPassword
  )
);
