import axios from "axios";
import {
  GET_ERRORS,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "./types";

export const createEmployee = (employee) => async (dispatch) => {
  try {
    await axios.post("/api/employee/create", employee).then((response) => {
      dispatch({
        type: ADD_EMPLOYEE,
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

export const updateEmployee = (employee) => async (dispatch) => {
  try {
    await axios.post("/api/employee/update", employee).then((response) => {
      dispatch({
        type: UPDATE_EMPLOYEE,
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

export const getEmployees = () => async (dispatch) => {
  const res = await axios.get("/api/employee/findAll");
  dispatch({
    type: GET_EMPLOYEES,
    payload: res.data,
  });
};

export const getEmployee = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/employee/find/${id}`);
    dispatch({
      type: GET_EMPLOYEE,
      payload: res.data,
    });
  } catch (e) {}
};

export const deleteEmployee = (id) => async (dispatch) => {
  if (window.confirm("Da li zaista želite da trajno obrišete zaposlenog?")) {
    const res = await axios.delete(`/api/employee/delete/${id}`);
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: res.data,
    });
  }
};
