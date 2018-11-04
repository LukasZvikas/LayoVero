import React, { Component } from "react";
import { connect } from "react-redux";
import forest from "../../../../images/forest.jpg";
import { Field, reduxForm } from "redux-form";
import { Location } from "../../svgIcons";
import { getCityFromPartialQuery, clearState } from "../../../actions/routeActions";
import { Suggestions} from "./suggestions";

class SearchComponent extends Component {
	constructor(props) {
		super(props);

		this.state = { searchQuery: "" };
	}

	handleInputChange = event => {
		if (event.target.value && event.target.value.length > 0) {

			this.props.getCityFromPartialQuery(event.target.value);
		}

		else {
			this.props.clearState();
		}
	};

	render() {
		const { handleSubmit, fields: { search } } = this.props;
		console.log("State", this.state);
		console.log("Props", this.props.suggestions);

		return (
			<form
				className="dashboard"
				style={{ marginTop: 7 + "rem" }}
				onSubmit={handleSubmit}
			>
				<div
					className="dashboard__search-container"
					style={{ backgroundImage: `url(${forest})` }}
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
								locationClass={"dashboard__search-icon"}
							/>
						</div>

						<input
							className="dashboard__search-bar-input"
							placeholder="City of your layover"
							onChange={event => {
								this.handleInputChange(event);
								console.log("Props", this.props);
							}}
						/>

						<button className="dashboard__search-bar-button">
							Search
						</button>
						<Suggestions items={this.props.suggestions} />
					</div>
				</div>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return { suggestions: state.routes.options };
};

export default reduxForm({ form: "layoverSearch", fields: ["search"] })(
	connect(mapStateToProps, { getCityFromPartialQuery, clearState })(SearchComponent)
);
