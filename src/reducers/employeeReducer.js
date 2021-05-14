import {
  DELETE_EMPLOYEE,
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  FIND_USER_BY_USERNAME,
} from "../actions/types";

const initialState = {
  employeeList: [],
  employee: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employeeList: action.payload,
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employeeList: action.payload,
      };

    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList.concat(action.payload),
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList
          .filter((employee) => employee.id != action.payload.id)
          .concat(action.payload),
      };
    case FIND_USER_BY_USERNAME:
      return {
        ...state,
        employee: action.payload,
      };

    default:
      return state;
  }
}
