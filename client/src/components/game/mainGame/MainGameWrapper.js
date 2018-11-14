import React, { Component } from "react";
import { connect } from "react-redux";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import { getRoundQuestions } from "../../../actions/gameActions";
import { removeFooter } from "../helperFunctions";

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
  getInitialQuestions = () => {
    let LSquestions = localStorage.getItem("questions");
    let LSresultCount = localStorage.getItem("resultCount");
    let LSquestCount = localStorage.getItem("questCount");
    let LSquestCountHelp = localStorage.getItem("questCountHelp");

    if (LSquestions === null) {
      this.props.getRoundQuestions(1);
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
    this.setState({ questionsFromLS: parsedLSQuestions });
  };

  //first check where to render data from. Make a request or just get it from localStorage.
  componentDidMount() {
    removeFooter();
    this.getInitialQuestions();
  }

  isCorrect = (title, correctAnswer) => {
    if (title === correctAnswer) return true;
    return false;
  };
  // render a set of 4 questions everytime.
  renderQuestions = (questArray, correctAnswer) => {
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
          choice={this.state.choice}
          isCorrect={this.isCorrect(item.title, correctAnswer)}
          isAnswered={this.state.answered}
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

  answerHandler = isCorrect => {
    return isCorrect
      ? this.setState(
          prevState => ({
            resultCount: prevState.resultCount + 1
          }),
          () => {
            this.incrementLSCount("resultCount");
            this.incrementLSCount("questCountHelp");
          }
        )
      : this.incrementLSCount("questCountHelp");
  };

  renderButtonType = state => {
    let isMatch = this.checkCountMatch("questCount");
    if (state === false)
      return (
        <GameButton
          name={"Check answer"}
          classType={"game-info__btn-primary"}
          action={() => {
            let isCorrect = this.checkIfCorrect(
              this.state.choice,
              this.state.questionsFromLS,
              this.props.questionsFromReq
            );
            this.answerHandler(isCorrect);
            this.changeToAnswered();
          }}
          isDisabled={this.buttonStateCheck(this.state.choice)}
        />
      );
    return (
      <GameButton
        name={"Next question"}
        classType={"game-info__btn-primary"}
        action={() => this.incrementCount()}
        isDisabled={this.buttonStateCheck(this.state.choice)}
      />
    );
  };

  // check if there are more questions, call renderQuestions if there are, otherwise return stub.
  getRoundQuestions = arr => {
    let roundCounter = this.checkCountMatch("questCount");
    let currentQuest = arr[roundCounter];
    return this.renderQuestions(currentQuest, arr[roundCounter].correct_answer);
  };

  getQuestTitle = arr => {
    let roundCounter = this.checkCountMatch("questCount");
    const getCurrentQuests = arr[roundCounter];
    const primary = getCurrentQuests.primaryText;
    const special = getCurrentQuests.specialWord;
    return { primary, special };
  };

  resetAnswerCheck = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  checkCountMatch = key => {
    //checks if localStorage's and state's questCount's match
    let storage = localStorage.getItem(key);
    const { questCount } = this.state;
    if (questCount !== storage && storage !== null) return storage;
    return questCount;
  };

  checkIfCorrect = (choice, dataFromLS, dataFromReq) => {
    let roundCounter = this.checkCountMatch("questCount");
    let whichAvailable = dataFromLS || dataFromReq;
    if (choice === whichAvailable[roundCounter].correct_answer) return true;
    return false;
  };

  incrementedQuestCount = () => {
    let storage = localStorage.getItem("questCount");
    let parsedStorage = JSON.parse(storage);
    parsedStorage++;
    return parsedStorage;
  };

  resetGame = () => {
    localStorage.removeItem("resultCount");
    localStorage.removeItem("questCount");
    localStorage.removeItem("questions");
    localStorage.removeItem("questCountHelp");
  };

  render() {
    const { questionsFromReq } = this.props;
    const { questionsFromLS } = this.state;
    const questionsSource = questionsFromReq || questionsFromLS;
    const roundCounter = this.checkCountMatch("questCount");
    if (questionsSource) {
      if (questionsSource.length != roundCounter) {
        const titleItems = this.getQuestTitle(questionsSource);
        return (
          <div className="game-info">
            <div className="game-info__correct-count">
              Question{" "}
              {localStorage.getItem("questCount")
                ? this.incrementedQuestCount()
                : this.state.questCount + 1}{" "}
              / 20{" "}
            </div>
            <div className="game-info__main-wrap">
              <Heading
                primaryText={titleItems.primary}
                secondaryText={titleItems.special}
                tertiaryText={"?"}
              />
              <div class="game-info__image-box-wrap-main">
                {this.getRoundQuestions(questionsSource)}
              </div>
              {this.renderButtonType(this.state.answered)}
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
                this.resetGame();
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
