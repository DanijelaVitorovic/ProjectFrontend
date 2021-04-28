import {
  ADD_DOCUMENT,
  UPDATE_DOCUMENT,
  GET_DOCUMENT,
  GET_DOCUMENT_LIST,
  DELETE_DOCUMENT,
  ADD_CASE_DOCUMENT_DTO,
  VERIFICATION_DOCUMENT,
  SIGNING_DOCUMENT,
  SINGED_DOCUMENT,
  FINAL_DOCUMENT,
  GET_DOCUMENT_LIST_BY_CASE,
} from '../actions/types';

const initialState = {
  documentList: [],
  document: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_DOCUMENT:
      return {
        ...state,
        documentList: state.documentList.concat(action.payload),
      };

    case UPDATE_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };
    case GET_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };
    case GET_DOCUMENT_LIST:
      return {
        ...state,
        documentList: action.payload,
      };

    case GET_DOCUMENT_LIST_BY_CASE:
      return {
        ...state,
        documents: action.payload,
      };

    case GET_DOCUMENT_LIST_BY_CASE:
      return {
        ...state,
        documents: action.payload,
      };
    case DELETE_DOCUMENT:
      return {
        ...state,
        documentList: state.documentList.filter(
          (document) => document.id !== action.payload
        ),
      };

    case ADD_CASE_DOCUMENT_DTO:
      return {
        ...state,
        documentList: state.documentList.concat(action.payload),
      };

    case VERIFICATION_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };

    case SIGNING_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };

    case SINGED_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };

    case FINAL_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };
    default:
      return state;
  }
}
