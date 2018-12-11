import React, { Component } from "react";
import { connect } from "react-redux";
import { getReferralCode, sendEmails } from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";
import {
  GoogleAuth,
  FacebookAuth
} from "../../authentication/formComponents/oauth";

const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class ReferralWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { emails: "", copy: "", invalidEmails: "" };
  }
  componentDidMount() {
    removeFooter();
    const userToken = localStorage.getItem("token");
    const refCode = this.props.getReferralCode(userToken);
  }

  emailValidation = emailArr => {
    const invalidEmails = emailArr
      .split(/[ ,]+/)
      .map(email => email.trim())
      .filter(email => regex.test(email) === false);
    if (invalidEmails.length) {
      return invalidEmails;
    }

    return false;
  };

  emailChecker = ({ invalidEmails, refCode, emails, sendEmails }) => {
    return invalidEmails
      ? this.setState({ invalidEmails })
      : (this.props.sendEmails(emails.split(" "), refCode),
        this.setState({ invalidEmails: "" }));
  };

  renderInvalidEmails = invalidEmails => {
    return invalidEmails.map(email => <div>{email}</div>);
  };

  renderErrors = invalidEmails => {
    console.log("invalid",invalidEmails)
    return invalidEmails ? (
      <div className="referral__email-errors">
        These emails are invalid: {this.renderInvalidEmails(invalidEmails)}
      </div>
    ) : null;
  };

  render() {
    console.log(this.state);
    const { sendEmails } = this.props;
    const { emails, invalidEmails } = this.state;
    const refCode = localStorage.getItem("referralCode");
    return (
      <div className="referral">
        <div>
          {this.renderErrors(invalidEmails)}
          <div
            className="game-info__secondary-heading"
            style={{ zIndex: 1, position: "relative" }}
          >
            INVITE A FRIEND
          </div>
        </div>

        <div className="game-info__tertiary-heading">
          Want more points? Invite a friend and get 50 points, because we're
          thankful that You let us grow! Oh, and your friend will get 25 points
          after registration with your link!
        </div>
        <div className="referral__input-wrap">
          <input
            className="referral__input"
            type="text"
            onChange={event => this.setState({ emails: event.target.value })}
          />
          <button
            className="referral__button"
            onClick={() => {
              const invalidEmails = this.emailValidation(this.state.emails);
              this.emailChecker({ invalidEmails, emails, sendEmails, refCode });
            }}
            disabled={this.state.emails ? false : true}
          >
            Send
          </button>
        </div>
        <div className="referral__options-wrap">
          <div className="referral__heading ">
            More ways to invite your friends
          </div>
          <div className="referral__button-wrap">
            <div style={{ width: 25 + "%" }}>
              <button className="referral__link">Copy link</button>
            </div>
            <FacebookAuth buttonWidth={25 + "%"} />
            <GoogleAuth buttonWidth={25 + "%"} />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { getReferralCode, sendEmails })(ReferralWrapper);
