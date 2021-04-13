import {
  GET_CASE_CLASSIFICATION,
  GET_CASE_CLASSIFICATION_LIST,
  DELETE_CASE_CLASSIFICATION,
  ADD_CASE_CLASSIFICATION,
  UPDATE_CASE_CLASSIFICATION,
} from "../actions/types";

const initialState = {
  caseClassificationList: [],
  caseClassification: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CASE_CLASSIFICATION:
      return {
        ...state,
        caseClassificationList: state.caseClassificationList.concat(
          action.payload
        ),
      };
    case UPDATE_CASE_CLASSIFICATION:
      return {
        ...state,
        caseClassificationList: state.caseClassificationList
          .filter(
            (caseClassification) => caseClassification.id != action.payload.id
          )
          .concat(action.payload),
      };

    case GET_CASE_CLASSIFICATION:
      return {
        ...state,
        caseClassification: action.payload,
      };
    case GET_CASE_CLASSIFICATION_LIST:
      return {
        ...state,
        caseClassificationList: action.payload,
      };

    case DELETE_CASE_CLASSIFICATION:
      return {
        ...state,
        caseClassificationList: state.caseClassificationList.filter(
          (caseClassification) => caseClassification.id != action.payload
        ),
      };

    default:
      return state;
  }
}
