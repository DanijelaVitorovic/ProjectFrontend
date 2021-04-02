import { DELETE_EMPLOYEE, GET_EMPLOYEES, GET_EMPLOYEE } from "../actions/types";

const initialState = {
  employees: [],
  employee: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
}
