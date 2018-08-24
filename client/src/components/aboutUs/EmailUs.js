import React, { Component } from "react";
import layovero from "../../../images/layovero.png";
import { SendUsEmail } from "../../actions/authActions";
import { connect } from "react-redux";


class EmailUs extends Component {
  render() {
    return (

        <div className="popup">
          <div className="popup__box">
            <div className="popup__left">
              <img
                className="navigation__logo"
                src={layovero}
                width="93"
                height="93"
              />
            </div>
            <div className="popup__right">
              <div className="auth-form__exit" onClick={this.props.hide}>
                &times;
              </div>
              <div className="popup__header">Send us an email!</div>

              <div className="popup__text">
                We are dedicated to making your trips unforgettable an as
                convenient as possible. If you have any questions or need help
                with a recent trip, please send us an email. We will respond
                within 24 hours.
              </div>
              <div className="popup__form">
                <input className="popup__email" placeholder="Email" />
                <input className="popup__subject" placeholder="Subject" />
                <textarea className="popup__text-area" placeholder="Body" />
                <div className="coming__button-box">
                  <button className="coming__button-main">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    );
  }
}

export default EmailUs;