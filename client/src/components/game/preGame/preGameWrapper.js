import React, { Component } from "react";
import { connect } from "react-redux";
import InitialPageWrapper from "./initial/initialPageWrapper";
import AuthPageWrapper from "./auth/authPageWrapper";
import NamePageWrapper from "./name/namePageWrapper";
// import ContactPageWrapper from "./contact/contactPageWrapper";
import PlanPageWrapper from "./plan/planPageWrapper";


class PreGameWrapper extends Component {
  removeFooter = () => {
    let footer = document.getElementsByClassName("footer__img-main")[0];

    footer.remove();
  };
  renderPageByType = type => {
    if (type != "initialPage") {
      let el = document.getElementsByTagName("body")[0];
      el.style.backgroundColor = "#fff";
    }
    switch (type) {
      case "initialPage":
        return <InitialPageWrapper />;
      case "authPage":
        return <AuthPageWrapper />;
      case "namePage":
        return <NamePageWrapper />;
      case "contactPage":
        return <ContactPageWrapper />;
      case "planPage":
        this.removeFooter();
        return <PlanPageWrapper />;
    }
  };

  render() {
    const { pageState } = this.props;
    return <div className="game-info">{this.renderPageByType(pageState)};</div>;
  }
}

const mapStateToProps = state => {
  console.log("ST", state);
  return {
    pageState: state.game.stateOfPage
  };
};

export default connect(mapStateToProps, null)(PreGameWrapper);
