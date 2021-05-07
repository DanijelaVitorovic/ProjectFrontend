import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import securityReducer from "./securityReducer";
import processReducer from "./processReducer";
import legalEntityReducer from "./legalEntityReducer";
import processTypeReducer from "./processTypeReducer";
import employeeReducer from "./employeeReducer";
import physicalEntityReducer from "./physicalEntityReducer";
import organizationalUnitReducer from "./organizationalUnitReducer";
import caseReducer from "./caseReducer";
import documentReducer from "./documentReducer";
import caseClassificationReducer from "./caseClassificationReducer";
import caseMovementReducer from "./caseMovementReducer";
import documentAttachmentReducer from "./documentAttachmentReducer";
import documentTypeReducer from "./documentTypeReducer";

export default combineReducers({
  error: errorReducer,
  loggedUser: securityReducer,
  user: userReducer,
  process: processReducer,
  legalEntity: legalEntityReducer,
  processType: processTypeReducer,
  employee: employeeReducer,
  physicalEntity: physicalEntityReducer,
  organizationalUnit: organizationalUnitReducer,
  case: caseReducer,
  document: documentReducer,
  caseClassification: caseClassificationReducer,
  caseMovement: caseMovementReducer,
  documentAttachment: documentAttachmentReducer,
  documentType: documentTypeReducer,
});
