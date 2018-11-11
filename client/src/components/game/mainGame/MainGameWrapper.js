import React, { Component } from "react";
import { connect } from "react-redux";
import parisQData from "./parisQData";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import { getRoundQuestions } from "../../../actions/gameActions";

class MainGameWrapper extends Component {
  state = {
    questionsFromLS: null,
    questCount: 0,
    choice: "",
    answered: false,
    resultCount: 0
  };

  removeFooter = () => {
    let footer = document.getElementsByClassName("footer__img-main")[0];
    if (footer) footer.remove();
    let el = document.getElementsByTagName("body")[0];
    el.style.backgroundColor = "#fff";
  };

  getInitialQuestions = () => {
    let storage = localStorage.getItem("questions");
    if (storage === null) this.props.getRoundQuestions("paris");
    else {
      let parsedStorage = JSON.parse(storage);
      this.setState({ questionsFromLS: parsedStorage });
    }
  };

  checkCountMatch = key => {
    //checks if localStorage's and state's questCount's match
    let storage = localStorage.getItem(key);
    const { questCount } = this.state;
    if (questCount !== storage && storage !== null) return storage;
    return questCount;
  };

  changeToAnswered = () => {
    this.setState({ answered: true });
  };

  //first check where to render data from. Make a request or just get it from localStorage.
  componentDidMount() {
    this.removeFooter();
    this.getInitialQuestions();
  }

  // render a set of 4 questions everytime.
  renderQuestions = questArray => {
    let answersArr = questArray.answers;
    return answersArr.map(item => {
      return (
        <Question
          title={item.title}
          onClick={() => this.setState({ choice: item.title })}
        />
      );
    });
  };

  incrementLSCount = key => {
    let storage = localStorage.getItem(key);

    if (!storage) {
      localStorage.setItem(key, this.state.resultCount);
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

  renderButtonType = state => {
    let isMatch = this.checkCountMatch("questCount");
    if (state === false)
      return (
        <GameButton
          name={"Check answer"}
          classType={"game-info__btn-primary"}
          action={() => {
            let isCorrect = this.checkIfCorrect(this.state.choice);
            isCorrect
              ? this.setState(
                  prevState => ({
                    resultCount: prevState.resultCount + 1
                  }),
                  () => {
                    this.incrementLSCount("resultCount");
                  }
                )
              : console.log("incorrect");

            this.changeToAnswered();
          }}
        />
      );
    return (
      <GameButton
        name={"Next question"}
        classType={"game-info__btn-primary"}
        action={() => this.incrementCount()}
      />
    );
  };

  // check if there are more questions, call renderQuestions if there are, otherwise return stub.
  getRoundQuestions = arr => {
    let roundCounter = this.checkCountMatch("questCount");
    if (arr.length == roundCounter) return <div>No more Questions </div>;
    let currentQuest = arr[roundCounter];
    return this.renderQuestions(currentQuest);
  };

  getQuestTitle = arr => {
    let roundCounter = this.checkCountMatch("questCount");
    if (arr.length == roundCounter) {
      return { primary: "That's", special: "IT" };
    }
    const getCurrentQuests = arr[roundCounter];
    const primary = getCurrentQuests.primaryText;
    const special = getCurrentQuests.specialWord;
    return { primary, special };
  };

  resetAnswerCheck = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  checkIfCorrect = choice => {
    const { questionsFromLS } = this.state;
    let roundCounter = this.checkCountMatch("questCount");

    if (choice === questionsFromLS[roundCounter].correct_answer) {
      document.getElementsByClassName("game-info__answer")[0].innerHTML =
        "CORRECT";
      return true;
    }
    document.getElementsByClassName("game-info__answer")[0].innerHTML =
      "INCORRECT";
    return false;
  };

  render() {
    const { questionsFromReq } = this.props;
    const { questionsFromLS } = this.state;
    const questionsSource = questionsFromReq || questionsFromLS;
    if (questionsSource) {
      const titleItems = this.getQuestTitle(questionsSource);
      return (
        <div className="game-info">
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

    return <div>Loading...</div>;
  }
}

const mapStateToProps = state => {
  return {
    questionsFromReq: state.game.questions
  };
};

export default connect(mapStateToProps, { getRoundQuestions })(MainGameWrapper);
