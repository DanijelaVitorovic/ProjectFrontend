import axios from "axios";
import {
  UPLOAD_DOCUMENT_TYPE_ATTACHMENT,
  GET_DOCUMENT_TYPE_ATTACHMENT,
  GET_DOCUMENT_TYPE_ATTACHMENT_LIST,
  DELETE_DOCUMENT_TYPE_ATTACHMENT,
  FIND_ALL_DOCUMENT_TYPE_ATTACHMENT,
  CLEAR_DOCUMENT_TYPE_ATTACHMENT,
  GET_ERRORS,
} from "./types";

export const uploadDocumentTypeAttachment = (formData, id) => async (
  dispatch
) => {
  await axios
    .post(`/api/documentTypeAttachment/upload/${id}`, formData)
    .then((response) => {
      dispatch({
        type: UPLOAD_DOCUMENT_TYPE_ATTACHMENT,
        payload: response.data,
      });
    });
};

export const getDocumentTypeAttachmentByDocumentTypeName = (
  documentTypeName
) => async (dispatch) => {
  const res = await axios
    .get(`/api/documentTypeAttachment/find/${documentTypeName}`)
    .then((response) => {
      dispatch({
        type: GET_DOCUMENT_TYPE_ATTACHMENT,
        payload: response.data,
      });
    });
};

export const getDocumentTypeAttachmentListByDocumentType = (id) => async (
  dispatch
) => {
  const res = await axios
    .get(`/api/documentTypeAttachment/findAllByDocumentType/${id}`)
    .then((response) => {
      dispatch({
        type: GET_DOCUMENT_TYPE_ATTACHMENT_LIST,
        payload: response.data,
      });
    });
};

export const deleteDocumentTypeAttachment = (id) => async (dispatch) => {
  await axios
    .delete(`/api/documentTypeAttachment/deleteDocumentTypeAttachment/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_DOCUMENT_TYPE_ATTACHMENT,
        payload: id,
      });
    });
};

export const findAllDocumentTypeAttachments = () => async (dispatch) => {
  await axios.get("/api/documentTypeAttachment/findAll").then((response) => {
    dispatch({
      type: FIND_ALL_DOCUMENT_TYPE_ATTACHMENT,
      payload: response.data,
    });
  });
};

export const clearDocumentTypeAttachmets = () => async (dispatch) => {
  dispatch({
    type: CLEAR_DOCUMENT_TYPE_ATTACHMENT,
    payload: {},
  });
};
