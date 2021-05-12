import React, { Component, Fragment } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ModalForUpdateDocumentType from "./ModalForUpdateDocumentType";
import UpdateButton from "../Reusable/UpdateButton";
import { Badge } from "react-bootstrap";
import ConfirmAlert from "../Reusable/ConfirmAlert";
import { documentTypeRowTranslation } from "../../translations";
import DeleteButton from "../Reusable/DeleteButton";
import { CaseRowTranslation } from "../../translations";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DocumentTypeAttachmentList from "../Containers/DocumentTypeAttachmentList";
import Tooltip from "@material-ui/core/Tooltip";
import button from "../Reusable/button.css";
import ModalForUploadDocumentTypeAttachment from "../DocumentTypeAttachment/ModalForUploadDocumentTypeAttachment";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

export default class DocumentTypeRow extends Component {
  constructor() {
    super();
    this.state = { show: false, showModalForUpload: false };
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

  showModalForUploadAttachment = () => {
    this.setState({ showModalForUpload: true });
  };

  closeModalForUploadAttachment = () => {
    this.setState({ showModalForUpload: false });
  };

  handleUpload = (newDocumentTypeAttachment) => {
    this.props.uploadDocumentTypeAttachment(newDocumentTypeAttachment);
    this.closeModalForUploadAttachment();
  };

  onDeleteClick = (id) => {
    const translation = documentTypeRowTranslation || {};
    const { confirmString } = translation;
    const { deleteDocumentType } = this.props || {};
    ConfirmAlert(id, deleteDocumentType, confirmString);
  };

  render() {
    const {
      uploadDocumentTypeAttachment,
      documentType,
      getDocumentType,
      documentTypeForUpdate,
    } = this.props || {};
    const translation = CaseRowTranslation;

    const row = (
      <tr>
        <td>{documentType.id}</td>
        <td>{documentType.name}</td>
        <td>{documentType.description}</td>

        <td className="text-center">
          <UpdateButton showModal={this.showModal} id={documentType.id} />
        </td>

        <td className="text-center">
          <DeleteButton
            onDeleteClick={this.onDeleteClick}
            id={documentType.id}
          />
        </td>
        <td className="text-center">
          <Link
            to={`/documentTypeAttachmentList/${this.props.documentType.id}`}
            id={this.props.documentType.id}
          >
            <Tooltip title={translation.attachemntList} arrow>
              <IconButton color="primary">
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Tooltip title="Додај прилог" arrow>
            <IconButton
              type="submit"
              color="primary"
              size="lm"
              onClick={() => {
                this.showModalForUploadAttachment();
              }}
            >
              <NoteAddIcon />
            </IconButton>
          </Tooltip>
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
        {this.state.showModalForUpload && (
          <ModalForUploadDocumentTypeAttachment
            showModalForUpload={this.state.showModalForUpload}
            handleUpload={this.handleUpload}
            closeModalForUploadAttachment={this.closeModalForUploadAttachment}
            uploadDocumentTypeAttachment={uploadDocumentTypeAttachment}
            id={documentType.id}
          />
        )}
      </Fragment>
    );
  }
}
