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

export const getRoundQuestions = round => async dispatch => {
  const res = await axios.post("/game/getRoundCity", { round });

  await localStorage.setItem("questions", JSON.stringify(res.data));

  // history.push("/round/1");

  dispatch({ type: GET_ROUND_CITY, payload: res.data });
};

export const saveScore = (score, token) => async dispatch => {
  const res = await axios.post("/game/saveScore", { score, token });

  console.log("RESS", res);
};

export const getRefferalCode = token => async dispatch => {
  const res = await axios.post("/game/getReff", { token });
  console.log("RESS", res);
  localStorage.setItem("refferalCode", res.data.message);
};
