import { FETCH_BLOGPOSTS } from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BLOGPOSTS:
      return {...state, blogs: action.payload};

    default:
      return state;
  }
}
