import React, { Component } from "react";
import {
  uploadDocumentAttachment,
  getDocumentAttachmentByDocumentName,
  getDocumentAttachmentsByDocument,
  clearDocumentAttachmets,
  deleteDocumentAttachment,
} from '../../actions/documentAttachmentActions';
import { connect } from "react-redux";
import { documentAttachmentListTranslation } from "../../translations";
import DocumentAttachemntTable from "../DocumentAttachment/DocumentAttachemntTable";

class DocumentAttachmentList extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getDocumentAttachmentsByDocument(id);
  }
  render() {
    const {
      documentAttachmentList,
      attachmentContent,
      uploadDocumentAttachment,
      getDocumentAttachmentByDocumentName,
      clearDocumentAttachmets,
      deleteDocumentAttachment,
    } = this.props || {};

    const translation = documentAttachmentListTranslation || {};
    const { Header } = translation;
    
    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3 success">
              <div className="card-header text-black ">
                <h3>{Header.heading}</h3>
              </div>
              <div className="card-body">
                <DocumentAttachemntTable
                  documentAttachmentList={documentAttachmentList}
                  attachmentContent={attachmentContent}
                  uploadDocumentAttachment={uploadDocumentAttachment}
                  getDocumentAttachmentByDocumentName={
                    getDocumentAttachmentByDocumentName
                  }
                  clearDocumentAttachmets={clearDocumentAttachmets}
                  deleteDocumentAttachment={deleteDocumentAttachment}
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
  documentAttachmentList: state.documentAttachment.documentAttachmentList,
  documentAttachmentModal: state.documentAttachment.documentAttachment,
  attachmentContent: state.documentAttachment.attachmentContent,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  uploadDocumentAttachment,
  getDocumentAttachmentsByDocument,
  getDocumentAttachmentByDocumentName,
  clearDocumentAttachmets,
  deleteDocumentAttachment,
})(DocumentAttachmentList);
