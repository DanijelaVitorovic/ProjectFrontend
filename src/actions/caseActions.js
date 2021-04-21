import axios from "axios";
import {
  GET_ERRORS,
  UPDATE_CASE,
  ADD_CASE,
  DELETE_CASE,
  GET_CASES,
  GET_CASE,
} from "./types";

export const createCase = (caseForCreate) => async (dispatch) => {
  try {
    await axios.post("/api/case/createCase", caseForCreate).then((response) => {
      dispatch({
        type: ADD_CASE,
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

export const updateCase = (caseForUpdate) => async (dispatch) => {
  try {
    await axios.post("/api/case/updateCase", caseForUpdate).then((response) => {
      dispatch({
        type: UPDATE_CASE,
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

export const getCases = () => async (dispatch) => {
  const res = await axios.get("/api/case/findAllCases");
  dispatch({
    type: GET_CASES,
    payload: res.data,
  });
};

export const getCase = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/case/findCase/${id}`);
    dispatch({
      type: GET_CASE,
      payload: res.data,
    });
  } catch (e) {}
};

export const deleteCase = (id) => async (dispatch) => {
  if (window.confirm("Да ли заиста желите трајно да обришете предмет?")) {
    const res = await axios.delete(`/api/case/deleteCase/${id}`);
    dispatch({
      type: DELETE_CASE,
      payload: res.data,
    });
  }
};
