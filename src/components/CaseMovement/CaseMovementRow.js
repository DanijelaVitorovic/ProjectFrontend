import React, { Component } from "react";
import {
  getCaseOwner,
  getCaseProcessor,
  getCaseRefersTo,
  caseRole,
} from "../../globals";
import { formatDateFromBackend } from "../../utils";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Tooltip from "@material-ui/core/Tooltip";
import ConfirmAlert from "../Reusable/ConfirmAlert";
import { caseMovementRowTranslation } from "../../translations";

class CaseMovementRow extends Component {
  acceptCase = (id) => {
    const translation = caseMovementRowTranslation || {};
    const { confirmString, acceptTooltip } = translation;
    const { acceptCaseAsOwnerOrProcessor } = this.props || {};
    ConfirmAlert(id, acceptCaseAsOwnerOrProcessor, confirmString);
  };

  render() {
    const { caseMovement } = this.props || {};
    const translation = caseMovementRowTranslation || {};
    const { acceptTooltip } = translation;
    const caseRoleConst = caseMovement.employeeOwner
      ? caseRole.OWNER
      : caseMovement.employeeProcessor
      ? caseRole.PROCESSOR
      : "";

    return (
      <tr>
        <td>{caseMovement._case.caseName}</td>
        <td>{getCaseOwner(caseMovement._case)}</td>
        <td>{getCaseProcessor(caseMovement._case)}</td>
        <td>{getCaseRefersTo(caseMovement._case)}</td>
        <td>{formatDateFromBackend(caseMovement._case.startDate)}</td>
        <td>{caseRoleConst}</td>
        <td className="text-center">
          <Tooltip title={acceptTooltip}>
            <div onClick={() => this.acceptCase(caseMovement.id)}>
              <DoneAllIcon style={{ color: "12C11D" }} />
            </div>
          </Tooltip>
        </td>
      </tr>
    );
  }
}

export default CaseMovementRow;
