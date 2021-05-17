import React, { Component } from "react";
import {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  createDocumentWithCase,
  createDocumentWithCaseAndAttachment,
} from '../../actions/documentActions';
import {getCases} from '../../actions/caseActions';
import {getEmployees} from '../../actions/employeeActions';
import {connect} from 'react-redux';
import DocumentTable from '../Document/DocumentTable';
import {getPhysicalEntities} from '../../actions/physicalEntityActions';
import {documentListTranslation} from '../../translations';
import {getProcessTypes} from '../../actions/processTypeActions';

class DocumentList extends Component {
  componentDidMount() {
    this.props.getDocuments();
    this.props.getCases();
    this.props.getPhysicalEntities();
    this.props.getEmployees();
    this.props.getProcessTypes();
  }
  render() {
    const {
      createDocument,
      updateDocument,
      getDocument,
      deleteDocument,
      createDocumentWithCase,
      createDocumentWithCaseAndAttachment,
      employeeList,
      physicalEntityList,
      caseList,
      documentList,
      processTypeList,
    } = this.props || {};

    const translation = documentListTranslation || {};
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
                <DocumentTable
                  documentList={documentList}
                  createDocument={createDocument}
                  updateDocument={updateDocument}
                  getDocument={getDocument}
                  deleteDocument={deleteDocument}
                  employeeList={employeeList}
                  caseList={caseList}
                  processTypeList={processTypeList}
                  physicalEntityList={physicalEntityList}
                  createDocumentWithCase={createDocumentWithCase}
                  createDocumentWithCaseAndAttachment={
                    createDocumentWithCaseAndAttachment
                  }
                />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  documentList: state.document.documentList,
  document: state.document.document,
  documentAttachmentList: state.documentAttachment.documentAttachmentList,
  employeeList: state.employee.employeeList,
  physicalEntityList: state.physicalEntity.physicalEntityList,
  caseList: state.case.caseList,
  processTypeList: state.processType.processTypeList,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  getCases,
  getEmployees,
  getPhysicalEntities,
  createDocumentWithCase,
  createDocumentWithCaseAndAttachment,
  getProcessTypes,
})(DocumentList);
