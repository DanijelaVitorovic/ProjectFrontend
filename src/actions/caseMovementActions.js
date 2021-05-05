import axios from "axios";
import {
  GET_CASE_MOVEMENT_LIST,
  ACCEPT_CASE_AS_OWNER_OR_PROCESSOR,
  ADD_OWNER_TO_CASE,
  GET_ERRORS,
} from "../actions/types";

export const addOwnerToCase = (newCaseMovement, closeModal) => async (
  dispatch
) => {
  try {
    await axios
      .post("/api/case/addCaseOwner", newCaseMovement)
      .then((response) => {
        dispatch({
          type: ADD_OWNER_TO_CASE,
          payload: response.data,
        });
      });
    closeModal();
  } catch (exception) {
    dispatch({
      type: GET_ERRORS,
      payload: exception.response.data,
    });
  }
};

export const getCaseMovementList = () => async (dispatch) => {
  const res = await axios.get("/api/caseMovement/findAllCaseMovements");
  dispatch({
    type: GET_CASE_MOVEMENT_LIST,
    payload: res.data,
  });
};

export const acceptCaseAsOwnerOrProcessor = (id) => async (dispatch) => {
  await axios.patch(`/api/caseMovement/acceptCase/${id}`).then((response) => {
    dispatch({
      type: ACCEPT_CASE_AS_OWNER_OR_PROCESSOR,
      payload: response.data,
    });
  });
};