import axios from "axios";

import {
  GET_ERRORS,
  GET_PHYSICAL_ENTITY,
  GET_PHYSICAL_ENTITIES,
  DELETE_PHYSICAL_ENTITY,
  UPDATE_PHYSICAL_ENTITY,
  ADD_PHYSICAL_ENTITY,
} from "./types";

export const createPhysicalEntity = (physicalEntity) => async (dispatch) => {
  try {
    await axios
      .post("/api/physicalEntity/create", physicalEntity)
      .then((response) => {
        dispatch({
          type: ADD_PHYSICAL_ENTITY,
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

export const updatePhysicalEntity = (physicalEntity) => async (dispatch) => {
  try {
    await axios
      .post("/api/physicalEntity/update", physicalEntity)
      .then((response) => {
        dispatch({
          type: UPDATE_PHYSICAL_ENTITY,
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

export const getPhysicalEntity = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/physicalEntity/find/${id}`);
    dispatch({
      type: GET_PHYSICAL_ENTITY,
      payload: res.data,
    });
  } catch (err) {}
};

export const getPhysicalEntities = () => async (dispatch) => {
  const res = await axios.get("/api/physicalEntity/findAll");
  dispatch({
    type: GET_PHYSICAL_ENTITIES,
    payload: res.data,
  });
};

export const deletePhysicalEntity = (id) => async (dispatch) => {
  if (window.confirm("Da li zaista želite da trajno obrišete fizičko lice?")) {
    const res = await axios.delete(`/api/physicalEntity/delete/${id}`);
    dispatch({
      type: DELETE_PHYSICAL_ENTITY,
      payload: res.data,
    });
  }
};
