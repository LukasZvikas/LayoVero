import React, { Component } from "react";
import { connect } from "react-redux";
import parisQData from "./parisQData";
import { renderBoxes } from "../helperFunctions";
import { Heading, GameButton } from "../customComps";
import Question from "./question";

class MainGameWrapper extends Component {
  state = { questions: null, questCount: 0 };

  componentDidMount() {
    const storage = localStorage.getItem("questions");
    const parsedStorage = JSON.parse(storage);
    this.setState({ questions: parsedStorage });
  }

  renderQuestions = questArray => {
    let answersArr = questArray.answers;
    return answersArr.map(item => (
      <Question
        title={item.title}
        onClick={() => this.setState({ questCount: this.state.questCount + 1 })}
      />
    ));
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

  getQuestTitle = () => {
    let roundCounter = this.state.questCount;
    if (this.state.questions.length === roundCounter)
      return { primary: "That's", special: "IT" };
    const getCurrentQuests = this.state.questions[this.state.questCount];
    const primary = getCurrentQuests.primaryText;
    const special = getCurrentQuests.specialWord;
    return { primary, special };
  };

  render() {
    if (this.state.questions === null) return <div />;
    console.log("STATE", this.state.questions[this.state.questCount]);

    const titleItems = this.getQuestTitle();

    const { questions } = this.state;

    return (
      <div className="game-info__main-wrap">
        <Heading
          primaryText={titleItems.primary}
          secondaryText={titleItems.special}
          tertiaryText={"?"}
        />
        <div class="game-info__image-box-wrap-main">
          {questions ? (
            this.getRoundQuestions(this.state.questions)
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <GameButton name={"Done"} classType={"game-info__btn-primary"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionArray: state.game.questions
  };
};

export default connect(mapStateToProps)(MainGameWrapper);
