import {
  GET_DOCUMENT_TYPE,
  GET_DOCUMENT_TYPE_LIST,
  DELETE_DOCUMENT_TYPE,
  ADD_DOCUMENT_TYPE,
  UPDATE_DOCUMENT_TYPE,
} from "../actions/types";

const initialState = {
  documentTypeList: [],
  documentType: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_DOCUMENT_TYPE:
      return {
        ...state,
        documentTypeList: state.documentTypeList.concat(action.payload),
      };
    case UPDATE_DOCUMENT_TYPE:
      return {
        ...state,
        documentTypeList: state.documentTypeList?.map((documentType) =>
          documentType.id === action.payload.id ? action.payload : documentType
        ),
      };

    case GET_DOCUMENT_TYPE:
      return {
        ...state,
        documentType: action.payload,
      };
    case GET_DOCUMENT_TYPE_LIST:
      return {
        ...state,
        documentTypeList: action.payload,
      };

    case DELETE_DOCUMENT_TYPE:
      return {
        ...state,
        documentTypeList: state.documentTypeList.filter(
          (documentType) => documentType.id != action.payload
        ),
      };

    default:
      return state;
  }
}
