import {
  GET_CASE_MOVEMENT_LIST,
  ACCEPT_CASE_AS_OWNER_OR_PROCESSOR,
  ADD_OWNER_TO_CASE,
  ADD_PROCESSOR_TO_CASE,
  GET_CASE_MOVEMENT_BY_CASE_ID,
} from "../actions/types";

const initialState = {
  caseMovementList: [],
  caseMovement: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_OWNER_TO_CASE:
      return {
        ...state,
        caseMovement: action.payload,
      };

    case GET_CASE_MOVEMENT_LIST:
      return {
        ...state,
        caseMovementList: action.payload,
      };
    case ACCEPT_CASE_AS_OWNER_OR_PROCESSOR:
      return {
        ...state,
        caseMovementList: state.caseMovementList.filter(
          (caseMovement) => caseMovement.id != action.payload.id
        ),
      };
    case ADD_PROCESSOR_TO_CASE:
      return {
        ...state,
        caseMovement: action.payload,
      };
    case GET_CASE_MOVEMENT_BY_CASE_ID:
      return {
        ...state,
        caseMovement: action.payload,
      };
    default:
      return state;
  }
}
