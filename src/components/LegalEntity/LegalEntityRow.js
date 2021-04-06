import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  createLegalEntity,
  getLegalEntity,
  updateLegalEntity,
  deleteLegalEntity,
} from "../../actions/legalEntityAction";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import ModalForUpdateLegalEntity from "./ModalForUpdateLegalEntity";

class LegalEntityRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      name: "",
      pib: "",
      registrationNumber: "",
      email: "",
      statment: "PASSIVE",
      errors: {},
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

  handleUpdate = (updateLegalEntity) => {
    this.props.updateLegalEntity(updateLegalEntity);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteLegalEntity(id);
  };

  render() {
    const row = (
      <tr>
        <td>{this.props.legalEntity.id}</td>
        <td>{this.props.legalEntity.name}</td>
        <td>{this.props.legalEntity.pib}</td>
        <td>{this.props.legalEntity.registrationNumber}</td>
        <td>{this.props.legalEntity.email}</td>
        <td>{this.props.legalEntity.statment}</td>
        <td className="text-center">
          <Button
            variant="link"
            onClick={() => {
              this.showModal();
            }}
          >
            <i class="fas fa-pen-alt fa-2x"></i>
          </Button>
        </td>

        <td className="text-center">
        <Link
        to={`/LegalEntityList`}
        id="deleteEntity"
        onClick={() => this.onDeleteClick(this.props.legalEntity.id)}
        >
        <i className="fas fa-trash-alt fa-2x" />
      </Link>
    </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateLegalEntity
            show={this.state.show}
            id={this.props.legalEntity.id}
            legalEntityForUpdate={this.props.legalEntityForUpdate}
            getLegalEntity={this.props.getLegalEntity}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default connect(null, { updateLegalEntity, deleteLegalEntity })(
  LegalEntityRow
);
