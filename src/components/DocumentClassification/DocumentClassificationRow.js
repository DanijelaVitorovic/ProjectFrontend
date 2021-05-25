import React, {Component, Fragment} from 'react';
import UpdateButton from '../Reusable/UpdateButton';
import DeleteButton from '../Reusable/DeleteButton';
import ConfirmAlert from '../Reusable/ConfirmAlert';
import {documentClassificationRowTranslation} from '../../translations';
import ModalForUpdateDocumentClassificaiton from './ModalForUpdateDocumentClassificaiton';

class DocumentClassificationRow extends Component {
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
    this.setState({show: false});
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleUpdate = (updatedDocumentClassification) => {
    this.props.updateDocumentClassificaton(updatedDocumentClassification);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = documentClassificationRowTranslation;
    const {deleteDocumentClassificaton} = this.props || {};
    ConfirmAlert(
      id,
      deleteDocumentClassificaton,
      documentClassificationRowTranslation.deleteString
    );
  };
  render() {
    const {documentClassification, getDocumentClassificaton, documentList} =
      this.props || {};

    const row = (
      <tr>
        <td>{documentClassification.title}</td>
        <td>{documentClassification.code}</td>
        <td>{documentClassification.description}</td>
        <td className="text-center">
          <UpdateButton
            className="button"
            showModal={this.showModal}
            id={documentClassification}
          />
        </td>

        <td className="text-center">
          <DeleteButton
            onDeleteClick={this.onDeleteClick}
            id={documentClassification.id}
          />
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        <ModalForUpdateDocumentClassificaiton
          show={this.state.show}
          id={documentClassification.id}
          documentClassificationForUpdate={documentClassification}
          closeModal={this.closeModal}
          handleUpdate={this.handleUpdate}
          getDocumentClassificaton={getDocumentClassificaton}
          documentList={documentList}
        />
      </Fragment>
    );
  }
}

export default DocumentClassificationRow;
