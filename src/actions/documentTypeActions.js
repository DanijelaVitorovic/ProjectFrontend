import axios from "axios";
import {
  GET_ERRORS,
  GET_DOCUMENT_TYPE,
  GET_DOCUMENT_TYPE_LIST,
  DELETE_DOCUMENT_TYPE,
  ADD_DOCUMENT_TYPE,
  UPDATE_DOCUMENT_TYPE,
} from "../actions/types";

export const createDocumentType = (documentTypeForCreate) => async (
  dispatch
) => {
  try {
    await axios
      .post("/api/documentType/createDocumentType", documentTypeForCreate)
      .then((response) => {
        dispatch({
          type: ADD_DOCUMENT_TYPE,
          payload: response.data,
        });
      });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const updateDocumentType = (documentTypeForUpdate) => async (
  dispatch
) => {
  try {
    await axios
      .post("/api/documentType/updateDocumentType", documentTypeForUpdate)
      .then((response) => {
        dispatch({
          type: UPDATE_DOCUMENT_TYPE,
          payload: response.data,
        });
      });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getDocumentTypeList = () => async (dispatch) => {
  const res = await axios.get("/api/documentType/findAllDocumentTypes");
  dispatch({
    type: GET_DOCUMENT_TYPE_LIST,
    payload: res.data,
  });
};

export const getDocumentType = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/documentType/findDocumentType/${id}`);
    dispatch({
      type: GET_DOCUMENT_TYPE,
      payload: res.data,
    });
  } catch (e) {}
};

export const deleteDocumentType = (id) => async (dispatch) => {
  await axios.delete(`/api/documentType/deleteDocumentType/${id}`);
  dispatch({
    type: DELETE_DOCUMENT_TYPE,
    payload: id,
  });
};
