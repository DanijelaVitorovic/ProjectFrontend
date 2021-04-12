import React, { Component } from "react";
import {
  createNewOrganizationalUnit,
  updateOrganizationalUnit,
  getOrganizationalUnit,
  getOrganizationalUnits,
  deleteOrganizationalUnit,
} from "../../actions/organizationalUnitAcitons";
import { getLegalEntites } from "../../actions/legalEntityAction";
import { connect } from "react-redux";
import OrganizationalUnitTable from "../OrganizationalUnit/OrganizationalUnitTable";

class OraganizationalUnitList extends Component {
  componentDidMount() {
    this.props.getOrganizationalUnits();
    this.props.getLegalEntites();
  }

  render() {
    const { organizationalUnits } = this.props.organizationalUnit;
    const { legalEntities } = this.props.legalEntity;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Организационе јединице</h3>
              </div>
              <div className="card-body">
                <OrganizationalUnitTable
                  organizationalUnits={organizationalUnits}
                  createNewOrganizationalUnit={
                    this.props.createNewOrganizationalUnit
                  }
                  updateOrganizationalUnit={this.props.updateOrganizationalUnit}
                  getOrganizationalUnit={this.props.getOrganizationalUnit}
                  deleteOrganizationalUnit={this.props.deleteOrganizationalUnit}
                  legalEntities={legalEntities}
                />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  organizationalUnit: state.organizationalUnit,
  legalEntity: state.legalEntity,
  errors: state.error,
});

export default connect(mapStateToProps, {
  createNewOrganizationalUnit,
  updateOrganizationalUnit,
  getOrganizationalUnit,
  getOrganizationalUnits,
  deleteOrganizationalUnit,
  getLegalEntites,
})(OraganizationalUnitList);
