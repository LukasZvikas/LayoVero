import axios from "axios";
import {INSTA_FEED} from "../reducers/types";
export const instaFeed = () => async dispatch => {
  const res = await axios.get(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=510679913.46dd288.4e08ebe700854286a81371b16f913af8"
  );

  dispatch({type: INSTA_FEED, payload: res.data})
  console.log(res.data);
};
