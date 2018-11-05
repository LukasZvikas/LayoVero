import React, { Component } from "react";
import { connect } from "react-redux";
import InitialPageWrapper from "./initialPage/initialPageWrapper";
import AuthPageWrapper from "./sliderComps/auth/authPageWrapper";

class GameWrapper extends Component {
  renderPageByType = type => {
    if (type != "initialPage") {
      let el = document.getElementsByTagName("body")[0];
      console.log(el);
      el.style.backgroundColor = "#fff";
      // console.log("el", el);
    }
    switch (type) {
      case "initialPage":
        return <InitialPageWrapper />;
      case "authPage":
        return <AuthPageWrapper />;
      case "namePage":
        return <div>Name</div>;
      case "contactPage":
        return <div>Contact</div>;
      case "planPage":
        return <div>Plan</div>;
    }
  };
  render() {
    console.log("PROPS", this.props);
    const { pageState } = this.props;
    return (
      <div className="game-wrapper">{this.renderPageByType(pageState)};</div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    pageState: state.game.stateOfPage
  };
};

export default connect(mapStateToProps, null)(GameWrapper);
