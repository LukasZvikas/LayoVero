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
    answered: false
  };

  checkLocalStorage = () => {
    let storage = localStorage.getItem("questions");
    if (storage === null) this.props.getRoundQuestions("paris");
    else {
      let parsedStorage = JSON.parse(storage);
      this.setState({ questionsFromLS: parsedStorage });
    }
  };

  questCountMatcher = () => {
    let storage = localStorage.getItem("questCount");
    const { questCount } = this.state;
    if (questCount !== storage && storage !== null) return storage;
    return questCount;
  };

  getQuestCount = () => {
    let savedQuestCount = localStorage.getItem("questCount");
    const { questCount } = this.state;
    return savedQuestCount ? savedQuestCount : questCount;
  };

  removeFooter = () => {
    let footer = document.getElementsByClassName("footer__img-main")[0];
    if (footer) footer.remove();
    let el = document.getElementsByTagName("body")[0];
    el.style.backgroundColor = "#fff";
  };
  componentDidMount() {
    this.removeFooter();
    //first check where to render data from. Make a request or just get it from localStorage.
    this.checkLocalStorage();
  }

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

  changeToAnswered = () => {
    this.setState({ answered: true });
  };
  renderButtonType = state => {
    let isMatch = this.questCountMatcher();
    if (state === false)
      return (
        <GameButton
          name={"Check answer"}
          classType={"game-info__btn-primary"}
          action={() => {
            this.checkIfCorrect(this.state.choice);
            this.changeToAnswered();
          }}
        />
      );
    return (
      <GameButton
        name={"Next question"}
        classType={"game-info__btn-primary"}
        action={() => {
          this.setState(
            prevState => ({
              questCount: prevState.questCount + 1
            }),
            () => {
              localStorage.setItem("questCount", this.state.questCount);
              this.setState({ answered: false, choice: "" });
              this.refreshCorrect();
            }
          );
        }}
      />
    );
  };
  getRoundQuestions = arr => {
    let roundCounter = this.getQuestCount();
    if (arr.length == roundCounter) return <div>No more Questions </div>;
    console.log("roundCounter", roundCounter);
    let currentQuest = arr[roundCounter];
    return this.renderQuestions(currentQuest);
  };

  getQuestTitle = arr => {
    let roundCounter = this.getQuestCount();
    console.log("WHAT IS THIS", arr.length, roundCounter);
    if (arr.length == roundCounter) {
      console.log("WHAT?");
      return { primary: "That's", special: "IT" };
    }
    const getCurrentQuests = arr[roundCounter];
    const primary = getCurrentQuests.primaryText;
    const special = getCurrentQuests.specialWord;
    return { primary, special };
  };

  refreshCorrect = () => {
    document.getElementsByClassName("game-info__answer")[0].innerHTML = "";
  };

  checkIfCorrect = choice => {
    const { questionsFromLS } = this.state;
    let roundCounter = this.getQuestCount();

    if (choice === questionsFromLS[roundCounter].correct_answer)
      document.getElementsByClassName("game-info__answer")[0].innerHTML =
        "CORRECT";
    else
      document.getElementsByClassName("game-info__answer")[0].innerHTML =
        "INCORRECT";
    return;
  };

  render() {
    const { questionsFromReq } = this.props;
    const { questionsFromLS } = this.state;

    const questionsSource = questionsFromReq || questionsFromLS;
    console.log("ups", this.state);
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
