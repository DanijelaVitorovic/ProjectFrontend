import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import ModalForUpdateDocument from "./ModalForUpdateDocument";
import {
  getDocumentEmployeeCreated,
} from "../../../src/globals";
import DeleteButton from "../Reusable/DeleteButton";
import ConfirmAlert from "../Reusable/ConfirmAlert";
import { Link } from "react-router-dom";
import { documentRowTranslation } from "../../translations";

export default class DocumentRow extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  handleUpdate = (updatedDocument) => {
    this.props.updateDocument(updatedDocument);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = documentRowTranslation;
    const {deleteString} = translation;
    const {deleteDocument} = this.props || {};
    ConfirmAlert(id, deleteDocument, deleteString);
  };

  render() {
    const {
      document,
      caseProcessingViewSignal,
      getDocument,
      employeeList,
      caseList,
      physicalEntityList,
    } = this.props || {};

    const renderRow = (
      <tr>
        <td>{document.id}</td>
        <td>{document.title}</td>
        <td>{document.documentType}</td>
        <td>{document.documentStatus}</td>
        <td>{getDocumentEmployeeCreated(document)}</td>
        {!caseProcessingViewSignal && (
          <Fragment>
            <td>{document._case.caseName}</td>

            <td className="text-center">
              <Link to={`/documentProcessing/${document.id}`}>
                <Button className="button" variant="link">
                  <i className="fas fa-pen-alt fa-2x"></i>
                </Button>
              </Link>
            </td>

            <td className="text-center">
              <DeleteButton
                onDeleteClick={this.onDeleteClick}
                id={document.id}
              />
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
          employeeList={employeeList}
          caseList={caseList}
          physicalEntityList={physicalEntityList}
        />
      </Fragment>
    );
  }
}
