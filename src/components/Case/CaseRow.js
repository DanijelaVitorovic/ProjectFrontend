import React, { Component, Fragment } from "react";
import ModalForUpdateCase from "./ModalForUpdateCase";
import { Button } from "react-bootstrap";
import { formatDateFromBackend } from "../../utils";
import { CaseRowTranslation } from "../../translations";
import UpdateButton from "../Reusable/UpdateButton";

class CaseRow extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  handleUpdate = (updatedCase) => {
    this.props.updateCase(updatedCase);
    this.closeModal();
  };
  render() {
    const { getCase, caseForUpdate, physicalEntityList, employeeList } =
      this.props || {};

    const translation = CaseRowTranslation;

    const row = (
      <tr>
        <td>{this.props.case.caseName}</td>
        <td>{this.props.case.caseNumber}</td>
        <td>
          {this.props.case.owner &&
            this.props.case.owner.physicalEntity.firstName}
        </td>
        <td>
          {this.props.case.processor &&
            this.props.case.processor.physicalEntity.firstName}
        </td>
        <td>{this.props.case.refersTo.firstName}</td>
        <td>{formatDateFromBackend(new Date())}</td>
        <td>{this.props.case.caseStatus}</td>
        <td className="text-center" className="red">
          <UpdateButton showModal={this.showModal} id={document} />
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateCase
            show={this.state.show}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            id={this.props.case.id}
            getCase={getCase}
            caseForUpdate={caseForUpdate}
            physicalEntityList={physicalEntityList}
            employeeList={employeeList}
          />
        )}
      </Fragment>
    );
  }
}

export default CaseRow;
