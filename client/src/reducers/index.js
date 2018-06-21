import { combineReducers } from "redux";
import socialReducer from "./socialReducer";
import blogReducer from "./blogReducer";

const appReducer = combineReducers({
  social: socialReducer,
  blog: blogReducer
});

export default appReducer;
