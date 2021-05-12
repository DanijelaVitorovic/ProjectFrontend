import React, { Component } from "react";
import {
  uploadDocumentTypeAttachment,
  getDocumentTypeAttachmentByDocumentTypeName,
  getDocumentTypeAttachmentListByDocumentType,
  deleteDocumentTypeAttachment,
  findAllDocumentTypeAttachments,
  clearDocumentTypeAttachmets,
} from "../../actions/documentTypeAttachmentActions";
import { connect } from "react-redux";
import DocumentTypeAttachmentTable from "../DocumentTypeAttachment/DocumentTypeAttachmentTable";

class DocumentTypeAttachmentList extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDocumentTypeAttachmentListByDocumentType(id);
  }

  render() {
    const {
      getDocumentTypeAttachmentByDocumentTypeName,
      clearDocumentTypeAttachmets,
      deleteDocumentTypeAttachment,
    } = this.props || {};

    const {
      documentTypeAttachmentList,
      documentTypeAttachment,
      attachmentContent,
    } = this.props.documentTypeAttachment || {};

    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3 success">
              <div className="card-header text-black ">
                <h3>Прилози</h3>
              </div>
              <div className="card-body">
                <DocumentTypeAttachmentTable
                  id={this.props.match.params.id}
                  documentTypeAttachmentList={documentTypeAttachmentList}
                  attachmentContent={attachmentContent}
                  uploadDocumentTypeAttachment={uploadDocumentTypeAttachment}
                  getDocumentTypeAttachmentByDocumentTypeName={
                    getDocumentTypeAttachmentByDocumentTypeName
                  }
                  clearDocumentTypeAttachmets={clearDocumentTypeAttachmets}
                  deleteDocumentTypeAttachment={deleteDocumentTypeAttachment}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  documentTypeAttachment: state.documentTypeAttachment,
  error: state.error,
});

export default connect(mapStateToProps, {
  getDocumentTypeAttachmentByDocumentTypeName,
  getDocumentTypeAttachmentListByDocumentType,
  deleteDocumentTypeAttachment,
  findAllDocumentTypeAttachments,
  clearDocumentTypeAttachmets,
  uploadDocumentTypeAttachment,
})(DocumentTypeAttachmentList);
