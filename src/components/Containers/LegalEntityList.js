import React, { Component } from "react";
import { connect } from "react-redux";
import LegalEntityTable from "../LegalEntity/LegalEntityTable";
import { getLegalEntites } from "../../actions/legalEntityAction";

class LegalEntityList extends Component {
  componentDidMount(){
    this.props.getLegalEntites();
  }

  render() {
    const { legalEntities } = this.props.legalEntity;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Pravna lica</h3>
              </div>
              <div className="card-body">
                <LegalEntityTable legalEntities={legalEntities} />
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
});

export default connect(mapStateToProps, { getLegalEntites })(LegalEntityList);
