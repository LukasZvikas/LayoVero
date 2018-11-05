import React from "react";
import AuthButton from "./authButton";

const AuthPageWrapper = () => {
  return (
    <div className="game-auth">
      <div className="secondary-heading">
        ARE YOU <span className="special-word">READY</span> TO...?
      </div>
      <AuthButton name={"Sign Up"} />
      <AuthButton name={"Sign In"} />
      <AuthButton name={"Not yet"} />
    </div>
  );
};

export default AuthPageWrapper;
