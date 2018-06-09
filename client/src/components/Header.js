import React, { Component } from "react";
import layovero from "../../images/layovero.png";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <div className="navigation__burger" id="nav-toggle">
            <label for="nav-toggle" className="navigation__button">
              MENU
            </label>
            <div className="navigation__background">&nbsp;</div>
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
          </div>
        </div>
        <div className="header">
          <img src={layovero} width="102" height="93" />
          {/*<nav className="header__item signin">sign in</nav>

        <nav className="header__item signup">sign up</nav>*/}
        </div>
      </div>
    );
  }
}

export default Header;
