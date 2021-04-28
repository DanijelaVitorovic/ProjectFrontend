import React, { Component, Fragment } from "react";
import ModalForAddDocument from "../Document/ModalForAddDocument";
import { Button } from "react-bootstrap";
import DocumentAttachmentRow from "../DocumentAttachment/DocumentAttachmentRow";
import { documentAttachmentTableTranslation } from "../../translations";
import ModalForUploadDocumentAttachment from "./ModalForUploadDocumentAttachment";

class DocumentAttachemntTable extends Component {
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

  handleAdd = (newDocumentAttachment) => {
    this.props.uploadDocumentAttachment(newDocumentAttachment);
    this.closeModal();
  };

  render() {
    const {
      documentAttachmentList,
      attachmentContent,
      uploadDocumentAttachment,
      getDocumentAttachmentByDocumentName,
      clearDocumentAttachmets,
      deleteDocumentAttachment,
    } = this.props || {};

    const translation = documentAttachmentTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;

    const documentAttachments = documentAttachmentList.map(
      (documentAttachment) => (
        <DocumentAttachmentRow
          key={documentAttachment.id}
          documentAttachment={documentAttachment}
          attachmentContent={attachmentContent}
          uploadDocumentAttachment={uploadDocumentAttachment}
          getDocumentAttachmentByDocumentName={
            getDocumentAttachmentByDocumentName
          }
          clearDocumentAttachmets={clearDocumentAttachmets}
          deleteDocumentAttachment={deleteDocumentAttachment}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <div class="btn-group">
          <div class="btn-group">
            <Button
              className="btn btn-default "
              type="submit"
              variant="info"
              size="lm"
              onClick={() => {
                this.showModal();
              }}
            >
              {Buttons.addNewDocumentAttachment}
            </Button>
          </div>
        </div>
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.mimeType}</th>
              <th scope="col">{HeaderColumns.document}</th>
              <th scope="col">{HeaderColumns.documentName}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.view}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>
          <tbody>{documentAttachments}</tbody>
        </table>
      </div>
    );
    return (
      <Fragment>
        {table}
        {this.state.show && <ModalForUploadDocumentAttachment
          show = {this.state.show}
          handleAdd={this.handleAdd}
          closeModal={this.closeModal}
          uploadDocumentAttachment = {uploadDocumentAttachment} />}
      </Fragment>
    );
  }
}

export default DocumentAttachemntTable;
