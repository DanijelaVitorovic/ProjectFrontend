import {
  GET_PROCESS_TYPE,
  GET_PROCESS_TYPES,
  DELETE_PROCESS_TYPE,
  ADD_PROCESS_TYPE,
  UPDATE_PROCESS_TYPE,
} from "../actions/types";

const initialState = {
  processTypeList: [],
  processType: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROCESS_TYPE:
      return {
        ...state,
        processType: action.payload,
      };
    case GET_PROCESS_TYPES:
      return {
        ...state,
        processTypeList: action.payload,
      };
    case DELETE_PROCESS_TYPE:
      return {
        ...state,
        processTypeList: state.processTypeList.filter(
          (processType) => processType.id != action.payload
        ),
      };
    case ADD_PROCESS_TYPE:
      return {
        ...state,
        processTypeList: state.processTypeList.concat(action.payload),
      };
    case UPDATE_PROCESS_TYPE:
      return {
        ...state,
        processTypeList: state.processTypeList
          .filter((processType) => processType.id != action.payload.id)
          .concat(action.payload),
      };
    default:
      return state;
  }
}
