import React, { Component } from "react";
import { connect } from "react-redux";
import { getReferralCode, sendEmails } from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";

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

  renderInvalidEmails = invalidEmails => {
    return invalidEmails.map(email => <div>{email}</div>);
  };

  render() {
    console.log(this.state);
    const { sendEmails } = this.props;
    const { emails } = this.state;
    const refCode = localStorage.getItem("referralCode");
    return (
      <div
        style={{
          marginTop: 13 + "rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
        className="referral"
      >
        <div>
          {this.state.invalidEmails ? (
            <div className="referral__email-errors">
              These emails are invalid:{" "}
              {this.renderInvalidEmails(this.state.invalidEmails)}
            </div>
          ) : null}

          <div style={{ fontSize: 6 + "rem", zIndex: 1, position: "relative" }}>
            Invite a friend
          </div>
        </div>

        <div
          style={{
            fontSize: 2.5 + "rem",
            width: 75 + "rem",
            textAlign: "center",
            margin: 6 + "rem",
            lineHeight: 4.2 + "rem"
          }}
        >
          Want more points? Invite a friend and get 50 points, because we're
          thankful that You let us grow! Oh, and your friend will get 25 points
          after registration with your link!
        </div>
        <div style={{ display: "flex" }}>
          <input
            style={{
              width: 40 + "rem",
              height: 4 + "rem",
              fontSize: 2 + "rem"
            }}
            type="text"
            onChange={event => this.setState({ emails: event.target.value })}
          />
          <button
            style={{
              width: 10 + "rem",
              height: 4.2 + "rem",
              fontSize: 2 + "rem",
              background: "#78B7CF",
              color: "#fff"
            }}
            onClick={() => {
              const result = this.emailValidation(this.state.emails);
              return result
                ? this.setState({ invalidEmails: result })
                : (sendEmails(emails.split(" "), refCode),
                  this.setState({ invalidEmails: "" }));
            }}
            disabled={this.state.emails ? false : true}
          >
            Send
          </button>
        </div>
        <div className="referral__options-wrap">
          <div className="referral__options-wrap__heading ">
            More ways to invite your friends
          </div>
          <div className="referral__options-wrap__button-wrap">
            <button className="referral__options-wrap__button">
              Copy link
            </button>
            <button className="referral__options-wrap__button">
              Share on Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { getReferralCode, sendEmails })(ReferralWrapper);
