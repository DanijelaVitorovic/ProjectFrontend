import axios from "axios";
import { ajax, expr } from "jquery";
import {
  GET_ORGANIZATIONAL_UNIT,
  GET_ORGANIZATIONAL_UNITS,
  DELETE_ORGANIZATIONAL_UNIT,
  ADD_ORGANIZATIONAL_UNIT,
  UPDATE_ORGANIZATIONAL_UNIT,
  GET_ERRORS,
} from "./types";

export const createNewOrganizationalUnit = (organizationalUnit) => async (
  dispatch
) => {
  try {
    await axios
      .post("/api/organizationalUnit/create", organizationalUnit)
      .then((response) => {
        dispatch({
          type: ADD_ORGANIZATIONAL_UNIT,
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
  const res = await axios
    .get(`/api/organizationalUnit/find/${id}`)
    .then((response) => {
      dispatch({
        type: GET_ORGANIZATIONAL_UNIT,
        payload: res.data,
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
  if (
    window.confirm(
      "Da li si siguran da zelis da obrises organizacionu jedinicu?"
    )
  ) {
    await axios
      .delete(`/api/organizationalUnit/delete/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ORGANIZATIONAL_UNIT,
          payload: id,
        });
      });
  }
};
