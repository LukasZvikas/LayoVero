import React from "react";

const Footer = ({ text, onClick }) => {
  return (
    <div className="auth-form__new-forgot" onClick={onClick}>
      {text}
    </div>
  );
};

export default Footer;
