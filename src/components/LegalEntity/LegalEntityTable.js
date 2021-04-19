import { Button, Modal } from "react-bootstrap";
import React, { Component, Fragment } from "react";
import LegalEntityRow from "./LegalEntityRow";
import ModalForAddLegalEntity from "./ModalForAddLegalEntity";
import {
  getLegalEntity,
  updateLegalEntity,
} from "../../actions/legalEntityAction";
import {legalEntityTableTranslation} from "../../translations";

class LegalEntityTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      name: "",
      pib: "",
      email: "",
      statment: "",
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

  handleAdd = (newLegalEntity) => {
    this.props.createLegalEntity(newLegalEntity);
    this.closeModal();
  };

  render() {
    const translation = legalEntityTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;
    const legalEntities = this.props.legalEntities.map((legalEntity) => (
      <LegalEntityRow
        key={legalEntity.id}
        legalEntity={legalEntity}
        updateLegalEntity={this.props.updateLegalEntity}
        createLegalEntity={this.props.createLegalEntity}
        getLegalEntity={this.props.getLegalEntity}
        legalEntityForUpdate={this.props.legalEntityForUpdate}
        deleteLegalEntity = {this.props.deleteLegalEntity}
      />
    ));

    const table = (
      <table className="table table-hover ">
        <thead class="thead-light" >
          <Button
            className="btn btn-default"
            variant="info"
            type="submit"
            onClick={() => {
              this.showModal();
            }}
          >
           {Buttons.addNewLegalEntity}
          </Button>
          <p></p>
          <tr>
            <th scope="col">{HeaderColumns.id}</th>
            <th scope="col">{HeaderColumns.name}</th>
            <th scope="col">{HeaderColumns.pib}</th>
            <th scope="col">{HeaderColumns.registrationNumber}</th>
            <th scope="col">{HeaderColumns.email}</th>
            <th scope="col">{HeaderColumns.email}</th>
            <th scope="col">{HeaderColumns.update}</th>
            <th scope="col">{HeaderColumns.delete}</th>
          </tr>
        </thead>

        <tbody>{legalEntities}</tbody>
      </table>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddLegalEntity
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
          />
        )}
      </Fragment>
    );
  }
}

export default LegalEntityTable;
