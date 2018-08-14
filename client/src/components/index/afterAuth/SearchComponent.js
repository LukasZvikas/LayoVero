import React, { Component } from "react";
import nyc from "../../../../images/nyc.jpg";
import { Field, reduxForm} from "redux-form";
import { Location } from "../../svgIcons";

class SearchComponent extends Component {
	render() {
		console.log("PROPS", this.props)
		const { handleSubmit, fields: { search} } = this.props;
		console.log("PROPS", this.props)
		return (
			
				<form className="dashboard" style={{ marginTop: 7 + "rem" }} onSubmit={handleSubmit}>
					<div
						className="dashboard__search-container"
						style={{ backgroundImage: `url(${nyc})` }}
					>
						<div className="dashboard__heading">
							Look for the best layover options in your favorite
							cities.
						</div>
						<div className="dashboard__search-bar">
							<div>
								<Location
									height={2.2 + "rem"}
									width={2.2 + "rem"}
									color="#000"
								/>
							</div>

							<input
								className="dashboard__search-bar-input"
								placeholder="City of your layover"
							/>

							<button className="dashboard__search-bar-button">
								Search
							</button>
						</div>
					</div>
				</form>
			
		);
	}
}

export default reduxForm({ form: "layoverSearch", fields: ["search"] })(
	SearchComponent
);