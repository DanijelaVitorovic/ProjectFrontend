import axios from 'axios';
import {
  CREATE_DOCUMENT_CLASSIFICATION,
  UPDATE_DOCUMENT_CLASSIFICATION,
  GET_DOCUMENT_CLASSIFICATION,
  GET_DOCUMENT_CLASSIFICATION_LIST,
  DELETE_DOCUMENT_CLASSIFICATION,
} from './types';

export const createDocumentClassificaton = (
  documentClassification,
  closeModal
) => async (dispatch) => {
  await axios
    .post(
      '/api/documentClassification/createDocumentClassification',
      documentClassification
    )
    .then((response) => {
      dispatch({
        type: CREATE_DOCUMENT_CLASSIFICATION,
        payload: response.data,
      });
    });
  closeModal();
};

export const updateDocumentClassificaton = (documentClassification) => async (
  dispatch
) => {
  await axios
    .post(
      '/api/documentClassification/updateDocumentClassification',
      documentClassification
    )
    .then((response) => {
      dispatch({
        type: UPDATE_DOCUMENT_CLASSIFICATION,
        payload: response.data,
      });
    });
};

export const getDocumentClassificatonList = () => async (dispatch) => {
  const res = await axios.get(
    '/api/documentClassification/findAllDocumentClassifications'
  );
  dispatch({
    type: GET_DOCUMENT_CLASSIFICATION_LIST,
    payload: res.data,
  });
};

export const getDocumentClassificaton = (id) => async (dispatch) => {
  const res = await axios.get(
    `/api/documentClassification/findDocumentClassificationById/${id}`
  );
  dispatch({
    type: GET_DOCUMENT_CLASSIFICATION,
    payload: res.data,
  });
};

export const deleteDocumentClassificaton = (id) => async (dispatch) => {
  await axios.delete(
    `/api/documentClassification/deleteDocumentClassification/${id}`,
    id
  );
  dispatch({
    type: DELETE_DOCUMENT_CLASSIFICATION,
    payload: id,
  });
};
