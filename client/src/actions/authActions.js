import {
  SIGN_UP,
  SIGN_IN,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_MODAL,
  SHOW_FORGOT_PASS,
  SEND_FORGOT,
  SHOW_RESET
} from "../reducers/types";
import axios from "axios";

export const SignUserUp = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signup", { email, password });

  dispatch({ type: SIGN_UP, payload: res.data });
};

export const SignUserIn = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signin", { email, password });

  localStorage.setItem("token", res.data.token);

  dispatch({ type: SIGN_IN });
};

export const SendForgotEmail = ({ email }) => {
  const res = axios.post("/user/forgot", { email });

  return { type: SEND_FORGOT };
};
export const ShowSignUpModal = () => {
  return { type: SHOW_SIGNUP };
};

export const ShowSignInModal = () => {
  return { type: SHOW_SIGNIN };
};

export const ShowForgotPassword = () => {
  return { type: SHOW_FORGOT_PASS };
};

export const ShowResetComponent = () => async dispatch => {

  const token = window.location.pathname.slice(7);
  
  const res = await axios.get(`/user/reset/${token}`);

  console.log("RES", res);

  dispatch({ type: SHOW_RESET, payload: res.data });
};

export const HideModal = () => {
  return { type: HIDE_MODAL };
};
