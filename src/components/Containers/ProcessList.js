import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProcessTable from '../Process/ProcessTable';
import {
  createProcess,
  updateProcess,
  getProcess,
  getProcessess,
  deleteProcess,
} from '../../actions/processActions';
import {
  getProcessTypes,
  getProcessType,
} from '../../actions/processTypeActions';
import {processListTranslation} from '../../translations';

class ProcessList extends Component {
  componentDidMount() {
    this.props.getProcessess();
    this.props.getProcessTypes();
  }

  render() {
    const {
      processList,
      process,
      processTypeList,
      createProcess,
      updateProcess,
      getProcess,
      deleteProcess,
    } = this.props || {};
    const translation = processListTranslation;
    const {Header} = translation;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>

                <ProcessTable
                  processList={processList}
                  process={process}
                  createProcess={createProcess}
                  getProcess={getProcess}
                  updateProcess={updateProcess}
                  deleteProcess={deleteProcess}
                  processTypeList={processTypeList}
                  getProcessTypes={getProcessTypes}
                  getProcessType={getProcessType}
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
  processList: state.process.processList,
  process: state.process.process,
  processTypeList: state.processType.processTypeList,
  erorrs: state.erorrs,
});

export default connect(mapStateToProps, {
  createProcess,
  updateProcess,
  getProcess,
  getProcessess,
  deleteProcess,
  getProcessTypes,
  getProcessType,
})(ProcessList);
