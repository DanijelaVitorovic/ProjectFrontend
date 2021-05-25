import axios from 'axios';
import {
  GET_DOCUMENT_MOVEMENT_LIST,
  GET_DOCUMENT_MOVEMENT_BY_DOCUMENT_ID,
  ACCEPT_DOCUMENT,
  ADD_DOCUMENT_PROCEEDING_EMPLOYEE,
  ADD_DOCUMENT_VERIFICATION_EMPLOYEE,
  ADD_DOCUMENT_SINGING_EMPLOYEE,
  ADD_DOCUMENT_SINGED_EMPLOYEE,
  ADD_DOCUMENT_FINAL_EMPLOYEE,
  REVOKE_CASE_MOVEMENT,
  GET_ERRORS,
} from './types';

export const getDocumentMovementList = () => async (dispatch) => {
  await axios
    .get('/api/documentMovement/findAllDocumentMovements')
    .then((response) => {
      dispatch({
        type: GET_DOCUMENT_MOVEMENT_LIST,
        payload: response.data,
      });
    });
};

export const getDocumentMovementByDocumentId = (id) => async (dispatch) => {
  const res = await axios.get(
    `/api/documentMovement/findDocumentMovementByDocumentId/${id}`
  );
  dispatch({
    type: GET_DOCUMENT_MOVEMENT_BY_DOCUMENT_ID,
    payload: res.data,
  });
};

export const acceptDocument = (id) => async (dispatch) => {
  await axios
    .patch(`/api/documentMovement/acceptDocument/${id}`)
    .then((response) => {
      dispatch({
        type: ACCEPT_DOCUMENT,
        payload: response.data,
      });
    });
};

export const addDocumentVerificationEmployee =
  (documentMovement, closeModal) => async (dispatch) => {
    await axios
      .post('/api/document/addDocumentVerificationEmployee', documentMovement)
      .then((response) => {
        dispatch({
          type: ADD_DOCUMENT_VERIFICATION_EMPLOYEE,
          payload: response.data,
        });
      });
    closeModal();
  };

export const addDocumentSingingEmployee =
  (documentMovement, closeModal) => async (dispatch) => {
    await axios
      .post('/api/document/addDocumentSingingEmployee', documentMovement)
      .then((response) => {
        dispatch({
          type: ADD_DOCUMENT_SINGING_EMPLOYEE,
          payload: response.data,
        });
      });
    closeModal();
  };

export const addDocumentSingedEmployee =
  (documentMovement, closeModal) => async (dispatch) => {
    await axios
      .post('/api/document/addDocumentSingedEmployee', documentMovement)
      .then((response) => {
        dispatch({
          type: ADD_DOCUMENT_SINGED_EMPLOYEE,
          payload: response.data,
        });
      });
    closeModal();
  };

export const addDocumentFinalEmployee =
  (documentMovement, closeModal) => async (dispatch) => {
    await axios
      .post('/api/document/addDocumentFinalEmployee', documentMovement)
      .then((response) => {
        dispatch({
          type: ADD_DOCUMENT_FINAL_EMPLOYEE,
          payload: response.data,
        });
      });
    closeModal();
  };

export const revokeDocumentMovement =
  (documentMovement) => async (dispatch) => {
    try {
      await axios
        .post('/api/document/revokeDocumentMovement', documentMovement)
        .then((response) => {
          dispatch({
            type: REVOKE_CASE_MOVEMENT,
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
