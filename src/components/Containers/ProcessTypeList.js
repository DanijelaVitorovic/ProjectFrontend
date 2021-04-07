import React, { Component } from "react";
import { connect } from "react-redux";
import ProcessTypeTable from "../ProcessType/ProcessTypeTable";
import {
  getProcessTypes,
  getProcessType,
  createProcessType,
  updateProcessType,
  deleteProcessType
} from "../../actions/processTypeActions";

class ProcessTypeList extends Component {
  componentDidMount() {
    this.props.getProcessTypes();
  }

  render() {
    const { processTypes, processType } = this.props.processType;

    const listContent = (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-body">
                <h3>Process Type</h3>

                <ProcessTypeTable
                  processTypes={processTypes}
                  processTypeForUpdate={processType}
                  createProcessType={this.props.createProcessType}
                  getProcessType={this.props.getProcessType}
                  updateProcessType={this.props.updateProcessType}
                  deleteProcessType = {this.props.deleteProcessType}
                />

                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return <div>{listContent}</div>;
  }
}

const mapStateToProps = (state) => ({
  processType: state.processType,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createProcessType,
  getProcessType,
  updateProcessType,
  getProcessTypes,
  deleteProcessType
})(ProcessTypeList);
