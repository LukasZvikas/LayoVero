import React, { Component } from "react";

import chicago from "../../../../images/chicago.jpg";
import SearchComponent from "./SearchComponent";
import PopularPlaces from "./PopularPlaces";

class AfterAuthWrapper extends Component {
	render() {
		return (
			<div>
				<SearchComponent />
				<PopularPlaces />
			</div>
		);
	}
}

export default AfterAuthWrapper;
