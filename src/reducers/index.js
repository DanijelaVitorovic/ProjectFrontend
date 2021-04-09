import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import securityReducer from "./securityReducer";
import legalEntityReducer from "./legalEntityReducer";
import processTypesReducer from "./processTypeReducer";
import employeeReducer from "./employeeReducer";
import physicalEntityReducer from "./physicalEntityReducer";
import organizationalUnitReducer from "./organizationalUnitReducer";

export default combineReducers({
  errors: errorReducer,
  loggedUser: securityReducer,
  user: userReducer,
  legalEntity: legalEntityReducer,
  processType: processTypesReducer,
  employee: employeeReducer,
  physicalEntity: physicalEntityReducer,
  organizationalUnit: organizationalUnitReducer,
});
