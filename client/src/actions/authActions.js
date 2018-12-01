import {
  SIGN_UP,
  SIGN_IN,
  SIGN_UP_REF,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_MODAL,
  SHOW_FORGOT_PASS,
  SEND_FORGOT,
  SHOW_RESET,
  RESET_PASS,
  SEND_US_EMAIL
} from "../reducers/types";
import axios from "axios";

export const SignUserUp = ({ email, password, refCode }) => async dispatch => {
  const refBy = refCode || null;
  console.log("from ref", refBy)
  const res = await axios.post("/user/signup", { email, password, refBy });

  dispatch({ type: SIGN_UP, payload: res.data });
};

// export const signUpFromRef = ({ email, password, refCode }) => async dispatch => {
//   const res = await axios.post("/user/signupRef", { email, password, refCode });
//   console.log("THIS IS RES", res.data);
//   dispatch({ type: SIGN_UP_REF, payload: res.data });
// };

export const SignUserIn = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signin", { email, password });

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("refCode", res.data.refCode);

  dispatch({ type: SIGN_IN });
};

export const SignInWithGoogle = () => async dispatch => {
  const res = await axios.get("/user/auth/google");

  console.log("RES", res);
};

export const SendForgotEmail = ({ email }) => {
  const res = axios.post("/user/forgot", { email });

  return { type: SEND_FORGOT };
};

export const ResetPass = ({ password }) => async dispatch => {
  const token = window.location.pathname.slice(7);

  const res = await axios.post(`/user/reset/${token}`, { password });

  dispatch({ type: RESET_PASS, payload: res.data });
};

/// SHOW/HIDE MODALS
////////////////////

export const ShowResetComponent = () => async dispatch => {
  const token = window.location.pathname.slice(7);

  const res = await axios.get(`/user/reset/${token}`);

  console.log("RES", res);

  dispatch({ type: SHOW_RESET, payload: res.data });
};

export const ShowSignUpModal = () => {
  console.log("ACTION SIGN UP");
  return { type: SHOW_SIGNUP };
};

export const ShowSignInModal = () => {
  return { type: SHOW_SIGNIN };
};

export const ShowForgotPassword = () => {
  return { type: SHOW_FORGOT_PASS };
};

export const SendUsEmail = () => {
  console.log("here");
  return { type: SEND_US_EMAIL };
};

export const HideModal = () => {
  return { type: HIDE_MODAL };
};
