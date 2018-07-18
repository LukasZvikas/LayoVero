import { SIGN_UP } from "./types";


export default function(state = {}, action) {
  switch (action.type) {
  	case SIGN_UP: 
  		console.log(action.payload);
  		return action.payload;
    default:
      return state;
  }
}
