import React, { Component, createContext } from "react";
import { connect } from "react-redux";
import { getRoundQuestions, saveScore } from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";
import * as functions from "./functions";

export const GameContext = createContext();

export class MainGameProvider extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      questionsFromLS: null,
      questCount: 0,
      choice: "",
      answered: false,
      resultCount: 0
    };
    this.state = this.initialState;
  }
  //first check where to render data from. Make a request or just get it from localStorage.
  componentDidMount() {
    removeFooter();
    const getQuestions = this.props.getRoundQuestions;
    const { setQuestionState } = this;
    functions.getInitialQuestions(
      getQuestions,
      setQuestionState,
      functions.incrementLSCount
    );
  }

  setQuestionState = questions => {
    this.setState({ questionsFromLS: questions });
  };

  incrementCount = () => {
    this.setState(
      prevState => ({
        questCount: prevState.questCount + 1
      }),
      () => {
        functions.incrementLSCount("questCount");
        this.setState({ answered: false, choice: "" });
        this.resetAnswerCheck();
      }
    );
  };

  checkIfAnswered = title => {
    return this.state.answered
      ? this.incrementCount()
      : this.setState({ choice: title });
  };

  changeToAnswered = () => {
    this.setState({ answered: true });
  };

  doResultIncrement = prevState => ({
    resultCount: prevState.resultCount + 1
  });

  setResultState = () => {
    this.setState(this.doResultIncrement);
  };

  resetAnswerCheck = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  getActions = () => {
    return {
      checkIfAnswered: this.checkIfAnswered,
      setResultState: this.setResultState,
      changeToAnswered: this.changeToAnswered,
      incrementCount: this.incrementCount
    };
  };

  render() {
    const { questionsFromReq, saveScore, children } = this.props;
    const { questionsFromLS, questCount } = this.state;
    const questionsSource = questionsFromReq || questionsFromLS;
    const roundCounter = functions.getCountNumber("questCount", questCount);
   
    const gameProps = {
      questionsSource,
      state: this.state,
      checkIfAnswered: this.checkIfAnswered,
      props: { questionsFromReq, saveScore },
      actions: this.getActions(),
      resetState: () => {
        this.setState(this.initialState);
      },
      resultCount: this.state.resultCount
    };

    return (
      <GameContext.Provider value={gameProps}>{children}</GameContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionsFromReq: state.game.questions
  };
};

export default connect(mapStateToProps, { getRoundQuestions, saveScore })(
  MainGameProvider
);
