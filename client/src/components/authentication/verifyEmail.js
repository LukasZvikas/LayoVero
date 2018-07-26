import React, { Component } from "react";
import check from "../../../images/check-circle.svg";
import layovero from "../../../images/layovero.png";
import { ShowSignInModal } from "../../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class VerifyEmail extends Component {
  render() {
    return (
      <div
        className="auth-form"
        style={{ height: 40 + "rem", width: 65 + "rem" }}
      >
        <div className="auth-form__vm-logo-box">
          <img src={layovero} className="auth-form__vm-logo" />
        </div>
        <div className="auth-form__vm-text-box">
          <div className="auth-form__vm-heading">Thanks For Signing Up!</div>
          <div className="auth-form__vm-text">
            Please check your email and click on the confirmation link that was
            just sent to email
          </div>
          <div className="auth-form__vm-text">
            Once your account is activated you will be able to sign in and plan
            your future layovers!
          </div>
          <div className="auth-form__vm-logo-box">
            <img className="auth-form__vm-check" src={check} />
            <button
              className="auth-form__button"
              style={{ margin: 2 + "rem" }}
              onClick={() => this.props.ShowSignInModal()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { ShowSignInModal })(VerifyEmail);
