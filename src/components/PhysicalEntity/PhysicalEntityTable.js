import React, { Component, Fragment } from "react";
import PhysicalEntityRow from "./PhysicalEntityRow";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalForAddPhysicalEntity from "./ModalForAddPhysicalEntity";
import { PhysicalEntityTableTranslation } from "../../translations";

class PhysicalEntityTable extends Component {
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

  handleAdd = (newPhysicalEntity) => {
    this.props.createPhysicalEntity(newPhysicalEntity);
    this.closeModal();
  };

  render() {
    const {
      physicalEntityList,
      updatePhysicalEntity,
      getPhysicalEntity,
      physicalEntityForUpdate,
      deletePhysicalEntity,
    } = this.props || {};

    const translation = PhysicalEntityTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;

    const physicalEntityListShowedInRow = physicalEntityList.map(
      (physicalEntity) => (
        <PhysicalEntityRow
          key={physicalEntity.id}
          physicalEntity={physicalEntity}
          updatePhysicalEntity={updatePhysicalEntity}
          getPhysicalEntity={getPhysicalEntity}
          physicalEntityForUpdate={physicalEntityForUpdate}
          deletePhysicalEntity={deletePhysicalEntity}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <Button
              class="btn btn-default"
              type="submit"
              variant="success"
              onClick={() => {
                this.showModal();
              }}
            >
              {Buttons.addNewPhysicalEntity}
            </Button>
            <br />
            <br />
            <tr>
              <th>{HeaderColumns.name}</th>
              <th>{HeaderColumns.surName}</th>
              <th>{HeaderColumns.middleName}</th>
              <th>{HeaderColumns.profession}</th>
              <th>{HeaderColumns.email}</th>
              <th className="text-center">{HeaderColumns.address}</th>
              <th className="text-center">{HeaderColumns.update}</th>
              <th className="text-center">{HeaderColumns.delete}</th>
            </tr>
          </thead>
          <tbody>{physicalEntityListShowedInRow}</tbody>
          <Link to={`/dashboard`}>
            <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
          </Link>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddPhysicalEntity
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
          />
        )}
      </Fragment>
    );
  }
}

export default PhysicalEntityTable;
