import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdatePhysicalEntity from "./ModalForUpdatePhysicalEntity";

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
    const body = (
      <tr>
        <td>{this.props.physicalEntity.firstName}</td>
        <td>{this.props.physicalEntity.lastName}</td>
        <td>{this.props.physicalEntity.middleName}</td>
        <td>{this.props.physicalEntity.profession}</td>
        <td>{this.props.physicalEntity.email}</td>
        <td>{this.props.physicalEntity.address.city}</td>
        <td className="text-center">
          <Button
            class="btn btn-default"
            type="submit"
            variant="outline-warning"
            onClick={() => {
              this.showModal();
            }}
          >
            Измени
          </Button>
        </td>
        <td className="text-center">
          <Badge pill variant="danger">
            <div
              onClick={() => this.onDeleteClick(this.props.physicalEntity.id)}
            >
              <i className="fas fa-trash-alt fa-2x" />
            </div>
          </Badge>{" "}
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
            id={this.props.physicalEntity.id}
            getPhysicalEntity={this.props.getPhysicalEntity}
            physicalEntityForUpdate={this.props.physicalEntityForUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default PhysicalEntityRow;
