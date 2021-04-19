import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateOrganizationalUnit from "./ModalForUpdateOrganizationalUnit";
import button from "../Reusable/button.css";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

export default class OrganizationalUnitRow extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (updatedOrganizationalUnit) => {
    this.props.updateOrganizationalUnit(updatedOrganizationalUnit);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteOrganizationalUnit(id);
  };

  render() {
    const {
      organizationalUnit,
      getOrganizationalUnit,
      legalEntities,
      getLegalEntity,
    } = this.props || {};
    const row = (
      <tr>
        <td>{organizationalUnit.id}</td>
        <td>{organizationalUnit.name}</td>
        <td>{organizationalUnit.code}</td>
        <td>{organizationalUnit.legalEntity.name}</td>
        <td className="text-center" className="red">
          <UpdateButton showModal={this.showModal} id={document} />
        </td>
        
        <td className="text-center" className="red">
          <DeleteButton onDeleteClick={this.onDeleteClick} id={document.id} />
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
          legalEntities={legalEntities}
          getLegalEntity={getLegalEntity}
        />
      </Fragment>
    );
  }
}
