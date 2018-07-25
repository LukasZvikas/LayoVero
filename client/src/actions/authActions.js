import { SIGN_UP, SIGN_IN } from "../reducers/types";
import axios from "axios";

export const SignUserUp = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signup", { email, password });

  dispatch({ type: SIGN_UP, payload: res.data });
};

export const SignUserIn = ({ email, password }) => async dispatch => {
  console.log("ACTION", { email, password });
  const res = await axios.post("/user/signin", { email, password });

  localStorage.setItem("token", res.data.token);
  console.log("RES", res);

  dispatch({ type: SIGN_IN });
};
