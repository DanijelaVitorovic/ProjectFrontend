import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import ModalForUpdateLegalEntity from './ModalForUpdateLegalEntity';
import {Statement} from '../../../src/globals';
import UpdateButton from '../Reusable/UpdateButton';
import DeleteButton from '../Reusable/DeleteButton';
import ConfirmAlert from '../Reusable/ConfirmAlert';
import {legalEntityRowTranslation} from '../../translations';
import button from '../Reusable/button.css';

class LegalEntityRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      name: '',
      pib: '',
      registrationNumber: '',
      email: '',
      statment: '',
      errors: {},
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

  handleUpdate = (updatedLegalEntity) => {
    this.props.updateLegalEntity(updatedLegalEntity);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = legalEntityRowTranslation;
    const {deleteString} = translation;
    const {deleteLegalEntity} = this.props || {};
    ConfirmAlert(id, deleteLegalEntity, deleteString);
  };

  render() {
    const {legalEntity, legalEntityForUpdate, getLegalEntity} =
      this.props || {};
    const statement = this.props.legalEntity.statment;

    const row = (
      <tr>
        <td>{legalEntity.id}</td>
        <td>{legalEntity.name}</td>
        <td>{legalEntity.pib}</td>
        <td>{legalEntity.registrationNumber}</td>
        <td>{legalEntity.email}</td>
        <td style={{color: Statement[statement].color}}>
          {Statement[statement].translation}
        </td>
        <td className="text-center">
          <UpdateButton
            className="button"
            showModal={this.showModal}
            id={document}
          />
        </td>

        <td className="text-center">
          <DeleteButton
            className="delete"
            onDeleteClick={this.onDeleteClick}
            id={legalEntity.id}
          />
        </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateLegalEntity
            show={this.state.show}
            id={legalEntity.id}
            legalEntityForUpdate={legalEntityForUpdate}
            getLegalEntity={getLegalEntity}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default LegalEntityRow;
