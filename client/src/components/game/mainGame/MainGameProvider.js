import React, { Component, createContext } from "react";
import { connect } from "react-redux";
import {
  getRoundQuestions,
  saveScore,
  incrementCount,
  correctAnswerAction,
  incorrectAnswerAction
} from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";
import * as functions from "./functions";

export const GameContext = createContext();

export class MainGameProvider extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      choice: "",
      answered: false,
      resultCount: 0
    };
    this.state = this.initialState;
  }
  //first check where to render data from. Make a request or just get it from localStorage.
  componentDidMount() {
    removeFooter();
    if (this.props.game.questCount !== this.props.game.questCountHelp) {
      this.props.incrementCount();
    }
    const getQuestions = this.props.getRoundQuestions(1);
  }

  resetChoice = () => {
    this.setState({ answered: false, choice: "" });
    this.resetAnswerCheck();
  };

  checkIfAnswered = title => {
    return this.state.answered
      ? this.incrementCount()
      : this.setState({ choice: title });
  };

  changeToAnswered = () => {
    this.setState({ answered: true });
  };

  resetAnswerCheck = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  getActions = () => {
    return {
      checkIfAnswered: this.checkIfAnswered,
      changeToAnswered: this.changeToAnswered,
      resetChoice: this.resetChoice
    };
  };

  render() {
    const {
      game,
      saveScore,
      children,
      incrementCount,
      correctAnswerAction,
      incorrectAnswerAction
    } = this.props;

    const gameProps = {
      state: this.state,
      checkIfAnswered: this.checkIfAnswered,
      props: {
        game,
        saveScore,
        incrementCount,
        correctAnswerAction,
        incorrectAnswerAction
      },
      actions: this.getActions()
    };
    return (
      <GameContext.Provider value={gameProps}>{children}</GameContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
};

export default connect(mapStateToProps, {
  getRoundQuestions,
  incrementCount,
  saveScore,
  correctAnswerAction,
  incorrectAnswerAction
})(MainGameProvider);
