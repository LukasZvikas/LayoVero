import React, { Component } from "react";
import { connect } from "react-redux";
import parisQData from "./parisQData";
import { renderBoxes } from "../helperFunctions";
import { Heading, GameButton } from "../customComps";
import Question from "./question";
import { getRoundQuestions } from "../../../actions/gameActions";

class MainGameWrapper extends Component {
  state = { questions: null, questCount: 0, choice: "", correctAnswer: "" };

  removeFooter = () => {
    let footer = document.getElementsByClassName("footer__img-main")[0];
    if (footer) footer.remove();
    let el = document.getElementsByTagName("body")[0];
    el.style.backgroundColor = "#fff";
  };
  componentDidMount() {
    this.removeFooter();
    this.props.getRoundQuestions("paris");
  }

  renderQuestions = questArray => {
    let answersArr = questArray.answers;
    return answersArr.map(item => {
      console.log(item.title);
      console.log("ISCORRECT", item.correct);
      if (item.correct) {
        console.log(item.correct);
        this.setState({ correctAnswer: item.title });
      }
      return (
        <Question
          title={item.title}
          onClick={() => this.setState({ choice: item.title })}
        />
      );
    });
  };

  // questionCountCheck = (content) => {
  // 	let roundCounter = this.state.questCount;
  // 	let questionLength = this.state.questions.length;
  //   if (question === roundCounter) return content;
  // }

  getRoundQuestions = arr => {
    let roundCounter = this.state.questCount;
    if (arr.length === roundCounter) return <div>No more Questions </div>;
    let currentQuest = arr[roundCounter];
    return this.renderQuestions(currentQuest);
  };

  getQuestTitle = arr => {
    let roundCounter = this.state.questCount;
    if (arr.length === roundCounter)
      return { primary: "That's", special: "IT" };
    const getCurrentQuests = arr[this.state.questCount];
    const primary = getCurrentQuests.primaryText;
    const special = getCurrentQuests.specialWord;
    return { primary, special };
  };

  checkIfCorrect = choice => {
    if (choice === correctChoice) return <div>CORRECT!</div>;

    return <div>INCORRECT </div>;
  };

  render() {
    console.log("STATES", this.props);

    const { questionArray } = this.props;

    if (questionArray) {
      const titleItems = this.getQuestTitle(questionArray);
      return (
        <div className="game-info__main-wrap">
          <Heading
            primaryText={titleItems.primary}
            secondaryText={titleItems.special}
            tertiaryText={"?"}
          />
          <div class="game-info__image-box-wrap-main">
            {this.getRoundQuestions(questionArray)}
          </div>
          <GameButton
            name={"Check answer"}
            classType={"game-info__btn-primary"}
            action={() =>
              this.setState({ questCount: this.state.questCount + 1 })
            }
          />
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

const mapStateToProps = state => {
  return {
    questionArray: state.game.questions
  };
};

export default connect(mapStateToProps, { getRoundQuestions })(MainGameWrapper);
