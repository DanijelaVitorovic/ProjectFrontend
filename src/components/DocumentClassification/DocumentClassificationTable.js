import React, {Component, Fragment} from 'react';
import {documentClassificationTableTranslation} from '../../translations';
import DocumentClassificationRow from './DocumentClassificationRow';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ModalForAddDocumentClassification from './ModalForAddDocumentClassification';

class DocumentClassificationTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.props.resetError();
    this.setState({show: false});
  };

  handleAdd = (newDocumentClassification) => {
    this.props.createDocumentClassificaton(
      newDocumentClassification,
      this.closeModal
    );
  };

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

    const translation = documentClassificationTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;

    const documentClassifications = documentClassificationList.map(
      (documentClassification) => (
        <DocumentClassificationRow
          key={documentClassification.id}
          documentClassification={documentClassification}
          updateDocumentClassificaton={updateDocumentClassificaton}
          getDocumentClassificaton={getDocumentClassificaton}
          deleteDocumentClassificaton={deleteDocumentClassificaton}
          documentList={documentList}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <Fragment>
          <div align="left" style={{paddingBottom: 20}}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{fontSize: 40}} />
              </Tooltip>
            </Link>
            <Tooltip title={Buttons.addDocumentClassification} arrow>
              <IconButton
                className="btn btn-info"
                type="submit"
                size="lm"
                onClick={() => {
                  this.showModal();
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Fragment>
        <p></p>
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col">{HeaderColumns.title}</th>
              <th scope="col">{HeaderColumns.code}</th>
              <th scope="col">{HeaderColumns.description}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.update}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>
          <tbody>{documentClassifications}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddDocumentClassification
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            createDocumentClassificaton={createDocumentClassificaton}
            documentList={documentList}
            error={error}
            resetError={resetError}
          />
        )}
      </Fragment>
    );
  }
}

export default DocumentClassificationTable;
