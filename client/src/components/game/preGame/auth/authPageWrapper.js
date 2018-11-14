import React, { Component } from "react";
import { connect } from "react-redux";
import { askForName } from "../../../../actions/gameActions";
import { GameButton, Heading } from "../../customComps";

class AuthPageWrapper extends Component {
  render() {
    const { askForName } = this.props;
    return (
      <div className="game-info__main-wrap game-info__wrap-height">
        <Heading
          primaryText={"ARE YOU"}
          secondaryText={"READY"}
          tertiaryText={"TO..?"}
        />
        <GameButton name={"Sign Up"} classType={"game-info__btn-secondary"} />
        <GameButton name={"Sign In"} classType={"game-info__btn-secondary"} />
        <GameButton
          name={"Not yet"}
          classType={"game-info__btn-primary"}
          action={() => askForName()}
        />
      </div>
    );
  }
}

export default connect(null, { askForName })(AuthPageWrapper);
