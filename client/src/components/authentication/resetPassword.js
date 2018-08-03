import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { passwordField } from "./formfields";
import { connect } from "react-redux";
import { ResetPass, ShowResetComponent } from "../../actions/authActions";
import { Link, withRouter } from "react-router-dom";

import layovero from "../../../images/layovero.png";

class ResetPassword extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.ShowResetComponent();
  }

  onFormSubmit({ password }) {
    this.props.ResetPass({ password });
    this.props.history.push("/about");
  }

  render() {
    const {
      isResetShown,
      hide,
      handleSubmit,
      fields: { password },
      ResetPassword
    } = this.props;

    console.log("IS IT SHOWS", isResetShown);
    return (
      <div className="form-container">
        {isResetShown ? (
          <form
            className="auth-form"
            style={{ width: 65 + "rem" }}
            onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
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
                    name={"passwordConfirm"}
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
          <div className="auth-form" style={{ width: 65 + "rem" }}>
            <div className="auth-form__box reset-pass">
              <div className="auth-form__logo">
                <img src={layovero} width="65" height="65" />
              </div>
              <div className="auth-form__vm-text-box">
                <div className="auth-form__vm-heading">Invalid Link</div>
                <div className="auth-form__vm-text">
                  We are sorry, but this link to reset your password is either
                  wrong or expired.
                </div>
                <div
                  className="auth-form__vm-text"
                  style={{ textAlign: "center" }}
                >
                  Please try to request another password reset.
                </div>
              </div>
              <Link to="/about" className="auth-form__link auth-form__button">
                OK
              </Link>
            </div>
          </div>
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

export default withRouter(
  reduxForm({
    form: "resetPassword",
    fields: ["password"]
  })(connect(mapStateToProps, { ResetPass, ShowResetComponent })(ResetPassword))
);
