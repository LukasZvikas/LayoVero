import React, { Component } from "react";
import { connect } from "react-redux";
import { getReferralCode, sendEmails } from "../../../actions/gameActions";

const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class ReferralWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { emails: "", copy: "", invalidEmails: "" };
  }
  componentDidMount() {
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
          marginTop: 20 + "rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ fontSize: 6 + "rem" }}>This is a Refferal Program</div>

        <div>
          {this.state.invalidEmails ? (
            <div>
              These emails are invalid:{" "}
              {this.renderInvalidEmails(this.state.invalidEmails)}
            </div>
          ) : null}
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
              height: 4 + "rem",
              fontSize: 2 + "rem"
            }}
            onClick={() => {
              const result = this.emailValidation(this.state.emails);
              return result
                ? this.setState({ invalidEmails: result })
                : sendEmails(emails.split(" "), refCode);
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
export default connect(null, { getReferralCode, sendEmails })(ReferralWrapper);
