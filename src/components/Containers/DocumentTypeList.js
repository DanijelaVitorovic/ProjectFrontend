import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createDocumentType,
  updateDocumentType,
  getDocumentTypeList,
  getDocumentType,
  deleteDocumentType,
} from "../../actions/documentTypeActions";
import DocumentTypeTable from "../DocumentType/DocumentTypeTable";
import { documentTypeListTranslation } from "../../translations";
import { resetError } from "../../actions/organizationalUnitAcitons";

class DocumentTypeList extends Component {
  componentDidMount() {
    this.props.getDocumentTypeList();
  }

  render() {
    const { documentType, documentTypeList } = this.props.documentType || {};
    const {
      createDocumentType,
      updateDocumentType,
      getDocumentType,
      deleteDocumentType,
      resetError,
    } = this.props || {};
    const translations = documentTypeListTranslation;
    const { Header } = translations || {};

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>
              </div>
              <div class="col-md-12 m-auto">
                <div className="card-body"></div>
                <DocumentTypeTable
                  documentTypeList={documentTypeList}
                  createDocumentType={createDocumentType}
                  updateDocumentType={updateDocumentType}
                  getDocumentType={getDocumentType}
                  deleteDocumentType={deleteDocumentType}
                  documentTypeForUpdate={documentType}
                  resetError={resetError}
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
  documentType: state.documentType,
  error: state.error,
});

export default connect(mapStateToProps, {
  createDocumentType,
  updateDocumentType,
  getDocumentTypeList,
  getDocumentType,
  deleteDocumentType,
  resetError,
})(DocumentTypeList);
