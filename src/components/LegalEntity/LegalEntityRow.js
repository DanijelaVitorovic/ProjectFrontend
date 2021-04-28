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
import { Statement } from "../../../src/globals";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

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
    const {legalEntity, legalEntityForUpdate, getLegalEntity } = this.props || {};
    const statement = this.props.legalEntity.statment;

    const row = (
      <tr>
        <td>{legalEntity.id}</td>
        <td>{legalEntity.name}</td>
        <td>{legalEntity.pib}</td>
        <td>{legalEntity.registrationNumber}</td>
        <td>{legalEntity.email}</td>
        <td style={{ color: Statement[statement].color }}>
          {Statement[statement].translation}
        </td>
        <td className="text-center">
          <UpdateButton showModal={this.showModal} id={document} />
        </td>
        
        <td className="text-center">
          <DeleteButton onDeleteClick={this.onDeleteClick} id={legalEntity.id} />
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

export default connect(null, { updateLegalEntity, deleteLegalEntity })(
  LegalEntityRow
);
