import React, { Component } from "react";
import {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  createDocumentWithCase,
} from "../../actions/documentActions";
import { getCases } from "../../actions/caseActions";
import { getEmployees } from "../../actions/employeeActions";
import { connect } from "react-redux";
import DocumentTable from "../Document/DocumentTable";
import {
  getPhysicalEntities,
  getPhysicalEntity,
} from "../../actions/physicalEntityActions";
import { documentListTranslation } from "../../translations";

class DocumentList extends Component {
  componentDidMount() {
    this.props.getDocuments();
    this.props.getCases();
    this.props.getPhysicalEntities();
    this.props.getEmployees();
  }
  render() {
    const {
      createDocument,
      updateDocument,
      getDocument,
      deleteDocument,
      createDocumentWithCase,
    } = this.props || {};

    const { documentList, document } = this.props.document || {};
    const { caseList } = this.props.case || {};
    const { physicalEntityList } = this.props.physicalEntity || {};
    const { employeeList } = this.props.employee || {};

    const translation = documentListTranslation || {};
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
                <DocumentTable
                  documentList={documentList}
                  createDocument={createDocument}
                  updateDocument={updateDocument}
                  getDocument={getDocument}
                  deleteDocument={deleteDocument}
                  employeeList={employeeList}
                  caseList={caseList}
                  physicalEntityList={physicalEntityList}
                  createDocumentWithCase={createDocumentWithCase}
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
  document: state.document,
  employee: state.employee,
  physicalEntity: state.physicalEntity,
  case: state.case,
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
})(DocumentList);
