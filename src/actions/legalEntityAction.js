import axios from 'axios';
import {
  GET_ERRORS,
  GET_LEGAL_ENTITY,
  GET_LEGAL_ENTITIES,
  DELETE_LEGAL_ENTITY,
  ADD_LEGAL_ENTITY,
  UPDATE_LEGAL_ENTITY,
} from './types';

export const createLegalEntity = (legalEntity) => async (dispatch) => {
  try {
    await axios
      .post('/api/legalEntity/create', legalEntity)
      .then((response) => {
        dispatch({
          type: ADD_LEGAL_ENTITY,
          payload: response.data,
        });
      });
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data,
    });
  }
};

export const updateLegalEntity = (legalEntity) => async (dispatch) => {
  try {
    await axios
      .post('/api/legalEntity/update', legalEntity)
      .then((response) => {
        dispatch({
          type: UPDATE_LEGAL_ENTITY,
          payload: response.data,
        });
      });
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data,
    });
  }
};

export const getLegalEntites = () => async (dispatch) => {
  const res = await axios.get('/api/legalEntity/findAll');
  dispatch({
    type: GET_LEGAL_ENTITIES,
    payload: res.data,
  });
};

export const getLegalEntity = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/legalEntity/find/${id}`);
    dispatch({
      type: GET_LEGAL_ENTITY,
      payload: res.data,
    });
  } catch (e) {}
};

export const deleteLegalEntity = (id) => async (dispatch) => {
  await axios.delete(`/api/legalEntity/delete/${id}`, id);
  dispatch({
    type: DELETE_LEGAL_ENTITY,
    payload: id,
  });
};
