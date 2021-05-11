import React, { Component, Fragment } from "react";
import ModalForViewDocumentTypeAttachment from "./ModalForViewDocumentTypeAttachment";
import ConfirmAlert from "../Reusable/ConfirmAlert";
import { documentAttachmentRowTranslation } from "../../translations";
import DeleteButton from "../Reusable/DeleteButton";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import IconButton from "@material-ui/core/IconButton";

export default class DocumentTypeAttachmentRow extends Component {
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
    this.props.clearDocumentTypeAttachmets();
  };

  onDeleteClick = (id) => {
    const translation = documentAttachmentRowTranslation;
    const { deleteString } = translation;
    const { deleteDocumentTypeAttachment } = this.props || {};
    ConfirmAlert(id, deleteDocumentTypeAttachment, deleteString);
  };

  render() {
    const {
      documentTypeAttachment,
      getDocumentTypeAttachmentByDocumentTypeName,
      attachmentContent,
      clearDocumentTypeAttachmets,
    } = this.props || {};

    const firstIndex = documentTypeAttachment?.mimeType?.lastIndexOf(".") + 1;
    const lastIndex = documentTypeAttachment?.mimeType?.length;
    const type = documentTypeAttachment?.mimeType?.substring(
      firstIndex,
      lastIndex
    );
    const fileType = documentTypeAttachment?.mimeTypeShort?.substring(
      documentTypeAttachment?.mimeTypeShort?.lastIndexOf(".") + 1,
      documentTypeAttachment?.mimeTypeShort?.length
    );

    const row = (
      <tr>
        <td>{documentTypeAttachment?.id}</td>
        <td>{type}</td>
        <td>{documentTypeAttachment.documentType?.name}</td>
        <td>{documentTypeAttachment?.documentName}</td>
        <td className="text-center">
          <IconButton
            type="submit"
            color="primary"
            size="lm"
            onClick={() => this.showModal()}
          >
            <FindInPageIcon />
          </IconButton>
        </td>

        <td className="text-center">
          <DeleteButton
            onDeleteClick={this.onDeleteClick}
            id={documentTypeAttachment?.id}
          />
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForViewDocumentTypeAttachment
            show={this.state.show}
            uuidDocName={documentTypeAttachment.uuidDocName}
            fileType={fileType}
            documentAttachment={documentTypeAttachment}
            attachmentContent={attachmentContent}
            closeModal={this.closeModal}
            getDocumentTypeAttachmentByDocumentTypeName={
              getDocumentTypeAttachmentByDocumentTypeName
            }
            clearDocumentTypeAttachmets={clearDocumentTypeAttachmets}
          />
        )}
      </Fragment>
    );
  }
}
