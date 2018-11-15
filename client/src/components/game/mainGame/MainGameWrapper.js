import React, { Component } from "react";
import { connect } from "react-redux";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import { getRoundQuestions } from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";
import QuestionCount from "./questionCount";

export const doResultIncrement = prevState => ({
  resultCount: prevState.resultCount + 1
});

class MainGameWrapper extends Component {
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
    const questions = this.props.getRoundQuestions;
    const { setQuestionState, incrementLSCount } = this;
    this.getInitialQuestions(questions, setQuestionState, incrementLSCount);
  }

  setQuestionState = questions => {
    this.setState({ questionsFromLS: questions });
  };

  getInitialQuestions = (action, setQState, incrementLSCount) => {
    let LSquestions = localStorage.getItem("questions");
    let LSresultCount = localStorage.getItem("resultCount");
    let LSquestCount = localStorage.getItem("questCount");
    let LSquestCountHelp = localStorage.getItem("questCountHelp");

    if (LSquestions === null) {
      action(1);
      localStorage.setItem("questCount", 0);
      localStorage.setItem("resultCount", 0);
      localStorage.setItem("questCountHelp", 0);
    } else {
      //added LSquestCountHelp to make sure that if the question is answered and page is refreshed, it shows a new question, instead of the one answered
      if (LSquestCount !== LSquestCountHelp) {
        this.incrementLSCount("questCount");
      }
    }
    let parsedLSQuestions = JSON.parse(LSquestions);
    setQState(parsedLSQuestions);
  };

  isCorrect = (title, correctAnswer) => {
    if (title === correctAnswer) return true;
    return false;
  };
  // render a set of 4 questions everytime.
  renderQuestions = (questArray, correctAnswer, state, isCorrect) => {
    console.log("Q", questArray);
    let answersArr = questArray.answers;
    return answersArr.map(item => {
      return (
        <Question
          title={item.title}
          onClick={() =>
            this.state.answered
              ? this.incrementCount()
              : this.setState({ choice: item.title })
          }
          image={item.image}
          choice={state.choice}
          isCorrect={isCorrect(item.title, correctAnswer)}
          isAnswered={state.answered}
        />
      );
    });
  };

  incrementLSCount = key => {
    let storage = localStorage.getItem(key);

    if (!storage) {
      localStorage.setItem(key, 1);
    } else {
      let parsedStorage = JSON.parse(storage);
      parsedStorage++;
      let stringStorage = JSON.stringify(parsedStorage);
      localStorage.setItem(key, stringStorage);
      return parsedStorage;
    }
  };

  incrementCount = () => {
    this.setState(
      prevState => ({
        questCount: prevState.questCount + 1
      }),
      () => {
        this.incrementLSCount("questCount");
        this.setState({ answered: false, choice: "" });
        this.resetAnswerCheck();
      }
    );
  };

  buttonStateCheck = state => {
    if (state === "") return true;
    return false;
  };

  changeToAnswered = () => {
    this.setState({ answered: true });
  };

  setResultState = () => {
    this.setState(doResultIncrement);
  };

  answerHandler = (isCorrect, setResultState, incrementLSCount) => {
    return isCorrect
      ? (setResultState(),
        incrementLSCount("resultCount"),
        incrementLSCount("questCountHelp"))
      : incrementLSCount("questCountHelp");
  };

  renderButtonType = state => {
    let isMatch = this.getCountNumber("questCount", state.questCount);
    if (state.answered === false)
      return (
        <GameButton
          name={"Check answer"}
          classType={"game-info__btn-primary"}
          action={() => {
            let isCorrect = this.checkIfCorrect(
              state.choice,
              state.questionsFromLS,
              this.props.questionsFromReq,
              this.getCountNumber,
              state.questCount
            );
            this.answerHandler(
              isCorrect,
              this.setResultState,
              this.incrementLSCount
            );
            this.changeToAnswered();
          }}
          isDisabled={this.buttonStateCheck(state.choice)}
        />
      );
    return (
      <GameButton
        name={"Next question"}
        classType={"game-info__btn-primary"}
        action={() => this.incrementCount()}
        isDisabled={this.buttonStateCheck(state.choice)}
      />
    );
  };
  // check if there are more questions, call renderQuestions if there are, otherwise return stub.
  getRoundQuestions = (
    arr,
    getCountNumber,
    renderQuestions,
    state,
    isCorrect
  ) => {
    let roundCounter = getCountNumber("questCount", state.questCount);
    let currentQuest = arr[roundCounter];
    return renderQuestions(
      currentQuest,
      arr[roundCounter].correct_answer,
      state,
      isCorrect
    );
  };

  getQuestTitle = (arr, getCountNumber, questCount) => {
    let roundCounter = getCountNumber("questCount", questCount);
    const getCurrentQuests = arr[roundCounter];
    const primary = getCurrentQuests.primaryText;
    const special = getCurrentQuests.specialWord;
    return { primary, special };
  };

  resetAnswerCheck = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  getCountNumber = (key, questCount) => {
    //checks if localStorage's and state's questCount's match
    let storage = localStorage.getItem(key);
    if (questCount !== storage && storage !== null) return storage;
    return questCount;
  };

  checkIfCorrect = (
    choice,
    dataFromLS,
    dataFromReq,
    getCountNumber,
    questCount
  ) => {
    let roundCounter = getCountNumber("questCount", questCount);
    let whichAvailable = dataFromLS || dataFromReq;
    if (choice === whichAvailable[roundCounter].correct_answer) return true;
    return false;
  };

  incrementLSQuestCount = () => {
    let storage = localStorage.getItem("questCount");
    let parsedStorage = JSON.parse(storage);
    parsedStorage++;
    return parsedStorage;
  };

  render() {
    const { questionsFromReq } = this.props;
    const { questionsFromLS, questCount } = this.state;
    const questionsSource = questionsFromReq || questionsFromLS;
    const roundCounter = this.getCountNumber("questCount", questCount);
    if (questionsSource) {
      if (questionsSource.length != roundCounter) {
        const titleItems = this.getQuestTitle(
          questionsSource,
          this.getCountNumber,
          this.state.questCount
        );
        return (
          <div className="game-info">
            <QuestionCount
              LSQcount={localStorage.getItem("questCount")}
              action={this.incrementLSQuestCount}
              stateQCount={this.state.count}
            />
            <div className="game-info__main-wrap">
              <Heading
                primaryText={titleItems.primary}
                secondaryText={titleItems.special}
                tertiaryText={"?"}
              />
              <div class="game-info__image-box-wrap-main">
                {this.getRoundQuestions(
                  questionsSource,
                  this.getCountNumber,
                  this.renderQuestions,
                  this.state,
                  this.isCorrect
                )}
              </div>
              {this.renderButtonType(this.state)}
            </div>
          </div>
        );
      }
      return (
        <div className="game-info">
          <div className="game-info__end-wrap">
            Congratulations, you finished the Quiz! You earned{" "}
            {localStorage.getItem("resultCount")} points.{" "}
            <GameButton
              name={"Play Again"}
              classType={"game-info__btn-primary"}
              action={() => {
                localStorage.clear();
                this.setState(this.initialState);
                window.location.reload();
              }}
            />
          </div>
        </div>
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
