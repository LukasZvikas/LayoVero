import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import "../sass/main.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import appReducer from "./reducers";
import "regenerator-runtime/runtime";

console.log(React.version);

const store = createStore(
  appReducer,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector("#root")
);
