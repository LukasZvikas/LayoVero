import React, { Component } from "react";
import { connect } from "react-redux";
import { getRefferalCode } from "../../../actions/gameActions";
class RefferalWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { refCode: "", copy: "" };
  }
  componentDidMount() {
    const userToken = localStorage.getItem("token");
    const refCode = this.props.getRefferalCode(userToken);
  }

  copyToClipboard = e => {
    this.input.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };
  render() {
    console.log(this.state);
    const getRefCode = localStorage.getItem("refferalCode");
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
        <input
          style={{ width: 40 + "rem", height: 4 + "rem", fontSize: 2 + "rem" }}
          type="text"
          value={`http://localhost:8080/${getRefCode}`}
          ref={input => (this.input = input)}
        />
        {document.queryCommandSupported("copy") && (
          <div>
            <button onClick={this.copyToClipboard}>Copy</button>
            {this.state.copySuccess}
          </div>
        )}
      </div>
    );
  }
}
export default connect(null, { getRefferalCode })(RefferalWrapper);
