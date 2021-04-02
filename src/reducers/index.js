import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import securityReducer from "./securityReducer";
import physicalEntityReducer from "./physicalEntityReducer";

export default combineReducers({
  errors: errorReducer,
  loggedUser: securityReducer,
  user: userReducer,
  physicalEntity: physicalEntityReducer,
});
