import axios from "axios";
import {
  GET_PROCESS,
  GET_PROCESSES,
  GET_ERRORS,
  DELETE_PROCESS,
  ADD_PROCESS,
  UPDATE_PROCESS,
} from "./types";

export const createProcess = (process) => async (dispatch) => {
  try {
    await axios.post("/api/process/create", process).then((response) => {
      dispatch({
        type: ADD_PROCESS,
        payload: response.data,
      });
    });
  } catch (exception) {}
};

export const updateProcess = (process) => async (dispatch) => {
    await axios.post("/api/process/update", process).then((response) => {
      dispatch({
        type: UPDATE_PROCESS,
        payload: response.data,
      });
    });
};

export const getProcess = (id) => async (dispatch) => {
    const res = await axios.get(`/api/process/find/${id}`);
    dispatch({
      type: GET_PROCESS,
      payload: res.data,
    });
};

export const getProcessess = () => async (dispatch) => {
  const res = await axios.get("/api/process/findAll");
  dispatch({
    type: GET_PROCESSES,
    payload: res.data,
  });
};

export const deleteProcess = (id) => async (dispatch) => {
  if (
    window.confirm("Da li zaista želite da trajno obrišete odabrani proces?")
  ) {
    await axios.delete(`/api/process/delete/${id}`);
    dispatch({
      type: DELETE_PROCESS,
      payload: id,
    });
  }
};
