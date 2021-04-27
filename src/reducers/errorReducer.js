import { GET_ERRORS, RESET_ERROR } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    case RESET_ERROR:
      return initialState;

    default:
      return state;
  }
}
