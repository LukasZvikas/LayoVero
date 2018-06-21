import React, { Component } from "react";
import About1 from "./aboutUsMain";
import About2 from "./aboutUsSecondary"
import Social from "./Social";
import ComingSoon from "./ComingSoon";

class aboutWrapper extends Component {
  render() {
    return (
      <div className="main">
      	<About1 />
      	<About2 />
        <Social />
        <ComingSoon />
      </div>
    );
  }
}

export default aboutWrapper;
