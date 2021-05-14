import {
  GET_CASE_MOVEMENT_LIST,
  ACCEPT_CASE_AS_OWNER_OR_PROCESSOR,
  ADD_OWNER_TO_CASE,
  ADD_PROCESSOR_TO_CASE,
  GET_CASE_MOVEMENT_BY_CASE_ID,
  REVOKE_CASE_MOVEMENT,
} from "../actions/types";

const initialState = {
  caseMovementList: [],
  caseMovement: {},
  _caseFromCaseMovement: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_OWNER_TO_CASE:
      return {
        ...state,
        _caseFromCaseMovement: action.payload._case,
        caseMovementList: state.caseMovementList.concat(action.payload),
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
        _caseFromCaseMovement: action.payload._case,
        caseMovementList: state.caseMovementList.concat(action.payload),
      };
    case REVOKE_CASE_MOVEMENT:
      return {
        ...state,
        _caseFromCaseMovement: action.payload._case,
        caseMovementList: state.caseMovementList
          .filter((caseMovement) => caseMovement.id != action.payload.id)
          .concat(action.payload),
      };
    case GET_CASE_MOVEMENT_BY_CASE_ID:
      return {
        ...state,
        caseMovementList: action.payload,
      };
    default:
      return state;
  }
}
