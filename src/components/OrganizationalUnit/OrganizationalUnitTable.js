import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import OrganizationalUnitRow from "./OrganizationalUnitRow";
import { Link } from "react-router-dom";
import ModalForAddOrganizationalUnit from "./ModalForAddOrganizationalUnit";
import { organizationalUnitTableTranslation } from "../../translations";
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

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
      organizationalUnitList,
      legalEntityList,
      createNewOrganizationalUnit,
      updateOrganizationalUnit,
      getOrganizationalUnit,
      deleteOrganizationalUnit,
      resetError,
    } = this.props || {};

    const translation = organizationalUnitTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;

    const organizationalUnits = organizationalUnitList.map(
      (organizationalUnit) => (
        <OrganizationalUnitRow
          key={organizationalUnit.id}
          organizationalUnit={organizationalUnit}
          createNewOrganizationalUnit={createNewOrganizationalUnit}
          getOrganizationalUnit={getOrganizationalUnit}
          updateOrganizationalUnit={updateOrganizationalUnit}
          deleteOrganizationalUnit={deleteOrganizationalUnit}
          legalEntityList={legalEntityList}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <Fragment>
          <div align="left" style={{paddingBottom: 20}}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{fontSize: 40}} />
              </Tooltip>
            </Link>

            <Tooltip title={Buttons.addNewOrganizationalUnit} arrow>
              <IconButton
                className="btn btn-info"
                type="submit"
                size="lm"
                onClick={() => {
                  this.showModal();
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Fragment>
        <p></p>
        <table id="example" className="table table-sm table-bordered ">
          <thead className="thead-light">
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
            organizationalUnitList={organizationalUnitList}
            createNewOrganizationalUnit={createNewOrganizationalUnit}
            legalEntityList={legalEntityList}
            error={this.props.error}
            resetError={resetError}
          />
        )}
      </Fragment>
    );
  }
}

export default OrganizationalUnitTable;
