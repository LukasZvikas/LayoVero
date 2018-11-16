import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsWrapper from "./QuestionsWrapper";
import GameEndWrapper from "./GameEndWrapper";
import { getRoundQuestions } from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";
import * as functions from "./functions";

export class MainGameWrapper extends Component {
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

  render() {
    const { questionsFromReq } = this.props;
    const { questionsFromLS, questCount } = this.state;
    const questionsSource = questionsFromReq || questionsFromLS;
    const roundCounter = functions.getCountNumber("questCount", questCount);
    if (questionsSource) {
      if (questionsSource.length != roundCounter) {
        const titleItems = functions.getQuestTitle(
          questionsSource,
          functions.getCountNumber,
          this.state.questCount
        );
        return (
          <QuestionsWrapper
            LSQcount={localStorage.getItem("questCount")}
            incrementLSQCount={functions.incrementLSQuestCount}
            state={this.state}
            titleItems={titleItems}
            getRoundQuestions={functions.getRoundQuestions(
              questionsSource,
              functions.getCountNumber,
              functions.renderQuestions,
              this.state,
              functions.isCorrect,
              this.checkIfAnswered
            )}
            renderButtonType={functions.renderButtonType(
              this.state,
              questionsFromReq,
              this.setResultState,
              this.changeToAnswered,
              this.incrementCount
            )}
          />
        );
      }
      return (
        <GameEndWrapper
          LSResultCount={localStorage.getItem("resultCount")}
          action={() => {
            localStorage.clear();
            this.setState(this.initialState);
            window.location.reload();
          }}
        />
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = state => {
  return {
    questionsFromReq: state.game.questions
  };
};

export default connect(mapStateToProps, { getRoundQuestions })(MainGameWrapper);
