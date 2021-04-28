import {
  GET_PROCESS,
  GET_PROCESSES,
  DELETE_PROCESS,
  ADD_PROCESS,
  UPDATE_PROCESS,
} from "../actions/types";

const initialState = {
  processList: [],
  process: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROCESS:
      return {
        ...state,
        process: action.payload,
      };
    case GET_PROCESSES:
      return {
        ...state,
        processList: action.payload,
      };
    case DELETE_PROCESS:
      return {
        ...state,
        processList: state.processList.filter(
          (process) => process.id !== action.payload
        ),
      };
    case ADD_PROCESS:
      return {
        ...state,
        processList: state.processList.concat(action.payload),
      };
    case UPDATE_PROCESS:
      return {
        ...state,
        processList: state.processList
          .filter((process) => process.id !== action.payload.id)
          .concat(action.payload),
      };
    default:
      return state;
  }
}
