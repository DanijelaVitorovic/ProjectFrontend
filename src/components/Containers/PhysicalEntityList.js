import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPhysicalEntities,
  deletePhysicalEntity,
  updatePhysicalEntity,
  createPhysicalEntity,
  getPhysicalEntity,
} from "../../actions/physicalEntityActions";
import PhysicalEntityTable from "../PhysicalEntity/PhysicalEntityTable";
import { PhysicalEntityListTranslation } from "../../translations";

class PhysicalEntityList extends Component {
  componentDidMount() {
    this.props.getPhysicalEntities();
  }
  render() {
    const { physicalEntityList, physicalEntity } = this.props.physicalEntity;
    const {
      createPhysicalEntity,
      updatePhysicalEntity,
      getPhysicalEntity,
      deletePhysicalEntity,
    } = this.props || {};

    const translation = PhysicalEntityListTranslation || {};
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
                <PhysicalEntityTable
                  physicalEntityList={physicalEntityList}
                  createPhysicalEntity={createPhysicalEntity}
                  updatePhysicalEntity={updatePhysicalEntity}
                  getPhysicalEntity={getPhysicalEntity}
                  physicalEntityForUpdate={physicalEntity}
                  deletePhysicalEntity={deletePhysicalEntity}
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
  physicalEntity: state.physicalEntity,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getPhysicalEntities,
  deletePhysicalEntity,
  updatePhysicalEntity,
  createPhysicalEntity,
  getPhysicalEntity,
})(PhysicalEntityList);
