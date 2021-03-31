import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import securityReducer from "./securityReducer";
import legalEntityReducer from "./legalEntityReducer";
import processTypesReducer from "./processTypeReducer";

export default combineReducers({
  errors: errorReducer,
  loggedUser: securityReducer,
  user: userReducer,
  legalEntity: legalEntityReducer,
  processType: processTypesReducer
});
