import React, { Component } from "react";
import { getCaseMovementEmployeeSend, caseRole } from "../../globals";
import { CaseMovementState, getCaseMovementSendTo } from "../../../src/globals";

export default class CaseMovementListRow extends Component {
  render() {
    const caseRoleConst = this.props.caseMovement.employeeProcessor
      ? caseRole.PROCESSOR
      : this.props.caseMovement.employeeOwner
      ? caseRole.OWNER
      : "";
    const caseMovementState = this.props.caseMovement?.movementState;

    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{getCaseMovementEmployeeSend(this.props.caseMovement)}</td>
        <td>{getCaseMovementSendTo(this.props.caseMovement)}</td>
        <td>{this.props.caseMovement?.sendTime}</td>
        <td>{this.props.caseMovement?.receivedTime}</td>
        <td>{caseRoleConst}</td>
        <td>{CaseMovementState[caseMovementState]?.translation}</td>
      </tr>
    );
  }
}
