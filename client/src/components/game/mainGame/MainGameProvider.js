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
    const getQuestions = this.props.getRoundQuestions(1);
  }

  // incrementCount = () => {
  //   this.setState(
  //     prevState => ({
  //       questCount: prevState.questCount + 1
  //     }),
  //     () => {
  //       functions.incrementLSCount("questCount");
  //       this.setState({ answered: false, choice: "" });
  //       this.resetAnswerCheck();
  //     }
  //   );
  // };

  checkIfAnswered = title => {
    return this.state.answered
      ? this.incrementCount()
      : this.setState({ choice: title });
  };

  changeToAnswered = () => {
    this.setState({ answered: true });
  };

  setResultState = () => {
    this.setState(functions.doResultIncrement);
  };

  resetAnswerCheck = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  getActions = () => {
    return {
      checkIfAnswered: this.checkIfAnswered,
      setResultState: this.setResultState,
      changeToAnswered: this.changeToAnswered
    };
  };

  resetState = () => {
    this.setState(this.initialState);
  };

  render() {
    const {
      questions,
      saveScore,
      children,
      incrementCount,
      questCount,
      correctAnswerAction,
      incorrectAnswerAction
    } = this.props;

    const gameProps = {
      state: this.state,
      checkIfAnswered: this.checkIfAnswered,
      props: {
        questions,
        saveScore,
        incrementCount,
        questCount,
        correctAnswerAction,
        incorrectAnswerAction
      },
      actions: this.getActions(),
      resetState: this.resetState
    };
    console.log("STATE", this.state);
    console.log("PROPS", this.props);
    return (
      <GameContext.Provider value={gameProps}>{children}</GameContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.game.questions,
    questCount: state.game.questCount
  };
};

export default connect(mapStateToProps, {
  getRoundQuestions,
  incrementCount,
  saveScore,
  correctAnswerAction,
  incorrectAnswerAction
})(MainGameProvider);
