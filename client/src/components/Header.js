import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="header__signin">sign in</nav>

        <nav className="header__signup">sign up</nav>
      </div>
    );
  }
}

export default Header;
