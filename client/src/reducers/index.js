import { combineReducers } from "redux";
import socialReducer from "./socialReducer";

const appReducer = combineReducers({
  social: socialReducer
});

export default appReducer;
