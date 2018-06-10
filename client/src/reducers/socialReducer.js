import { INSTA_FEED } from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case INSTA_FEED:
      console.log(action.payload.data);
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
