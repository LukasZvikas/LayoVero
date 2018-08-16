import { combineReducers } from "redux";
import socialReducer from "./socialReducer";
import blogReducer from "./blogReducer";
import authReducer from "./authReducer";
import routeReducer from "./routeReducer";
import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
	social: socialReducer,
	blog: blogReducer,
	form: formReducer,
	auth: authReducer,
	routes: routeReducer
});

export default appReducer;
