import React, { Component } from "react";
import layoveroFooter from "../../images/latestFooter.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="footer__img-main" src={layoveroFooter} />
      </div>
    );
  }
}

export default Footer;
