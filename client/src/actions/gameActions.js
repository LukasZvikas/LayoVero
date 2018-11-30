import {
  GET_ROUND_CITY,
  NEXT_QUESTION,
  RESET_GAME,
  CORRECT_ANSWER,
  INCORRECT_ANSWER
} from "../reducers/types";
import history from "../utilities/history";

import axios from "axios";

export const incrementCount = () => {
  return { type: NEXT_QUESTION };
};

export const resetGame = () => {
  return { type: RESET_GAME };
};

export const correctAnswerAction = () => {
  return { type: CORRECT_ANSWER };
};

export const incorrectAnswerAction = () => {
  return { type: INCORRECT_ANSWER };
};

export const getRoundQuestions = round => async dispatch => {
  const res = await axios.post("/game/getRoundCity", { round });

  // await localStorage.setItem("questions", JSON.stringify(res.data));
  dispatch({ type: GET_ROUND_CITY, payload: res.data });
};

export const saveScore = (score, token) => async dispatch => {
  const res = await axios.post("/game/saveScore", { score, token });

  console.log("RESS", res);
};

export const getReferralCode = token => async dispatch => {
  const res = await axios.post("/game/getRef", { token });
  console.log("RESS", res);
  localStorage.setItem("referralCode", res.data.message);
};

export const sendEmails = (emails, refCode) => async dispatch => {
  const res = await axios.post("/game/sendEmails", { emails, refCode });
};
