import {
  GET_DOCUMENT,
  GET_DOCUMENTS,
  DELETE_DOCUMENT,
  ADD_DOCUMENT,
  UPDATE_DOCUMENT,
  GET_ERRORS,
  ADD_CASE_DOCUMENT_DTO,
} from "./types";
import axios from "axios";
import "react-confirm-alert/src/react-confirm-alert.css";

export const createDocument = (document) => async (dispatch) => {
  try {
    await axios.post("/api/document/create", document).then((response) => {
      dispatch({
        type: ADD_DOCUMENT,
        payload: response.data,
      });
    });
  } catch (exception) {
    dispatch({
      type: GET_ERRORS,
      payload: exception.response.data,
    });
  }
};

export const updateDocument = (document) => async (dispatch) => {
  try {
    await axios.post("/api/document/update", document).then((response) => {
      dispatch({
        type: UPDATE_DOCUMENT,
        payload: response.data,
      });
    });
  } catch (exception) {
    dispatch({
      type: GET_ERRORS,
      payload: exception.response.data,
    });
  }
};

export const getDocument = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/document/find/${id}`).then((response) => {
      dispatch({
        type: GET_DOCUMENT,
        payload: response.data,
      });
    });
  } catch (exception) {
    dispatch({
      type: GET_ERRORS,
      payload: exception.response.data,
    });
  }
};

export const getDocuments = () => async (dispatch) => {
  const res = await axios.get("/api/document/findAll").then((response) => {
    dispatch({
      type: GET_DOCUMENTS,
      payload: response.data,
    });
  });
};

export const deleteDocument = (id) => async (dispatch) => {
  await axios.delete(`/api/document/delete/${id}`);
  dispatch({
    type: DELETE_DOCUMENT,
    payload: id,
  });
};

export const createDocumentWithCase = (newDocument) => async (dispatch) => {
  try {
    await axios
      .post("/api/document/createDocumentWithCase", newDocument)
      .then((response) => {
        dispatch({
          type: ADD_CASE_DOCUMENT_DTO,
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
