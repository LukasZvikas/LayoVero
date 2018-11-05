import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import Main from "./components/Main";
import "../sass/main.scss";
import "regenerator-runtime/runtime";

ReactDOM.render(
  <Root>
    <Main />
  </Root>,
  document.querySelector("#root")
);
