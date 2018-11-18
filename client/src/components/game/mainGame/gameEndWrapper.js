import React, { Component } from "react";
import { connect } from "react-redux";
import { Heading, GameButton } from "../customComps";
import { saveScore } from "../../../actions/gameActions";

class GameEndWrapper extends Component {
  componentDidMount() {
    const saved = localStorage.getItem("saved");
    const token = localStorage.getItem("token");
    const score = localStorage.getItem("resultCount");
    // if (!saved) {
    //   localStorage.setItem("saved", true);
    //   this.props.saveScore(score, token);
    // }
  }
  render() {
    return (
      <div className="game-info">
        <div className="game-info__end-wrap">
          Congratulations, you finished the Quiz! You earned{" "}
          {this.props.LSResultCount} points.{" "}
          <GameButton
            name={"Play Again"}
            classType={"game-info__btn-primary"}
            action={this.props.action}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { saveScore })(GameEndWrapper);
