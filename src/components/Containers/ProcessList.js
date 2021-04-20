import React, { Component } from "react";
import { connect } from "react-redux";
import ProcessTable from "../Process/ProcessTable";
import {
  createProcess,
  updateProcess,
  getProcess,
  getProcessess,
  deleteProcess,
} from "../../actions/processActions";
import { getProcessTypes, getProcessType } from "../../actions/processTypeActions";

class ProcessList extends Component {
  componentDidMount() {
    this.props.getProcessess();
    this.props.getProcessTypes();
  }

  render() {
    const { processess } = this.props.process;
    const { processTypes } = this.props.processType;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Process</h3>

                <ProcessTable
                  processess={processess}
                  createProcess={this.props.createProcess}
                  getProcess={this.props.getProcess}
                  updateProcess={this.props.updateProcess}
                  deleteProcess={this.props.deleteProcess}
                  processForUpdate={process}
                  processTypes={processTypes}
                  getProcessTypes={this.props.getProcessTypes}
                  getProcessType = {this.props.getProcessType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  process: state.process,
  processType: state.processType,
  erorrs: state.erorrs,
});

export default connect(mapStateToProps, {
  createProcess,
  updateProcess,
  getProcess,
  getProcessess,
  deleteProcess,
  getProcessTypes,
  getProcessType
})(ProcessList);
