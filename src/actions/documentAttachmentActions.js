import {
  UPLOAD_DOCUMENT_ATTACHMENT,
  GET_DOCUMENT_ATTACHMENT,
  GET_DOCUMENT_ATTACHMENTS,
  DELETE_DOCUMENT_ATTACHMENT,
  FIND_ALL_DOCUMENT_ATTACHMNET,
  CLEAR_DOCUMENT_ATTACHMENT,
  GET_ERRORS,
} from './types';
import axios from 'axios';

export const uploadDocumentAttachment = (formData, id) => async (dispatch) => {
  await axios
    .post(`/api/documentAttachment/upload/${id}`, formData)
    .then((response) => {
      dispatch({
        type: UPLOAD_DOCUMENT_ATTACHMENT,
        payload: response.data,
      });
    });
};

export const getDocumentAttachmentByDocumentName = (documentName) => async (
  dispatch
) => {
  const res = await axios
    .get(`/api/documentAttachment/find/${documentName}`)
    .then((response) => {
      dispatch({
        type: GET_DOCUMENT_ATTACHMENT,
        payload: response.data,
      });
    });
};

export const getDocumentAttachmentsByDocument = (documentId) => async (
  dispatch
) => {
  const res = await axios
    .get(`/api/documentAttachment/findAllByDocument/${documentId}`)
    .then((response) => {
      dispatch({
        type: GET_DOCUMENT_ATTACHMENTS,
        payload: response.data,
      });
    });
};

export const deleteDocumentAttachment = (attachmentId) => async (dispatch) => {
  await axios
    .delete(`/api/documentAttachment/delete/${attachmentId}`)
    .then((response) => {
      dispatch({
        type: DELETE_DOCUMENT_ATTACHMENT,
        payload: attachmentId,
      });
    });
};

export const findAll = () => async (dispatch) => {
  await axios.get('/api/documentAttachment/findAll').then((response) => {
    dispatch({
      type: FIND_ALL_DOCUMENT_ATTACHMNET,
      payload: response.data,
    });
  });
};

export const clearDocumentAttachmets = () => async (dispatch) => {
  dispatch({
    type: CLEAR_DOCUMENT_ATTACHMENT,
    payload: {},
  });
};
