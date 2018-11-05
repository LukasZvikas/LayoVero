import { INITIAL_PAGE, AUTH_PAGE, NAME_PAGE, CONTACT_PAGE } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case INITIAL_PAGE:
    //return initial
    case AUTH_PAGE:
      return { stateOfPage: "authPage" };
    //return auth
    case NAME_PAGE:
      return { stateOfPage: "namePage" };
    //return name
    case CONTACT_PAGE:
      return { stateOfPage: "contactPage" };
    //retrun contact
    default:
      return { stateOfPage: "initialPage" };
  }
};
