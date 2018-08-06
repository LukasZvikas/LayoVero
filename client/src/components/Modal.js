import React from "react";

export const Modal = ({ children, show, hide }) => {
	const showOrHide = show ? "display-block" : "display-none";
	console.log("SHOW", show);

	return <div className={`form-container ${showOrHide}`}>{children}</div>;
};
