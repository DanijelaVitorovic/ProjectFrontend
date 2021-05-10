import React, {Component, Fragment} from 'react';
import ModalForUpdateOrganizationalUnit from './ModalForUpdateOrganizationalUnit';
import UpdateButton from '../Reusable/UpdateButton';
import DeleteButton from '../Reusable/DeleteButton';
import ConfirmAlert from '../Reusable/ConfirmAlert';
import {organizationalUnitRowTranslation} from '../../translations';

export default class OrganizationalUnitRow extends Component {
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

  handleUpdate = (updatedOrganizationalUnit) => {
    this.props.updateOrganizationalUnit(updatedOrganizationalUnit);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = organizationalUnitRowTranslation;
    const {deleteString} = translation;
    const {deleteOrganizationalUnit} = this.props || {};
    ConfirmAlert(id, deleteOrganizationalUnit, deleteString);
  };

  render() {
    const {
      organizationalUnit,
      getOrganizationalUnit,
      legalEntityList,
      getLegalEntity,
    } = this.props || {};
    const row = (
      <tr>
        <td>{organizationalUnit.id}</td>
        <td>{organizationalUnit.name}</td>
        <td>{organizationalUnit.code}</td>
        <td>{organizationalUnit.legalEntity.name}</td>
        <td className="text-center">
          <UpdateButton
            className="button"
            showModal={this.showModal}
            id={organizationalUnit}
          />
        </td>

        <td className="text-center">
          <DeleteButton
            onDeleteClick={this.onDeleteClick}
            id={organizationalUnit.id}
          />
        </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        <ModalForUpdateOrganizationalUnit
          show={this.state.show}
          id={organizationalUnit.id}
          organizationalUnitForUpdate={organizationalUnit}
          closeModal={this.closeModal}
          handleUpdate={this.handleUpdate}
          getOrganizationalUnit={getOrganizationalUnit}
          legalEntityList={legalEntityList}
          getLegalEntity={getLegalEntity}
        />
      </Fragment>
    );
  }
}
