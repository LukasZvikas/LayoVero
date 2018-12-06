import {
  GET_ROUND_CITY,
  NEXT_QUESTION,
  RESET_GAME,
  CORRECT_ANSWER,
  INCORRECT_ANSWER
} from "./types";

const initialState = {
  questCount: 0,
  resultCount: 0,
  questCountHelp: 0
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return { ...state, questCount: state.questCount + 1 };
    case GET_ROUND_CITY:
      return { ...state, questions: action.payload };
    case CORRECT_ANSWER:
      return {
        ...state,
        questCountHelp: state.questCountHelp + 1,
        resultCount: state.resultCount + 1
      };
    case INCORRECT_ANSWER:
      return {
        ...state,
        questCountHelp: state.questCountHelp + 1
      };
    case RESET_GAME:
      return { ...initialState };
    default:
      return state.questCount === 0 ? { ...initialState } : { ...state };
  }
};
