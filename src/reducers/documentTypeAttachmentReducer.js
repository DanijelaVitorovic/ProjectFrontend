import {
  UPLOAD_DOCUMENT_TYPE_ATTACHMENT,
  GET_DOCUMENT_TYPE_ATTACHMENT,
  GET_DOCUMENT_TYPE_ATTACHMENT_LIST,
  DELETE_DOCUMENT_TYPE_ATTACHMENT,
  FIND_ALL_DOCUMENT_TYPE_ATTACHMENT,
  CLEAR_DOCUMENT_TYPE_ATTACHMENT,
} from "../actions/types";

const initialState = {
  documentTypeAttachmentList: [],
  documentTypeAttachment: {},
  attachmentContent: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_DOCUMENT_TYPE_ATTACHMENT:
      return {
        ...state,
        documentTypeAttachmentList: state.documentTypeAttachmentList.concat(
          action.payload
        ),
      };
    case GET_DOCUMENT_TYPE_ATTACHMENT:
      return {
        ...state,
        attachmentContent: action.payload,
      };
    case GET_DOCUMENT_TYPE_ATTACHMENT_LIST:
      return {
        ...state,
        documentTypeAttachmentList: action.payload,
      };
    case DELETE_DOCUMENT_TYPE_ATTACHMENT:
      return {
        ...state,
        documentTypeAttachmentList: state.documentTypeAttachmentList.filter(
          (documentTypeAttachment) =>
            documentTypeAttachment.id !== action.payload
        ),
      };
    case FIND_ALL_DOCUMENT_TYPE_ATTACHMENT:
      return {
        ...state,
        documentTypeAttachmentList: action.payload,
      };
    case CLEAR_DOCUMENT_TYPE_ATTACHMENT:
      return {
        ...state,
        attachmentContent: action.payload,
      };
    default:
      return state;
  }
}
