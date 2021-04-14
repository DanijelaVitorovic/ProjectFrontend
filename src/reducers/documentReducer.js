import {
  ADD_DOCUMENT,
  UPDATE_DOCUMENT,
  GET_DOCUMENT,
  GET_DOCUMENTS,
  DELETE_DOCUMENT,
} from "../actions/types";

const initialState = {
  documents: [],
  document: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_DOCUMENT:
      return {
        ...state,
        documents: state.documents.concat(action.payload),
      };

    case UPDATE_DOCUMENT:
      return {
        ...state,
        documents: state.documents.map((document) =>
          document.id === action.payload.id ? action.payload : document
        ),
      };
    case GET_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };
    case GET_DOCUMENTS:
      return {
        ...state,
        documents: action.payload,
      };
    case DELETE_DOCUMENT:
      return {
        ...state,
        documents: state.documents.filter(
          (document) => document.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
