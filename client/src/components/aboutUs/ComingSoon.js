import React, { Component } from "react";
import layovero from "../../../images/layovero.png";

class ComingSoon extends Component {
  render() {
    return (
      <div>
        <div className="coming">
          <div className="coming__header-1">Coming soon</div>
          <div className="coming__text-1">
            An app that will take your layover to the next level. The app will
            offer different types of layovers for your trip. It will also
            include offline maps with cleat directions in order for your to
            easily navigate in short period of time.
          </div>
          <div className="coming__header-2">Until then...</div>
          <div className="coming-text-2">
            LayoVero team will work with individual request not only for
            layovers, but also with personalized trips, help with tickets,
            bookings, etc. While the app is being developed our services are
            free (donations are welcomed, though!), so take this chance to use
            the help!
          </div>
          <div className="coming__button-box">
            <a href="#popup" className="coming__button-main">
              Email Us
            </a>
          </div>
        </div>
        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img
                className="navigation__logo"
                src={layovero}
                width="93"
                height="93"
              />
            </div>
            <div className="popup__right">
              <div className="popup__header">Send us an email!</div>
              <a href="#" className="popup__exit">
                &times;
              </a>
              <div className="popup__text">
                We are dedicated to making your trips unforgettable an as convenient as possible. If you have any
                questions or need help with a recent trip, please send us an
                email. We will respond within 24 hours.
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
      </div>
    );
  }
}

export default ComingSoon;
