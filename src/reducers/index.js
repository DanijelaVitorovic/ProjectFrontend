import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  loggedUser: securityReducer,
  user: userReducer
});
