import React, { Component } from "react";

import SearchComponent from "./SearchComponent";
import PlacesContainer from "./PlacesContainer";
import PlacesContainerSecondary from "./PlacesContainerSecondary";

class AfterAuthWrapper extends Component {
  render() {
    return (
      <div>
        <SearchComponent />
        <PlacesContainer />
        <PlacesContainerSecondary />
      </div>
    );
  }
}

export default AfterAuthWrapper;
