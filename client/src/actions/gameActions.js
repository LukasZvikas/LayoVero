import {
  INITIAL_PAGE,
  AUTH_PAGE,
  NAME_PAGE,
  CONTACT_PAGE,
  PLAN_PAGE
} from "../reducers/types";
import axios from "axios";

export const askForAuth = () => {
  return { type: AUTH_PAGE };
};

export const askForName = () => {
  return { type: NAME_PAGE };
};

export const askForContact = () => {
  return { type: CONTACT_PAGE };
};

export const showPlan = () => {
  return { type: PLAN_PAGE };
};
