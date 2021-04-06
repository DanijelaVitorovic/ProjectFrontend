import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalForUpdateProcessType from "./ModalForUpdateProcessType";

class ProcessTypeRow extends Component {
  constructor(props) {
    super(props);

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

  handleUpdate = (updateProcessType) => {
    this.props.updateProcessType(updateProcessType);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteProcessType(id);
  };

  render() {
    const row = (
      <tr>
        <td>{this.props.processType.id}</td>
        <td>{this.props.processType.type}</td>
        <td>{this.props.processType.description}</td>
        <td className="text-center">
          <Button
            variant="link"
            onClick={() => {
              this.showModal();
            }}
          >
            <i class="fas fa-pen-alt fa-2x"></i>
          </Button>
        </td>

        <td className="text-center">
          <Link
            to={`/processTypeList`}
            id="deleteEntity"
            onClick={() => this.onDeleteClick(this.props.processType.id)}
          >
            <i className="fas fa-trash-alt fa-2x" />
          </Link>
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateProcessType
            show={this.state.show}
            id={this.props.processType.id}
            processTypeForUpdate={this.props.processTypeForUpdate}
            getProcessType={this.props.getProcessType}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default (ProcessTypeRow);
