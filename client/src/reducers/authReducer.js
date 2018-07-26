import { SIGN_UP, SHOW_SIGNUP, SHOW_SIGNIN, HIDE_MODAL } from "./types";

export default function(
  state = { signIn: false, signUp: false, emailVerification: false },
  action
) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload, { emailVerification: true, signUp: false };
    case SHOW_SIGNUP:
      return { signUp: true };
    case SHOW_SIGNIN:
      return { signIn: true, emailVerification: false };
    case HIDE_MODAL:
      return { signIn: false, signUp: false, emailVerification: false };
    default:
      return state;
  }
}
