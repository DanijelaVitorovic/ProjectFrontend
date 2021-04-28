import {
  UPLOAD_DOCUMENT_ATTACHMENT,
  GET_DOCUMENT_ATTACHMENTS,
  GET_DOCUMENT_ATTACHMENT,
  FIND_ALL_DOCUMENT_ATTACHMNET,
  CLEAR_DOCUMENT_ATTACHMENT,
  DELETE_DOCUMENT_ATTACHMENT,
} from '../actions/types.js';

const initialState = {
  documentAttachmentList: [],
  documentAttachment: {},
  error: undefined,
  attachmentContent: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_DOCUMENT_ATTACHMENT:
      return {
        ...state,
        documentAttachmentList: state.documentAttachmentList.concat(
          action.payload
        ),
      };
    case GET_DOCUMENT_ATTACHMENT:
      return {
        ...state,
        attachmentContent: action.payload,
      };
    case GET_DOCUMENT_ATTACHMENTS:
      return {
        ...state,
        documentAttachmentList: action.payload,
      };
    case DELETE_DOCUMENT_ATTACHMENT:
      return {
        ...state,
        documentAttachmentList: state.documentAttachmentList.filter(
          (documentAttachment) => documentAttachment.id !== action.payload
        ),
      };
    case FIND_ALL_DOCUMENT_ATTACHMNET:
      return {
        ...state,
        documentAttachmentList: action.payload,
      };
    case CLEAR_DOCUMENT_ATTACHMENT:
      return {
        ...state,
        attachmentContent: action.payload,
      };
    default:
      return state;
  }
}
