import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import OrganizationalUnitRow from "./OrganizationalUnitRow";
import { Link } from "react-router-dom";
import ModalForAddOrganizationalUnit from "./ModalForAddOrganizationalUnit";
import { organizationalUnitTableTranslation } from "../../translations";

class OrganizationalUnitTable extends Component {
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
    this.props.resetError();
    this.setState({ show: false });
  };

  handleAdd = (newOrganizaationalUnit) => {
    this.props.createNewOrganizationalUnit(
      newOrganizaationalUnit,
      this.closeModal
    );
  };

  render() {
    const {
      organizationalUnits,
      legalEntities,
      createNewOrganizationalUnit,
      updateOrganizationalUnit,
      getOrganizationalUnit,
      deleteOrganizationalUnit,
      resetError,
    } = this.props || {};

    const translation = organizationalUnitTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;

    const organizationalUnitList = organizationalUnits.map(
      (organizationalUnit) => (
        <OrganizationalUnitRow
          key={organizationalUnit.id}
          organizationalUnit={organizationalUnit}
          createNewOrganizationalUnit={createNewOrganizationalUnit}
          getOrganizationalUnit={getOrganizationalUnit}
          updateOrganizationalUnit={updateOrganizationalUnit}
          deleteOrganizationalUnit={deleteOrganizationalUnit}
          legalEntities={legalEntities}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <Button
              className="btn btn-default"
              type="submit"
              variant="info"
              onClick={() => {
                this.showModal();
              }}
            >
              {Buttons.addNewOrganizationalUnit}
            </Button>
            <p></p>
            <tr className=" card-body">
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.name}</th>
              <th scope="col">{HeaderColumns.code}</th>
              <th scope="col">{HeaderColumns.nameLegalEntity}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.update}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>
          <tbody>{organizationalUnitList}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddOrganizationalUnit
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            organizationalUnits={organizationalUnits}
            createNewOrganizationalUnit={createNewOrganizationalUnit}
            legalEntities={legalEntities}
            error={this.props.error}
            resetError={resetError}
          />
        )}
      </Fragment>
    );
  }
}

export default OrganizationalUnitTable;
