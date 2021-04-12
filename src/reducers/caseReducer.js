import {
  UPDATE_CASE,
  ADD_CASE,
  DELETE_CASE,
  GET_CASES,
  GET_CASE,
} from "../actions/types";

const initialState = {
  caseList: [],
  case: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CASE:
      return {
        ...state,
        caseList: state.caseList.concat(action.payload),
      };
    case UPDATE_CASE:
      return {
        ...state,
        caseList: state.caseList
          .filter((_case) => _case.id != action.payload.id)
          .concat(action.payload),
      };

    case GET_CASE:
      return {
        ...state,
        case: action.payload,
      };
    case GET_CASES:
      return {
        ...state,
        caseList: action.payload,
      };

    case DELETE_CASE:
      return {
        ...state,
        caseList: action.payload,
      };

    default:
      return state;
  }
}
