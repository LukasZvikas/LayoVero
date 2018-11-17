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

  modalRenderer = type => {
    let props = { type, container: null };
    switch (type) {
      case "signUp":
        props.container = <SignUp />;
        return this.getModal(props);
      case "signIn":
        props.container = <SignIn />;
        return this.getModal(props);
      case "emailVerification":
        props.container = <VerifyEmail />;
        return this.getModal(props);
      case "forgotPass":
        props.container = <ForgotPassword />;
        return this.getModal(props);
      case "resetPass":
        props.container = <ResetPassword />;
        return this.getModal(props);
      case "showResetSuccess":
        props.container = <SuccessPassReset />;
        return this.getModal(props);
      case "forgetPassSuccess":
        props.container = <ForgetPassSuccess />;
        return this.getModal(props);
      case "sendUsEmail":
        props.container = <EmailUs />;
        return this.getModal(props);
    }
  };

  getModal = props => {
    return (
      <ModalTemplate modalType={props.type} modalContainer={props.container} />
    );
  };

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
    const { auth } = this.props;
    console.log("AUTH", auth);
    return (
      <div>
        {this.renderContent()}
        {this.modalRenderer(auth.type)}
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
