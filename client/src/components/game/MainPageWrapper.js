import React, { Component } from "react";
import { connect } from "react-redux";
import { errorRenderer } from "./helperFunctions";
import * as actions from "../../actions/gameActions";

export class MainPageWrapper extends Component {
  state = { text: "" };

  buttonAction = action => {
    if (this.state.text === "") {
      errorRenderer("game-info__input-error", "Please fill up this field");
    } else {
      return action();
    }
  };

  setInputState = event => {
    this.setState({ text: event.target.value });
  };

  getActions = () => {
    return {
      buttonAction: this.buttonAction,
      setInputState: this.setInputState
    };
  };

  render() {
    const { children } = this.props;
    const { setInputState, buttonAction } = this.state;
    return children(this.getActions());
  }
}

export default MainPageWrapper;
