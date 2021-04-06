import React, { Component, Fragment } from "react";
import ProcessTypeRow from "./ProcessTypeRow";
import { Modal, Button } from "react-bootstrap";
import { times } from "lodash";
import ModalForAddProcessType from "./ModalForAddProcessType";

class ProcessTypeTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      type: "",
      description: "",
      errors: {},
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

  handleAdd = (newProcessType) => {
    this.props.createProcessType(newProcessType);
    this.closeModal();
  };

  render() {
    const processTypes = this.props.processTypes.map((processType) => (
      <ProcessTypeRow
        key={processType.id}
        processType={processType}
        getProcessType={this.props.getProcessType}
        createProcessType={this.props.createProcessType}
        updateProcessType={this.props.updateProcessType}
        processTypeForUpdate={this.props.processTypeForUpdate}
        deleteProcessType = {this.props.deleteProcessType}
      />
    ));

    const table = (
      <table className="table table-hover">
        <thead class="thead-light">
          <Button
            class="btn btn-default"
            variant="success"
            type="submit"
            onClick={() => {
              this.showModal();
            }}
          >
            Add new Process Type
          </Button>
          <tr className=" card-body">
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>{processTypes}</tbody>
      </table>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddProcessType
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessTypeTable;
