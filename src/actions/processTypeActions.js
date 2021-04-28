import axios from "axios";
import {
  GET_PROCESS_TYPE,
  GET_PROCESS_TYPES,
  DELETE_PROCESS_TYPE,
  GET_ERRORS,
  UPDATE_PROCESS_TYPE,
  ADD_PROCESS_TYPE,
} from "./types";

export const createProcessType = (processType) => async (dispatch) => {
  try {
    await axios
      .post("/api/processType/create", processType)
      .then((response) => {
        dispatch({
          type: ADD_PROCESS_TYPE,
          payload: response.data,
        });
      });
  } catch (exception) {}
};

export const updateProcessType = (processType) => async (dispatch) => {
  try {
    await axios
      .post("/api/processType/update", processType)
      .then((response) => {
        dispatch({
          type: UPDATE_PROCESS_TYPE,
          payload: response.data,
        });
      });
  } catch (exception) {}
};

export const getProcessType = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/processType//find/${id}`, id);
    dispatch({
      type: GET_PROCESS_TYPE,
      payload: res.data,
    });
  } catch (exception) {}
};

export const getProcessTypes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/processType/findAll");
    dispatch({
      type: GET_PROCESS_TYPES,
      payload: res.data,
    });
  } catch (exception) {}
};

export const deleteProcessType = (id) => async (dispatch) => {
  await axios.delete(`/api/processType/delete/${id}`, id);
  dispatch({
    type: DELETE_PROCESS_TYPE,
    payload: id,
  });
};
