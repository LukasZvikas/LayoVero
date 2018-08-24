import React, { Component } from "react";
import layovero from "../../../images/layovero.png";
import { SendUsEmail } from "../../actions/authActions";
import { connect } from "react-redux";
import { Modal, ModalTemplate } from "../Modal";

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
            <div
              className="coming__button-main"
              onClick={() => this.props.SendUsEmail()}
            >
              Email Us
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default connect(null, { SendUsEmail })(ComingSoon);
