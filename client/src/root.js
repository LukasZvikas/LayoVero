import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import appReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(
	appReducer,
	persistedState,
	applyMiddleware(reduxThunk)
);

store.subscribe(() => {
	const { questCount, resultCount, questCountHelp } = store.getState().game;
	saveState({ game: { questCount, resultCount, questCountHelp } });
});

export default props => {
	return <Provider store={store}>{props.children}</Provider>;
};
