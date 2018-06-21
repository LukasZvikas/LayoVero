import { FETCH_BLOGPOSTS } from "../reducers/types";
import axios from "axios";

export const fetchBlogPosts = () => async dispatch => {
  const res = await axios.get("/blogPosts");

  dispatch({ type: FETCH_BLOGPOSTS, payload: res.data });

};
