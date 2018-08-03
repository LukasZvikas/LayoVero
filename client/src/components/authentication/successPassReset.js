import React, { Component } from "react";
import check from "../../../images/check-circle.svg";
import layovero from "../../../images/layovero.png";
import { HideModal } from "../../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SuccessPassReset extends Component {
  render() {
    return (
      <div className="auth-form" style={{ width: 65 + "rem" }}>
        <div className="auth-form__vm-logo-box">
          <img src={layovero} className="auth-form__vm-logo" />
        </div>
        <div className="auth-form__vm-text-box">
          <div className="auth-form__vm-heading">Success!</div>
          <div className="auth-form__vm-text">
            Your password was reset successfully
          </div>
          <div className="auth-form__vm-logo-box">
            <img className="auth-form__vm-check" src={check} />
            <Link
              to="/about"
              className="auth-form__link auth-form__button"
              onClick={() => this.props.HideModal()}
            >
              OK
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { HideModal })(SuccessPassReset);
