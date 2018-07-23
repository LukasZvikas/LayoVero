import React, { Component } from "react";
import layovero from "../../images/layovero.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import { Modal } from "./Modal";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { SignUpModal: false, SignInModal: false };
  }

  showModal(key) {
    switch (key) {
      case "signup":
        this.setState({ SignUpModal: true });
        break;
      case "signin":
        this.setState({ SignInModal: true });
        break;
      default:
        break;
    }
  }

  hideModal(key) {
    switch (key) {
      case "signup":
        this.setState({ SignUpModal: false });
      default:
        this.setState({ SignInModal: false });
    }
  }

  render() {
    console.log(this.state);
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

        {this.state.SignInModal ? (
          <Modal show={this.state.SignInModal}>
            <SignIn hide={() => this.hideModal("signin")} />
          </Modal>
        ) : (
          null
        )}

        {this.state.SignUpModal ? (
          <Modal show={this.state.SignUpModal}>
            <SignUp hide={() => this.hideModal("signup")} />
          </Modal>
        ) : (
          null
        )}
      </div>
    );
  }
}

export default Header;
