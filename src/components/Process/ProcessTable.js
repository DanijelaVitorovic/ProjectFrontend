import React, { Component, Fragment } from "react";
import ProcessRow from "./ProcessRow";
import { Button } from "react-bootstrap";
import ModalForAddProcess from "./ModalForAddProcess";

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
    const processess = this.props.processess.map((process) => (
      <ProcessRow
        key={process.id}
        process={process}
        getProcess={this.props.getProcess}
        updateProcess={this.props.updateProcess}
        deleteProcess={this.props.deleteProcess}
        processForUpdate={this.props.processForUpdate}
        processTypes={this.props.processTypes}
        getProcessTypes = {this.props.getProcessTypes}
        getProcessType = {this.props.getProcessType}
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
              Add new Process
            </Button>
            <br></br>
            <tr>
              <th>#</th>
              <th>Process Type</th>
              <th>Process Type Description</th>
              <th>Next Case Status</th>
              <th className="text-center">Update</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>{processess}</tbody>
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
            processess={this.props.processess}
            processTypes={this.props.processTypes}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessTable;
