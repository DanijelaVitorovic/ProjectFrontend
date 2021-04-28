import axios from "axios";
import { ajax, expr } from "jquery";
import {
  GET_ORGANIZATIONAL_UNIT,
  GET_ORGANIZATIONAL_UNITS,
  DELETE_ORGANIZATIONAL_UNIT,
  ADD_ORGANIZATIONAL_UNIT,
  UPDATE_ORGANIZATIONAL_UNIT,
  GET_ERRORS,
  RESET_ERROR,
} from "./types";

export const createNewOrganizationalUnit = (
  organizationalUnit,
  closeModal
) => async (dispatch) => {
  try {
    await axios
      .post("/api/organizationalUnit/create", organizationalUnit)
      .then((response) => {
        dispatch({
          type: ADD_ORGANIZATIONAL_UNIT,
          payload: response.data,
        });
      });
    closeModal();
  } catch (exception) {
    dispatch({
      type: GET_ERRORS,
      payload: exception.response.data,
    });
  }
};

export const updateOrganizationalUnit = (organizationalUnit) => async (
  dispatch
) => {
  try {
    await axios
      .post("/api/organizationalUnit/update", organizationalUnit)
      .then((response) => {
        dispatch({
          type: UPDATE_ORGANIZATIONAL_UNIT,
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

export const getOrganizationalUnit = (id) => async (dispatch) => {
  await axios.get(`/api/organizationalUnit/find/${id}`).then((response) => {
    dispatch({
      type: GET_ORGANIZATIONAL_UNIT,
      payload: response.data,
    });
  });
};

export const getOrganizationalUnits = () => async (dispatch) => {
  const res = await axios.get("/api/organizationalUnit/findAll");
  dispatch({
    type: GET_ORGANIZATIONAL_UNITS,
    payload: res.data,
  });
};

export const deleteOrganizationalUnit = (id) => async (dispatch) => {
  await axios
    .delete(`/api/organizationalUnit/delete/${id}`)
    .then((response) => {
      dispatch({
        type: DELETE_ORGANIZATIONAL_UNIT,
        payload: id,
      });
    });
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};
