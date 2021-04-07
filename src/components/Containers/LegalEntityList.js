import React, { Component } from "react";
import { connect } from "react-redux";
import LegalEntityTable from "../LegalEntity/LegalEntityTable";
import {
  getLegalEntity,
  getLegalEntites,
  createLegalEntity,
  deleteLegalEntity,
  updateLegalEntity
} from "../../actions/legalEntityAction";
import { Button } from "react-bootstrap";

class LegalEntityList extends Component {
  componentDidMount() {
    this.props.getLegalEntites();
  }

  render() {
    const { legalEntities, legalEntity } = this.props.legalEntity;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-body">
                <h3>Pravna lica</h3>
                <LegalEntityTable
                  legalEntities={legalEntities}
                  createLegalEntity={this.props.createLegalEntity}
                  updateLegalEntity={this.props.updateLegalEntity}
                  getLegalEntity={this.props.getLegalEntity}
                  legalEntityForUpdate={legalEntity}
                  deleteLegalEntity = {this.props.deleteLegalEntity}
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
  legalEntity: state.legalEntity,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getLegalEntity,
  getLegalEntites,
  createLegalEntity,
  deleteLegalEntity,
  updateLegalEntity
})(LegalEntityList);
