import { SIGN_UP } from "../reducers/types";
import axios from "axios";

export const SignUserUp = ({email, password}) => async dispatch => {
	console.log("ACTION",{email,password});
  const res = await axios.post("/user/signup", { email, password });

  dispatch({ type: SIGN_UP, payload: res.data });
};
