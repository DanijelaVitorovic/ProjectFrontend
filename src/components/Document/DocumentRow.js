import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateDocument from "./ModalForUpdateDocument";
import UpdateForm from "./UpdateForm";
import { Link } from "react-router-dom";

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
    const { document, getDocument, employees, caseList, updateDocument,physicalEntities } =
      this.props || {};
    const firstName = document.employeeCreated.physicalEntity.firstName;
    const lastName = document.employeeCreated.physicalEntity.lastName;
    const _case = document?._case || {};
    const row = (
      <tr>
        <td>{document.id}</td>
        <td>{document.title}</td>
        <td>{document.documentType}</td>
        <td>{document.documentStatus}</td>
        <td>{firstName + " " + lastName}</td>
        <td>{_case.caseName}</td>
        
        <td className="text-center">
          <Badge pill variant="danger">
            <div onClick={() => this.onDeleteClick(document.id)}>
              <i className="fas fa-trash-alt fa-2x" />
            </div>
          </Badge>
        </td>
        <td className="text-center">
          <Link to={`/updateForm/${document.id}`}>
            <Button className="button" variant="link">
              <i className="fas fa-pen-alt fa-2x"></i>
            </Button>
          </Link>
        </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        <ModalForUpdateDocument
          show={this.state.show}
          id={document.id}
          documentForUpdate={document}
          handleUpdate={this.handleUpdate}
          closeModal={this.closeModal}
          getDocument={getDocument}
          employees={employees}
          caseList={caseList}
          physicalEntities={physicalEntities}
        />
      </Fragment>
    );
  }
}
