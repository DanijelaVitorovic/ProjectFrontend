import React, {Component} from 'react';
import {
  createDocumentClassificaton,
  updateDocumentClassificaton,
  getDocumentClassificaton,
  getDocumentClassificatonList,
  deleteDocumentClassificaton,
} from '../../actions/documentClassificationActions';
import {getDocuments} from '../../actions/documentActions';
import {connect} from 'react-redux';
import {documentClassificationListTranslation} from '../../translations';
import DocumentClassificationTable from '../DocumentClassification/DocumentClassificationTable';
import {resetError} from '../../actions/organizationalUnitAcitons';

class DocumentClassificationList extends Component {
  componentDidMount() {
    this.props.getDocumentClassificatonList();
    this.props.getDocuments();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({error: nextProps.error});
    }
  }
  render() {
    const {
      documentClassificationList,
      documentList,
      createDocumentClassificaton,
      updateDocumentClassificaton,
      getDocumentClassificaton,
      deleteDocumentClassificaton,
      error,
      resetError,
    } = this.props || {};
    const translation = documentClassificationListTranslation || {};
    const {Header} = translation;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>
              </div>
              <div className="card-body">
                <DocumentClassificationTable
                  documentClassificationList={documentClassificationList}
                  createDocumentClassificaton={createDocumentClassificaton}
                  updateDocumentClassificaton={updateDocumentClassificaton}
                  getDocumentClassificaton={getDocumentClassificaton}
                  deleteDocumentClassificaton={deleteDocumentClassificaton}
                  documentList={documentList}
                  error={error}
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
  documentClassificationList:
    state.documentClassification.documentClassificationList,
  documentList: state.document.documentList,
  error: state.error,
});

export default connect(mapStateToProps, {
  createDocumentClassificaton,
  updateDocumentClassificaton,
  getDocumentClassificaton,
  getDocumentClassificatonList,
  deleteDocumentClassificaton,
  getDocuments,
  resetError,
})(DocumentClassificationList);
