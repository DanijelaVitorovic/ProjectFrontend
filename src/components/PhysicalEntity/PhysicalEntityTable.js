import React, { Component, Fragment } from "react";
import PhysicalEntityRow from "./PhysicalEntityRow";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalForAddPhysicalEntity from "./ModalForAddPhysicalEntity";
import { PhysicalEntityTableTranslation } from "../../translations";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

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
        <div align="left" style={{ paddingBottom: 20 }}>
          <Link to={`/dashboard`}>
            <Tooltip title="Nazad" arrow>
              <ArrowBackIcon style={{ fontSize: 40 }} />
            </Tooltip>
          </Link>

          <Tooltip title={Buttons.addNewPhysicalEntity} arrow>
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
        <table id="example" className="table table-sm table-striped">
          <thead>
            <tr className="text-center">
              <th>{HeaderColumns.name}</th>
              <th>{HeaderColumns.surName}</th>
              <th>{HeaderColumns.middleName}</th>
              <th>{HeaderColumns.profession}</th>
              <th>{HeaderColumns.email}</th>
              <th>{HeaderColumns.address}</th>
              <th>{HeaderColumns.update}</th>
              <th>{HeaderColumns.delete}</th>
            </tr>
          </thead>
          <tbody>{physicalEntityListShowedInRow}</tbody>
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
