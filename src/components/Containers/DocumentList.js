import React, { Component } from "react";
import {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
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
      documents,
      employees,
      physicalEntities,
      caseList,
      createDocument,
      updateDocument,
      getDocument,
      deleteDocument
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
                  documents={documents}
                  createDocument={createDocument}
                  updateDocument={updateDocument}
                  getDocument={getDocument}
                  deleteDocument={deleteDocument}
                  employees={employees}
                  caseList={caseList}
                  physicalEntities={physicalEntities}
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
  documents: state.document.documents,
  employees: state.employee.employees,
  physicalEntities: state.physicalEntities,
  caseList: state.case.caseList,
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
})(DocumentList);
