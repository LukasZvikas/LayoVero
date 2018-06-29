import { FETCH_BLOGPOSTS, OPEN_POST } from "../reducers/types";
import axios from "axios";

export const fetchBlogPosts = () => async dispatch => {
  const res = await axios.get("/blogPosts");

  dispatch({ type: FETCH_BLOGPOSTS, payload: res.data });
};

export const openPost = name => async dispatch => {
  const res = await axios.get(`/blogPosts/post/${name}`);
  dispatch({ type: OPEN_POST, payload: res.data });
};
