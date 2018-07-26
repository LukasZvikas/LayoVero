import React, { Component } from "react";
import layovero from "../../images/layovero.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import VerifyEmail from "./authentication/verifyEmail";
import * as authActions from "../actions/authActions";
import { Modal } from "./Modal";

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

  hideModal() {
    console.log("hide");
    this.props.HideModal();
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <div style={{ width: "100%" }}>
            <img
              className="navigation__logo"
              src={layovero}
              width="53"
              height="53"
            />
          </div>
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="nav-toggle"
          />

          <label for="nav-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          {/*<div className="navigation__background">&nbsp;</div>*/}
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <Link className="navigation__item" to="/about">
                About Us
              </Link>
              <li className="navigation__item">Layovers</li>
              <li className="navigation__item">Contact Us</li>
              <li className="navigation__item">Blog</li>
              <div
                className="navigation__item"
                onClick={() => this.showModal("signup")}
              >
                Sign Up
              </div>
              <div
                className="navigation__item"
                onClick={() => this.showModal("signin")}
              >
                Sign In
              </div>
            </ul>
          </nav>
        </div>

        {this.props.auth.signIn ? (
          <Modal show={this.props.auth.signIn}>
            <SignIn hide={() => this.hideModal()} />
          </Modal>
        ) : null}

        {this.props.auth.emailVerification ? (
          <Modal show={this.props.auth.emailVerification}>
            <VerifyEmail />
          </Modal>
        ) : null}

        {this.props.auth.signUp ? (
          <Modal show={this.props.auth.signUp}>
            <SignUp hide={() => this.hideModal()} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, authActions)(Header);
