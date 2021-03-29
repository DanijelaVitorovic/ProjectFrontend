import axios from "axios";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import setJWTToken from "../securityUtils/setJWTToken";
var jwtDecode = require("jwt-decode");

export const login = LoginRequest => async dispatch => {
  try {
    const res = await axios.post("/api/user/login", LoginRequest);
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    setJWTToken(token);
    const decoded = jwtDecode(token);

    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
