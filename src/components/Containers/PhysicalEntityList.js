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

class PhysicalEntityList extends Component {
  componentDidMount() {
    this.props.getPhysicalEntities();
  }
  render() {
    const { physicalEntities, physicalEntity } = this.props.physicalEntity;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Физичка лица</h3>
              </div>
              <div className="card-body">
                <PhysicalEntityTable
                  physicalEntities={physicalEntities}
                  createPhysicalEntity={this.props.createPhysicalEntity}
                  updatePhysicalEntity={this.props.updatePhysicalEntity}
                  getPhysicalEntity={this.props.getPhysicalEntity}
                  physicalEntityForUpdate={physicalEntity}
                  deletePhysicalEntity={this.props.deletePhysicalEntity}
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
