import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalForUpdateProcessType from "./ModalForUpdateProcessType";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

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

  handleUpdate = (updatedProcessType) => {
    this.props.updateProcessType(updatedProcessType);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteProcessType(id);
  };

  render() {
    const { processType, getProcessType } = this.props || {};
    const row = (
      <tr>
        <td>{processType.id}</td>
        <td>{processType.type}</td>
        <td>{processType.description}</td>
        <td className="text-center" className="red">
        <UpdateButton showModal={this.showModal} id={document} />
      </td>
      
      <td className="text-center" className="red">
        <DeleteButton onDeleteClick={this.onDeleteClick} id={document.id} />
      </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        <ModalForUpdateProcessType
          show={this.state.show}
          id={processType.id}
          processTypeForUpdate={processType}
          getProcessType={getProcessType}
          closeModal={this.closeModal}
          handleUpdate={this.handleUpdate}
        />
      </Fragment>
    );
  }
}

export default ProcessTypeRow;
