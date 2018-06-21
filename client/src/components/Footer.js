import React, { Component } from "react";
import layoveroFooter from "../../images/layovero-footer-L.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="footer__img-main" src={layoveroFooter} />
        <div className="footer__bottom">

        </div>
      </div>
    );
  }
}

export default Footer;
