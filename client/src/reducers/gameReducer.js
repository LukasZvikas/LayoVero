import {
  INITIAL_PAGE,
  AUTH_PAGE,
  NAME_PAGE,
  CONTACT_PAGE,
  PLAN_PAGE,
  START_GAME,
  GET_ROUND_CITY
} from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    // case INITIAL_PAGE:
    case AUTH_PAGE:
      return { stateOfPage: "authPage" };
    case NAME_PAGE:
      return { stateOfPage: "namePage" };
    case CONTACT_PAGE:
      return { stateOfPage: "contactPage" };
    case PLAN_PAGE:
      return { stateOfPage: "planPage" };
    case START_GAME:
      return { ...state, stateOfPage: "startGame" };
    case GET_ROUND_CITY:
      return { ...state, questions: action.payload };
    default:
      return { stateOfPage: "initialPage" };
  }
};
