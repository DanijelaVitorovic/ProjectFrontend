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
import { resetError } from "../../actions/organizationalUnitAcitons";

class OraganizationalUnitList extends Component {
  componentDidMount() {
    this.props.getOrganizationalUnits();
    this.props.getLegalEntites();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: nextProps.error });
    }
  }

  render() {
    const {
      organizationalUnitList,
      legalEntityList,
      createNewOrganizationalUnit,
      updateOrganizationalUnit,
      getOrganizationalUnit,
      deleteOrganizationalUnit,
      error,
      resetError,
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
                  organizationalUnitList={organizationalUnitList}
                  createNewOrganizationalUnit={createNewOrganizationalUnit}
                  updateOrganizationalUnit={updateOrganizationalUnit}
                  getOrganizationalUnit={getOrganizationalUnit}
                  deleteOrganizationalUnit={deleteOrganizationalUnit}
                  legalEntityList={legalEntityList}
                  error={error}
                  resetError={resetError}
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
  organizationalUnitList: state.organizationalUnit.organizationalUnitList,
  legalEntityList: state.legalEntity.legalEntityList,
  error: state.error,
});

export default connect(mapStateToProps, {
  createNewOrganizationalUnit,
  updateOrganizationalUnit,
  getOrganizationalUnit,
  getOrganizationalUnits,
  deleteOrganizationalUnit,
  getLegalEntites,
  resetError,
})(OraganizationalUnitList);
