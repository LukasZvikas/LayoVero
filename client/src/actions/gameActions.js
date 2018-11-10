import {
  INITIAL_PAGE,
  AUTH_PAGE,
  NAME_PAGE,
  CONTACT_PAGE,
  PLAN_PAGE,
  START_GAME,
  GET_ROUND_CITY
} from "../reducers/types";
import history from "../utilities/history";

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

export const startGame = () => {
  return { type: START_GAME };
};

export const showPlan = () => {
  return { type: PLAN_PAGE };
};

export const getRoundQuestions = city => async dispatch => {
  console.log(city);
  const res = await axios.post("/game/getRoundCity", { city });

  console.log("RES", res);

  await localStorage.setItem("questions", JSON.stringify(res.data));

  // history.push("/round/1");
  
  dispatch({ type: GET_ROUND_CITY, payload: res.data });
};
