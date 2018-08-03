import {
  SIGN_UP,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_MODAL,
  SHOW_FORGOT_PASS,
  SHOW_RESET,
  SEND_FORGOT,
  RESET_PASS
} from "./types";

const initialState = {
  signIn: false,
  signUp: false,
  forgotPass: false,
  emailVerification: false,
  resetPass: false,
  forgetPassSuccess: false,
  showResetSuccess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload, { emailVerification: true, signUp: false };
    case SHOW_SIGNUP:
      return { signUp: true };
    case SHOW_SIGNIN:
      return { signIn: true, emailVerification: false };
    case SHOW_FORGOT_PASS:
      return { forgotPass: true, signIn: false };
    case SEND_FORGOT:
      return { forgetPassSuccess: true };
    case SHOW_RESET:
      return action.payload;
    case RESET_PASS:
      return initialState, { showResetSuccess: true };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
