import React, { Component } from "react";
import { connect } from "react-redux";
import { askForName } from "../../../../actions/gameActions";
import { ShowSignUpModal } from "../../../../actions/authActions";
import { GameButton, Heading } from "../../customComps";
import { withRouter } from "react-router-dom";

class AuthPageWrapper extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    const { history } = this.props;
    this.checkIfAuth(token, history.push, "/plan");
    this.changeBackgroundColor();
  }

  changeBackgroundColor = () => {
    let el = document.getElementsByTagName("body")[0];
    el.style.backgroundColor = "#fff";
  };

  checkIfAuth = (token, push, to) => {
    if (token) push(to);
  };

  render() {
    const { askForName, ShowSignUpModal } = this.props;
    return (
      <div className="game-info__main-wrap game-info__wrap-height pre">
        <Heading
          primaryText={"ARE YOU"}
          secondaryText={"READY"}
          tertiaryText={"TO..?"}
        />
        <GameButton
          name={"Sign Up"}
          classType={"game-info__btn-secondary"}
          action={() => ShowSignUpModal()}
        />
        <GameButton name={"Sign In"} classType={"game-info__btn-secondary"} />
        <GameButton
          name={"Not yet"}
          classType={"button-primary"}
          action={() => askForName()}
          to={"/plan"}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(null, { askForName, ShowSignUpModal })(AuthPageWrapper)
);
