import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPhysicalEntities,
  deletePhysicalEntity,
  updatePhysicalEntity,
  createPhysicalEntity,
} from "../../actions/physicalEntityActions";
import PhysicalEntityTable from "../PhysicalEntity/PhysicalEntityTable";

class PhysicalEntityList extends Component {
  componentDidMount() {
    this.props.getPhysicalEntities();
  }
  render() {
    const { physicalEntities } = this.props.physicalEntity;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-white">
                <h3>Fizička lica</h3>
              </div>
              <div className="card-body">
                <PhysicalEntityTable physicalEntities={physicalEntities} />
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
})(PhysicalEntityList);
