import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdatePhysicalEntity from "./ModalForUpdatePhysicalEntity";
import { PhysicalEntityRowTranslation } from "../../translations";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

class PhysicalEntityRow extends Component {
  onDeleteClick = (id) => {
    this.props.deletePhysicalEntity(id);
  };

  constructor() {
    super();
    this.state = { show: false };
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

  handleUpdate = (updatedPhysicalEntity) => {
    this.props.updatePhysicalEntity(updatedPhysicalEntity);
    this.closeModal();
  };

  render() {
    const { physicalEntity, getPhysicalEntity, physicalEntityForUpdate } =
      this.props || {};

    const translation = PhysicalEntityRowTranslation || {};

    const body = (
      <tr>
        <td>{physicalEntity.firstName}</td>
        <td>{physicalEntity.lastName}</td>
        <td>{physicalEntity.middleName}</td>
        <td>{physicalEntity.profession}</td>
        <td>{physicalEntity.email}</td>
        <td>{physicalEntity.address.city}</td>
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
        {body}
        {this.state.show && (
          <ModalForUpdatePhysicalEntity
            show={this.state.show}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            id={physicalEntity.id}
            getPhysicalEntity={getPhysicalEntity}
            physicalEntityForUpdate={physicalEntityForUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default PhysicalEntityRow;
