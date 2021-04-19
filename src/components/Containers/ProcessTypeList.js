import React, { Component } from "react";
import { connect } from "react-redux";
import ProcessTypeTable from "../ProcessType/ProcessTypeTable";
import {
  getProcessTypes,
  getProcessType,
  createProcessType,
  updateProcessType,
  deleteProcessType,
} from "../../actions/processTypeActions";
import { processTypeListTranslation } from "../../translations";

class ProcessTypeList extends Component {
  componentDidMount() {
    this.props.getProcessTypes();
  }

  render() {
    const {
      processTypes,
      createProcessType,
      updateProcessType,
      getProcessType,
      deleteProcessType,
    } = this.props || {};
    const translation = processTypeListTranslation || {};
    const {Header} = translation;

    const listContent = (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-body">
                <h3>{Header.heading}</h3>

                <ProcessTypeTable
                  processTypes={processTypes}
                  createProcessType={createProcessType}
                  getProcessType={getProcessType}
                  updateProcessType={updateProcessType}
                  deleteProcessType={deleteProcessType}
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
  processTypes: state.processType.processTypes,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createProcessType,
  getProcessType,
  updateProcessType,
  getProcessTypes,
  deleteProcessType,
})(ProcessTypeList);
