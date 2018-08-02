import {
  SIGN_UP,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_MODAL,
  SHOW_FORGOT_PASS,
  SHOW_RESET
} from "./types";

export default function(
  state = {
    signIn: false,
    signUp: false,
    forgotPass: false,
    emailVerification: false,
    resetPass: false
  },
  action
) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload, { emailVerification: true, signUp: false };
    case SHOW_SIGNUP:
      return { signUp: true };
    case SHOW_SIGNIN:
      return { signIn: true, emailVerification: false };
    case SHOW_FORGOT_PASS:
      return { forgotPass: true, signIn: false };
    case SHOW_RESET:
      console.log("payload", action.payload)
      return action.payload;
    case HIDE_MODAL:
      return { signIn: false, signUp: false, emailVerification: false };
    default:
      return state;
  }
}
