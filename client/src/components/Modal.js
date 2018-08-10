import React from "react";

export const Modal = ({ children, show, hide }) => {
	const showOrHide = show ? "display-block" : "display-none";
	return <div className={`form-container ${showOrHide}`}>{children}</div>;
};

export const ModalTemplate = ({ modalType, modalContainer }) => {
	return (
		<div>
			{modalType ? (
				<Modal show={modalType}>{modalContainer}</Modal>
			) : null}
		</div>
	);
};
