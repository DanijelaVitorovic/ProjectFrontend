import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import OrganizationalUnitRow from "./OrganizationalUnitRow";
import { Link } from "react-router-dom";
import ModalForAddOrganizationalUnit from "./ModalForAddOrganizationalUnit";
import style from "styled-components";

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
    this.setState({ show: false });
  };

  handleAdd = (newOrganizaationalUnit) => {
    this.props.createNewOrganizationalUnit(newOrganizaationalUnit);
    this.closeModal();
  };

  render() {

    const organizationalUnits = this.props.organizationalUnits.map(
      (organizationalUnit) => (
        <OrganizationalUnitRow
          key={organizationalUnit.id}
          organizationalUnit={organizationalUnit}
          createNewOrganizationalUnit={this.props.createNewOrganizationalUnit}
          getOrganizationalUnit = {this.props.getOrganizationalUnit}
          updateOrganizationalUnit={this.props.updateOrganizationalUnit}
          deleteOrganizationalUnit={this.props.deleteOrganizationalUnit}
          legalEntities={this.props.legalEntities}
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
              variant="success"
              onClick={() => {
                this.showModal();
              }}
            >
              Направи нову организациону јединицу 
            </Button>
            <p></p>
            <tr className=" card-body">
              <th scope="col">#</th>
              <th scope="col">Име јединице</th>
              <th scope="col">Шифра</th>
              <th scope="col">Име правног лица</th>
              <th scope="col" className="text-center">
                Измена
              </th>
              <th scope="col" className="text-center">
                Брисање
              </th>
            </tr>
          </thead>
          <tbody>{organizationalUnits}</tbody>
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
            createNewOrganizationalUnit={this.props.createNewOrganizationalUnit}
            legalEntities={this.props.legalEntities}
          />
        )}
      </Fragment>
    );
  }
}

export default OrganizationalUnitTable;
