import axios from "axios";
import { PARTIAL_QUERY, CLEAR_STATE } from "../reducers/types";

export const getCityFromPartialQuery = query => async dispatch => {
	const res = await axios.post("/user/getPartial", { partialQuery: query });

	dispatch({ type: PARTIAL_QUERY, payload: res.data });
};


export const clearState = () => {

	return {type: CLEAR_STATE}

}