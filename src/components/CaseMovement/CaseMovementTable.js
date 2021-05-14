import React, { Component } from "react";
import CaseMovementRow from "../CaseMovement/CaseMovementRow";
import { caseMovementTableTranslation } from "../../translations";

class CaseMovementTable extends Component {
  render() {
    const { acceptCaseAsOwnerOrProcessor } = this.props || {};
    const translation = caseMovementTableTranslation || {};

    const caseMovementList = this.props.caseMovementList?.map(
      (caseMovement) => (
        <CaseMovementRow
          key={caseMovement.id}
          caseMovement={caseMovement}
          acceptCaseAsOwnerOrProcessor={acceptCaseAsOwnerOrProcessor}
        />
      )
    );

    return (
      <div>
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>{translation.name}</th>
              <th>{translation.owner}</th>
              <th>{translation.processor}</th>
              <th>{translation.refersTo}</th>
              <th>{translation.startDate}</th>
              <th>{translation.role}</th>
              <th>{translation.confirm}</th>
            </tr>
          </thead>
          <tbody>{caseMovementList}</tbody>
        </table>
      </div>
    );
  }
}
export default CaseMovementTable;
