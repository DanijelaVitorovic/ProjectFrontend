import React, { Component, Fragment } from "react";
import ProcessTypeRow from "./ProcessTypeRow";
import { Modal, Button } from "react-bootstrap";
import { times } from "lodash";
import ModalForAddProcessType from "./ModalForAddProcessType";
import { processTypeTableTranslation } from "../../translations";

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
    const {
      processTypeList,
      createProcessType,
      getProcessType,
      updateProcessType,
      deleteProcessType,
    } = this.props || {};

    const translation = processTypeTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;

    const processTypes = processTypeList.map((processType) => (
      <ProcessTypeRow
        key={processType.id}
        processType = {processType}
        getProcessType={getProcessType}
        createProcessType={createProcessType}
        updateProcessType={updateProcessType}
        deleteProcessType={deleteProcessType}
      />
    ));

    const table = (
      <table className="table table-hover">
        <thead class="thead-light">
          <Button
            class="btn btn-default"
            variant="info"
            type="submit"
            onClick={() => {
              this.showModal();
            }}
          >
           {Buttons.addNewProcessType}
          </Button>
          <p></p>
          <tr className=" card-body">
            <th scope="col">{HeaderColumns.id}</th>
            <th scope="col">{HeaderColumns.type}</th>
            <th scope="col">{HeaderColumns.description}</th>
            <th scope="col">{HeaderColumns.update}</th>
            <th scope="col">{HeaderColumns.delete}</th>
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
            processTypeList = {processTypeList}
            createProcessType = {createProcessType}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessTypeTable;
