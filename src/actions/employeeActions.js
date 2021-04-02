import axios from "axios";
import {
  GET_ERRORS,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
} from "./types";

export const createEmployee = (employee, history) => async (dispatch) => {
  try {
    await axios.post("/api/employee/create", employee);
    history.push("/employeeList");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const updateEmployee = (employee, history) => async (dispatch) => {
  try {
    await axios.post("/api/employee/update", employee);
    history.push("/employeeList");
    dispatch({
      type: GET_ERRORS,
      payload: {},
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

export const getEmployee = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/employee/find/${id}`);
    dispatch({
      type: GET_EMPLOYEE,
      payload: res.data,
    });
  } catch (e) {
    history.push("/userList");
  }
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
