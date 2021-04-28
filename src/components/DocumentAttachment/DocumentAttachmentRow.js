import React, { Component, Fragment} from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForViewFile from "./ModalForViewFile";
import DeleteButton from '../Reusable/DeleteButton';
import ConfirmAlert from '../Reusable/ConfirmAlert';
import { documentAttachmentRowTranslation } from "../../translations";

class DocumentAttachmentRow extends Component {
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
    this.props.clearDocumentAttachmets();
  };

  onDeleteClick = (id) => {
    
      const translation = documentAttachmentRowTranslation;
      const {deleteString} = translation;
    const {deleteDocumentAttachment} = this.props || {};
    ConfirmAlert(id, deleteDocumentAttachment, deleteString);
  };

  render() {
    const {
      documentAttachment,
      getDocumentAttachmentByDocumentName,
      attachmentContent,
      clearDocumentAttachmets,
    } = this.props || {};
      const firstIndex = documentAttachment?.mimeType?.lastIndexOf('.') + 1;
      const lastIndex = documentAttachment?.mimeType?.length;
      const type = documentAttachment?.mimeType?.substring(
        firstIndex,
        lastIndex
      );
      const fileType = documentAttachment?.mimeTypeShort?.substring(
        documentAttachment?.mimeTypeShort?.lastIndexOf('.') + 1,
        documentAttachment?.mimeTypeShort?.length
      );
    const row = (
      <tr>
        <td>{documentAttachment?.id}</td>
        <td>{type}</td>
        <td>{documentAttachment.document?.id}</td>
        <td>{documentAttachment?.documentName}</td>
        <td className="text-center">
         <button
        class = "button"
          variant="link"
          onClick={() => this.showModal()}
        ><i class="far fa-ey fa-eye fa-2x"></i>
        </button>
        </td>
        <td className="text-center">
          <DeleteButton onDeleteClick = {this.onDeleteClick} id = {documentAttachment?.id} />
        </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForViewFile
            show={this.state.show}
            uuidDocName={documentAttachment.uuidDocName}
            fileType={fileType}
            documentAttachment={documentAttachment}
            attachmentContent={attachmentContent}
            closeModal={this.closeModal}
            getDocumentAttachmentByDocumentName={
              getDocumentAttachmentByDocumentName
            }
            clearDocumentAttachmets={clearDocumentAttachmets}
          />
        )}
      </Fragment>
    );
  }
}

export default DocumentAttachmentRow;
