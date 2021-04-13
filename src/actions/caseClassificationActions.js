import axios from "axios";
import {
  GET_ERRORS,
  GET_CASE_CLASSIFICATION,
  GET_CASE_CLASSIFICATION_LIST,
  DELETE_CASE_CLASSIFICATION,
  ADD_CASE_CLASSIFICATION,
  UPDATE_CASE_CLASSIFICATION,
} from "../actions/types";

export const createCaseClassification = (caseClassificationForCreate) => async (
  dispatch
) => {
  try {
    await axios
      .post(
        "/api/caseClassification/createCaseClassification",
        caseClassificationForCreate
      )
      .then((response) => {
        dispatch({
          type: ADD_CASE_CLASSIFICATION,
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

export const updateCaseClassification = (caseClassificationForUpdate) => async (
  dispatch
) => {
  try {
    await axios
      .post(
        "/api/caseClassification/updateCaseClassification",
        caseClassificationForUpdate
      )
      .then((response) => {
        dispatch({
          type: UPDATE_CASE_CLASSIFICATION,
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

export const getCaseClassificationList = () => async (dispatch) => {
  const res = await axios.get(
    "/api/caseClassification/findAllCaseClassifications"
  );
  dispatch({
    type: GET_CASE_CLASSIFICATION_LIST,
    payload: res.data,
  });
};

export const getCaseClassification = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/caseClassification/findCaseClassification/${id}`
    );
    dispatch({
      type: GET_CASE_CLASSIFICATION,
      payload: res.data,
    });
  } catch (e) {}
};

export const deleteCaseClassification = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Да ли заиста желите трајно да обришете ову предметну класификацију?"
    )
  ) {
    await axios.delete(
      `/api/caseClassification/deleteCaseClassification/${id}`
    );
    dispatch({
      type: DELETE_CASE_CLASSIFICATION,
      payload: id,
    });
  }
};
