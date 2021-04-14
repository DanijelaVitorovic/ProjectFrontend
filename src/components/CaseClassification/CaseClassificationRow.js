import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateCaseClassification from "./ModalForUpdateCaseClassification";

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
          <Button
            class="btn btn-default"
            type="submit"
            variant="outline-warning"
            onClick={() => {
              this.showModal();
            }}
          >
            Измени
          </Button>
        </td>
        <td className="text-center">
          <Badge variant="danger">
            <div onClick={() => this.onDeleteClick(caseClassification.id)}>
              <i className="fas fa-trash-alt fa-2x" />
            </div>
          </Badge>
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
