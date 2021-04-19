import React, { Component, Fragment } from "react";
import { deleteProcess } from "../../actions/processActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateProcess from "./ModalForUpdateProcess";

class ProcessRow extends Component {
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

  handleUpdate = (updatedProcess) => {
    this.props.updateProcess(updatedProcess);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteProcess(id);
  };

  render() {
    const row = (
      <tr>
        <td>{this.props.process.id}</td>
        <td>{this.props.process.processType.type}</td>
        <td>{this.props.process.processType.description}</td>
        <td>{this.props.process.nextCaseStatus}</td>
        <td className="text-center">
          <Button
            variant="link"
            onClick={() => {
              this.showModal();
            }}
          >
            <i className="fas fa-pen-alt fa-2x"></i>
          </Button>
        </td>
        <td className="text-center">
          <Badge pill variant="danger">
            <div onClick={() => this.onDeleteClick(this.props.process.id)}>
              <i className="fas fa-trash-alt fa-2x" />
            </div>
          </Badge>
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateProcess
          show={this.state.show}
          processForUpdate={this.props.processForUpdate}
          closeModal={this.closeModal}
          handleUpdate={this.handleUpdate}
          getProcess={this.props.getProcess}
        />
        )}
      </Fragment>
    );
  }
}

export default ProcessRow;
