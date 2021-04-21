import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateCaseClassification from "./ModalForUpdateCaseClassification";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

class CaseClassificationRow extends Component {
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

  handleUpdate = (updatedCaseClassification) => {
    this.props.updateCaseClassification(updatedCaseClassification);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteCaseClassification(id);
  };

  render() {
    const {
      caseClassification,
      getCaseClassification,
      organizationalUnits,
      caseClassificationForUpdate,
    } = this.props || {};

    const row = (
      <tr>
        <td>{caseClassification.code}</td>
        <td>{caseClassification.name}</td>
        <td>
          {caseClassification.organizationalUnit &&
            caseClassification.organizationalUnit.name}
        </td>

        <td className="text-center">
          <UpdateButton showModal={this.showModal} id={document} />
        </td>

        <td className="text-center" style={{ paddingTop: 25 }}>
          <DeleteButton onDeleteClick={this.onDeleteClick} id={document.id} />
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateCaseClassification
            show={this.state.show}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            id={caseClassification.id}
            getCaseClassification={getCaseClassification}
            organizationalUnits={organizationalUnits}
            caseClassificationForUpdate={caseClassificationForUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default CaseClassificationRow;
