import {
  GET_DOCUMENT_MOVEMENT_LIST,
  GET_DOCUMENT_MOVEMENT_BY_DOCUMENT_ID,
  ACCEPT_DOCUMENT,
  ADD_DOCUMENT_VERIFICATION_EMPLOYEE,
  ADD_DOCUMENT_SINGING_EMPLOYEE,
  ADD_DOCUMENT_SINGED_EMPLOYEE,
  ADD_DOCUMENT_FINAL_EMPLOYEE,
  REVOKE_CASE_MOVEMENT,
} from '../actions/types';

const initialState = {
  documentMovementList: [],
  documentMovement: {},
  documentFromDocumentMovement: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DOCUMENT_MOVEMENT_LIST:
      return {
        ...state,
        documentMovementList: action.payload,
      };
    case GET_DOCUMENT_MOVEMENT_BY_DOCUMENT_ID:
      return {
        ...state,
        documentMovementList: action.payload,
      };
    case ACCEPT_DOCUMENT:
      return {
        ...state,
        documentMovementList: state.documentMovementList.filter(
          (documentMovement) => documentMovement.id !== action.payload.id
        ),
      };
    case ADD_DOCUMENT_VERIFICATION_EMPLOYEE:
      return {
        ...state,
        documentFromDocumentMovement: action.payload.document,
      };
    case ADD_DOCUMENT_SINGING_EMPLOYEE:
      return {
        ...state,
        documentFromDocumentMovement: action.payload.document,
      };
    case ADD_DOCUMENT_SINGED_EMPLOYEE:
      return {
        ...state,
        documentFromDocumentMovement: action.payload.document,
      };
    case ADD_DOCUMENT_FINAL_EMPLOYEE:
      return {
        ...state,
        documentFromDocumentMovement: action.payload.document,
      };

    case REVOKE_CASE_MOVEMENT:
      return {
        ...state,
        documentFromDocumentMovement: action.payload.document,
        documentMovementList: state.documentMovementList
          .filter(
            (documentMovement) => documentMovement.id != action.payload.id
          )
          .concat(action.payload),
      };
    default:
      return state;
  }
}
