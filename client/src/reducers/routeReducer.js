import { PARTIAL_QUERY, CLEAR_STATE } from "./types";

const initialState = { suggestions: "" };

export default function(state = initialState, action) {
	switch (action.type) {
		case PARTIAL_QUERY:
			console.log("redux", action.payload);
			return { ...state, options: action.payload };
		case CLEAR_STATE:
			return initialState;
		default:
			return state;
	}
}
