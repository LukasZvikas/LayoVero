import React, { Component } from "react";

import Header from "./Header";
import Social from "./Social";
import ComingSoon from "./ComingSoon";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Social />
        <ComingSoon />
      </div>
    );
  }
}

export default Main;
