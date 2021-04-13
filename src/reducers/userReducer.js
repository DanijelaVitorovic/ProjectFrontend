import {
  GET_USERS,
  GET_USER,
  DEACTIVATE_USER,
  ACTIVATE_USER,
  DELETE_USER,
  FIND_ALL_USERS_NOT_USED_IN_TABLE_EMPLOYEE_AS_FOREIGN_KEY,
} from "../actions/types";

const initialState = {
  users: [],
  user: {},
  usersNotUsedAsForeignKeyInTableEmployee: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DEACTIVATE_USER:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIVATE_USER:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
      };

    case FIND_ALL_USERS_NOT_USED_IN_TABLE_EMPLOYEE_AS_FOREIGN_KEY:
      return {
        ...state,
        usersNotUsedAsForeignKeyInTableEmployee: action.payload,
      };
    default:
      return state;
  }
}
