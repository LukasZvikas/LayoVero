import React, { Component } from "react";
import layovero from "../../images/layovero.png";
import { connect } from "react-redux";

class Header extends Component {
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
              <li className="navigation__item">About Us</li>
              <li className="navigation__item">Layovers</li>
              <li className="navigation__item">Contact Us</li>
              <li className="navigation__item">Blog</li>
              <li className="navigation__item">Sign Up</li>
              <li className="navigation__item">Sign In</li>
            </ul>
          </nav>

          {/*<nav className="header__item signin">sign in</nav>

        <nav className="header__item signup">sign up</nav>*/}
        </div>
      </div>
    );
  }
}

export default Header;
