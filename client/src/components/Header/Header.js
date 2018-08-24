import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignUp from "../authentication/SignUp";
import SignIn from "../authentication/SignIn";
import VerifyEmail from "../authentication/verifyEmail";
import ForgotPassword from "../authentication/forgotPassword";
import ResetPassword from "../authentication/resetPassword";
import ForgetPassSuccess from "../authentication/forgetPassSuccess";
import SuccessPassReset from "../authentication/successPassReset";
import EmailUs from "../aboutUs/EmailUs";
import * as authActions from "../../actions/authActions";
import { Modal, ModalTemplate } from "../Modal";
import { Authenticated, NotAuthenticated } from "./authContainers";

class Header extends Component {
  showModal(key) {
    switch (key) {
      case "signup":
        this.props.ShowSignUpModal();
        break;
      case "signin":
        this.props.ShowSignInModal();
        break;
      default:
        break;
    }
  }

  renderContent() {
    switch (this.props.auth.authenticated) {
      case true:
        return <Authenticated />;

      default:
        return (
          <NotAuthenticated
            showSignUp={() => this.showModal("signup")}
            showSignIn={() => this.showModal("signin")}
          />
        );
    }
  }

  hideModal() {
    this.props.HideModal();
  }

  render() {
    if (
      window.location.pathname.match(
        /^\/reset\/[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
      )
    )
      return null;

    return (
      <div>
        {this.renderContent()}
        <ModalTemplate
          modalType={this.props.auth.signUp}
          modalContainer={<SignUp hide={() => this.hideModal()} />}
        />

        <ModalTemplate
          modalType={this.props.auth.signIn}
          modalContainer={<SignIn hide={() => this.hideModal()} />}
        />

        <ModalTemplate
          modalType={this.props.auth.emailVerification}
          modalContainer={<VerifyEmail hide={() => this.hideModal()} />}
        />

        <ModalTemplate
          modalType={this.props.auth.forgotPass}
          modalContainer={<ForgotPassword hide={() => this.hideModal()} />}
        />

        <ModalTemplate
          modalType={this.props.auth.resetPass}
          modalContainer={<ResetPassword hide={() => this.hideModal()} />}
        />

        <ModalTemplate
          modalType={this.props.auth.showResetSuccess}
          modalContainer={<SuccessPassReset hide={() => this.hideModal()} />}
        />

        <ModalTemplate
          modalType={this.props.auth.forgetPassSuccess}
          modalContainer={<ForgetPassSuccess hide={() => this.hideModal()} />}
        />
        <ModalTemplate
          modalType={this.props.auth.sendUsEmail}
          modalContainer={<EmailUs hide={() => this.hideModal()} />}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps, authActions)(Header));
