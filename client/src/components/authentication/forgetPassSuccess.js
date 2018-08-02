import React, { Component } from "react";
import check from "../../../images/check-circle.svg";
import layovero from "../../../images/layovero.png";
import { HideModal } from "../../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ForgetPassSuccess extends Component {
  render() {
    return (
      <div className="auth-form" style={{ width: 65 + "rem" }}>
        <div className="auth-form__vm-logo-box">
          <img src={layovero} className="auth-form__vm-logo" />
        </div>
        <div className="auth-form__vm-text-box">
          <div className="auth-form__vm-heading">Email sent!</div>
          <div className="auth-form__vm-text">
            Password reset instructions have been sent to your email address.
          </div>
          <div className="auth-form__vm-logo-box">
            <img className="auth-form__vm-check" src={check} />
            <button
              className="auth-form__button"
              style={{ margin: 2 + "rem" }}
              onClick={() => this.props.HideModal()}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { HideModal })(ForgetPassSuccess);
