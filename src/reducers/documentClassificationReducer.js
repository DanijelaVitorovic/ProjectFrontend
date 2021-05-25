import {
  CREATE_DOCUMENT_CLASSIFICATION,
  UPDATE_DOCUMENT_CLASSIFICATION,
  GET_DOCUMENT_CLASSIFICATION,
  GET_DOCUMENT_CLASSIFICATION_LIST,
  DELETE_DOCUMENT_CLASSIFICATION,
} from '../actions/types';

const initialState = {
  documentClassificationList: [],
  documentClassification: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_DOCUMENT_CLASSIFICATION:
      return {
        ...state,
        documentClassificationList: state.documentClassificationList.concat(
          action.payload
        ),
      };
    case UPDATE_DOCUMENT_CLASSIFICATION:
      return {
        ...state,
        documentClassificationList: state.documentClassificationList
          .filter(
            (documentClassification) =>
              documentClassification.id !== action.payload.id
          )
          .concat(action.payload),
      };
    case GET_DOCUMENT_CLASSIFICATION:
      return {
        ...state,
        documentClassification: action.payload,
      };
    case GET_DOCUMENT_CLASSIFICATION_LIST:
      return {
        ...state,
        documentClassificationList: action.payload,
      };
    case DELETE_DOCUMENT_CLASSIFICATION:
      return {
        ...state,
        documentClassificationList: state.documentClassificationList.filter(
          (documentClassification) =>
            documentClassification.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
