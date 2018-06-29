import { FETCH_BLOGPOSTS, OPEN_POST } from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BLOGPOSTS:
      return {...state, blogs: action.payload};
    case OPEN_POST: 
      console.log("payload", action.payload);
      return {...state, post: action.payload};
    default:
      return state;
  }
}
