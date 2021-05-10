import React, {Component} from 'react';
import {connect} from 'react-redux';
import {documentAttachmentListTranslation} from '../../translations';
import DocumentAttachemntTable from '../DocumentAttachment/DocumentAttachemntTable';

class DocumentAttachmentList extends Component {
  render() {
    const {
      documentAttachmentList,
      attachmentContent,
      getDocumentAttachmentByDocumentName,
      uploadDocumentAttachment,
      clearDocumentAttachmets,
      deleteDocumentAttachment,
      id,
    } = this.props || {};
    const translation = documentAttachmentListTranslation || {};
    const {Header} = translation;

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
                  id={id}
                  documentAttachmentList={documentAttachmentList}
                  attachmentContent={attachmentContent}
                  uploadDocumentAttachment={uploadDocumentAttachment}
                  clearDocumentAttachmets={clearDocumentAttachmets}
                  deleteDocumentAttachment={deleteDocumentAttachment}
                  getDocumentAttachmentByDocumentName={
                    getDocumentAttachmentByDocumentName
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentAttachmentList;
