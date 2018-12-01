import {
  SIGN_UP,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_MODAL,
  SHOW_FORGOT_PASS,
  SHOW_RESET,
  SEND_FORGOT,
  RESET_PASS,
  SIGN_IN,
  SEND_US_EMAIL,
  SIGN_UP_REF
} from "./types";

const initialState = {
  signIn: false,
  signUp: false,
  forgotPass: false,
  emailVerification: false,
  resetPass: false,
  forgetPassSuccess: false,
  showResetSuccess: false,
  sendUsEmail: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload, { type: "emailVerification" };
    case SIGN_IN:
      return { authenticated: true };
    case SIGN_UP_REF:
      console.log("SIGNUPREF", action.payload);
      return action.payload;
    case SHOW_SIGNUP:
      return { ...state, type: "signUp" };
    case SHOW_SIGNIN:
      return { ...state, type: "signIn" };
    case SHOW_FORGOT_PASS:
      return { type: "forgotPass" };
    case SEND_FORGOT:
      return { type: "forgetPassSuccess" };
    case SHOW_RESET:
      return action.payload;
    case RESET_PASS:
      return initialState, { type: "showResetSuccess" };
    case SEND_US_EMAIL:
      return { type: "sendUsEmail" };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
