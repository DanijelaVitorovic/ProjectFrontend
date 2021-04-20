import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateDocument from "./ModalForUpdateDocument";

export default class DocumentRow extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  handleUpdate = (updatedDocument) => {
    this.props.updateDocument(updatedDocument);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteDocument(id);
  };

  render() {
    const {
      document,
      getDocument,
      employees,
      caseList,
      caseProcessingViewSignal,
    } = this.props || {};
    const firstName = document.employeeCreated.physicalEntity.firstName;
    const lastName = document.employeeCreated.physicalEntity.lastName;

    const renderRow = (
      <tr>
        <td>{document.id}</td>
        <td>{document.title}</td>
        <td>{document.description}</td>
        <td>{document.documentType}</td>
        <td>{document.documentStatus}</td>
        <td>{firstName + " " + lastName}</td>
        {!caseProcessingViewSignal && (
          <Fragment>
            <td>{document._case.caseName}</td>
            <td className="text-center">
              <Button
                className="button"
                variant="link"
                onClick={() => {
                  this.showModal();
                }}
              >
                <i className="fas fa-pen-alt fa-2x"></i>
              </Button>
            </td>
            <td className="text-center">
              <Badge variant="danger">
                <div onClick={() => this.onDeleteClick(document.id)}>
                  <i className="fas fa-trash-alt fa-2x" />
                </div>
              </Badge>
            </td>
          </Fragment>
        )}
      </tr>
    );

    return (
      <Fragment>
        {renderRow}
        <ModalForUpdateDocument
          show={this.state.show}
          id={document.id}
          documentForUpdate={document}
          handleUpdate={this.handleUpdate}
          closeModal={this.closeModal}
          getDocument={getDocument}
          employees={employees}
          caseList={caseList}
        />
      </Fragment>
    );
  }
}
