import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import appReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(appReducer, persistedState, applyMiddleware(reduxThunk));

store.subscribe(() => {
  saveState({ game: store.getState() });
});

console.log("store", store.getState());

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
