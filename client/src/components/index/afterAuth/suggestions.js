import React from "react";
import { Location } from "../../svgIcons";

export const Suggestions = ({ items }) => {
	if (items === undefined) {
		return null;
	}
	const options = items.map(suggestion => {
		return (
			<li className="dashboard__suggestions-item">
				<Location
					height={1.6 + "rem"}
					width={1.6 + "rem"}
					color="#000"
					locationClass={"dashboard__suggestions-search-icon"}
				/>
				<div className="dashboard__suggestions-city">{suggestion}</div>
			</li>
		);
	});

	return <ul className="dashboard__suggestions"> {options} </ul>;
};
