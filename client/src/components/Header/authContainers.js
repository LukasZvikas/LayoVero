import React from "react";

import { Link, withRouter } from "react-router-dom";

import { Twitter, Facebook, Instagram, Youtube } from "../svgIcons";
import layovero from "../../../images/layovero.png";

export const Authenticated = () => {
	return (
		<div className="navigation">
			<div style={{ width: "100%" }}>
				<img
					className="navigation__logo"
					src={layovero}
					width="53"
					height="53"
				/>
			</div>
			<input
				type="checkbox"
				className="navigation__checkbox"
				id="nav-toggle"
			/>

			<label for="nav-toggle" className="navigation__button">
				<span className="navigation__icon">&nbsp;</span>
			</label>
			{/*<div className="navigation__background">&nbsp;</div>*/}
			<nav className="navigation__nav">
				<ul className="navigation__list">
					<Link className="navigation__item" to="/about">
						About Us
					</Link>
					<li className="navigation__item">My Layovers</li>
					<Link className="navigation__item" to="/blog">
						Blog
					</Link>
					<li className="navigation__item">Contact Us</li>
					<li className="navigation__item">Log Out</li>
				</ul>
				<div className="navigation__icon-box">
					<Twitter
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
					<Facebook
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
					<Youtube
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
					<Instagram
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
				</div>
			</nav>
		</div>
	);
};

export const NotAuthenticated = ({ showSignUp, showSignIn }) => {
	return (
		<div className="navigation">
			<div style={{ width: "100%" }}>
				<img
					className="navigation__logo"
					src={layovero}
					width="53"
					height="53"
				/>
			</div>
			<input
				type="checkbox"
				className="navigation__checkbox"
				id="nav-toggle"
			/>

			<label for="nav-toggle" className="navigation__button">
				<span className="navigation__icon">&nbsp;</span>
			</label>
			{/*<div className="navigation__background">&nbsp;</div>*/}
			<nav className="navigation__nav">
				<ul className="navigation__list">
					<Link className="navigation__item" to="/about">
						About Us
					</Link>
					<li className="navigation__item">Layovers</li>
					<li className="navigation__item">Contact Us</li>
					<Link className="navigation__item" to="/blog">
						Blog
					</Link>

					<div className="navigation__item" onClick={showSignUp}>
						Sign Up
					</div>
					<div className="navigation__item" onClick={showSignIn}>
						Sign In
					</div>
				</ul>
				<div className="navigation__icon-box">
					<Twitter
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
					<Facebook
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
					<Youtube
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
					<Instagram
						width={6 + "rem"}
						height={3 + "rem"}
						color={"#fff"}
					/>
				</div>
			</nav>
		</div>
	);
};
