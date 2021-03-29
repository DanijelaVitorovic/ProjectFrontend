import axios from "axios";

import {
  GET_ERRORS,
  GET_USER,
  GET_USERS,
  DEACTIVATE_USER,
  ACTIVATE_USER,
  DELETE_USER
} from "./types";

export const createUser = (user, history) => async dispatch => {
  try {
    await axios.post("/api/user/create", user);
    history.push("/userList");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getUsers = () => async dispatch => {
  const res = await axios.get("/api/user/findAll");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getUser = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/user/find/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (e) {
    history.push("/userList");
  }
};

export const deactivateUser = id => async dispatch => {
  if (
    window.confirm("Da li zaista želite da deaktivirate odabranog korisnika?")
  ) {
    const res = await axios.patch(`/api/user/deactivate/${id}`);
    dispatch({
      type: DEACTIVATE_USER,
      payload: res.data
    });
  }
};

export const activateUser = id => async dispatch => {
  if (
    window.confirm("Da li zaista želite da aktivirate odabranog korisnika?")
  ) {
    const res = await axios.patch(`/api/user/activate/${id}`);
    dispatch({
      type: ACTIVATE_USER,
      payload: res.data
    });
  }
};

export const deleteUser = id => async dispatch => {
  if (
    window.confirm("Da li zaista želite da trajno obrišete odabranog člana?")
  ) {
    const res = await axios.patch(`/api/user/delete/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: res.data
    });
  }
};
