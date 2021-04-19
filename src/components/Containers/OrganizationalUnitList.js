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
import { organizationalUnitListTranslation } from "../../translations";

class OraganizationalUnitList extends Component {
  componentDidMount() {
    this.props.getOrganizationalUnits();
    this.props.getLegalEntites();
  }

  render() {
    const {
      organizationalUnits,
      legalEntities,
      createNewOrganizationalUnit,
      updateOrganizationalUnit,
      getOrganizationalUnit,
      deleteOrganizationalUnit,
    } = this.props || {};
    const translation = organizationalUnitListTranslation || {};
    const { Header } = translation;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>
              </div>
              <div className="card-body">
                <OrganizationalUnitTable
                  organizationalUnits={organizationalUnits}
                  createNewOrganizationalUnit={createNewOrganizationalUnit}
                  updateOrganizationalUnit={updateOrganizationalUnit}
                  getOrganizationalUnit={getOrganizationalUnit}
                  deleteOrganizationalUnit={deleteOrganizationalUnit}
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
  organizationalUnits: state.organizationalUnit.organizationalUnits,
  legalEntities: state.legalEntity.legalEntities,
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
