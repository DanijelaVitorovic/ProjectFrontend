import React, { Component, Fragment } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ModalForUpdateDocumentType from "./ModalForUpdateDocumentType";
import UpdateButton from "../Reusable/UpdateButton";
import { Badge } from "react-bootstrap";
import ConfirmAlert from "../Reusable/ConfirmAlert";
import { documentTypeRowTranslation } from "../../translations";

export default class DocumentTypeRow extends Component {
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

  handleUpdate = (updatedDocumentType) => {
    this.props.updateDocumentType(updatedDocumentType);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = documentTypeRowTranslation || {};
    const { confirmString } = translation;
    const { deleteDocumentType } = this.props || {};
    ConfirmAlert(id, deleteDocumentType, confirmString);
  };

  render() {
    const { documentType, getDocumentType, documentTypeForUpdate } =
      this.props || {};

    const row = (
      <tr>
        <td>{documentType.id}</td>
        <td>{documentType.name}</td>
        <td>{documentType.description}</td>

        <td className="text-center">
          <UpdateButton showModal={this.showModal} id={documentType.id} />
        </td>

        <td className="text-center" style={{ paddingTop: 25 }}>
          <Badge variant="danger">
            <div onClick={() => this.onDeleteClick(documentType.id)}>
              <DeleteForeverIcon />
            </div>
          </Badge>{" "}
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateDocumentType
            show={this.state.show}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            id={documentType.id}
            getDocumentType={getDocumentType}
            documentTypeForUpdate={documentTypeForUpdate}
          />
        )}
      </Fragment>
    );
  }
}
