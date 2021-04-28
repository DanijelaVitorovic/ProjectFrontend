import React, { Component, Fragment } from "react";
import ProcessRow from "./ProcessRow";
import { Button } from "react-bootstrap";
import ModalForAddProcess from "./ModalForAddProcess";
import {processTableTranslation} from '../../translations';

class ProcessTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = (newProcess) => {
    this.props.createProcess(newProcess);
    this.closeModal();
  };

  render() {
    const translation = processTableTranslation;
    const {HeaderColumns, Buttons} = translation || {};
    const {
      processList,
      getProcess,
      updateProcess,
      deleteProcess,
      processTypeList,
      getProcessTypes,
      process,
    } = this.props || {};
    const processes = processList.map((process) => (
      <ProcessRow
        key={process.id}
        process={process}
        getProcess={getProcess}
        updateProcess={updateProcess}
        deleteProcess={deleteProcess}
        processTypeList={processTypeList}
        getProcessTypes={getProcessTypes}
      />
    ));
    const table = (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <Button
              class="btn btn-default"
              variant="success"
              type="submit"
              onClick={() => {
                this.showModal();
              }}
            >
              {Buttons.addNewProcess}
            </Button>
            <br></br>
            <tr>
              <th>{HeaderColumns.id}</th>
              <th>{HeaderColumns.processType}</th>
              <th>{HeaderColumns.descriptionType}</th>
              <th>{HeaderColumns.status}</th>
              <th className="text-center">{HeaderColumns.update}</th>
              <th className="text-center">{HeaderColumns.delete}</th>
            </tr>
          </thead>
          <tbody>{processes}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddProcess
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            processTypeList={processTypeList}
            process={process}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessTable;