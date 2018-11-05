import {
  INITIAL_PAGE,
  AUTH_PAGE,
  NAME_PAGE,
  CONTACT_PAGE
} from "../reducers/types";
import axios from "axios";

export const askForAuth = () => {
  return { type: AUTH_PAGE };
};

export const askForName = () => {
  return { type: NAME_NAME };
};

export const askForContact = () => {
  return { type: CONTACT_PAGE };
};
