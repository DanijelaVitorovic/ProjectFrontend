import React, {Component, Fragment} from 'react';
import {deleteProcess} from '../../actions/processActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Badge} from 'react-bootstrap';
import ModalForUpdateProcess from './ModalForUpdateProcess';
import DeleteButton from '../Reusable/DeleteButton';
import ConfirmAlert from '../Reusable/ConfirmAlert';
import {processRowTranslation} from '../../translations';
import UpdateButton from '../Reusable/UpdateButton';

class ProcessRow extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleUpdate = (updatedProcess) => {
    this.props.updateProcess(updatedProcess);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = processRowTranslation;
    const {deleteString} = translation;
    const {deleteProcess} = this.props || {};
    ConfirmAlert(id, deleteProcess, deleteString);
  };

  render() {
    const {process, getProcess, processList, processTypeList} =
      this.props || {};
    const row = (
      <tr>
        <td>{process?.id}</td>
        <td>{process?.processType?.type}</td>
        <td>{process?.processType?.description}</td>
        <td>{process?.nextCaseStatus}</td>
        <td className="text-center">
          <UpdateButton
            className="button"
            showModal={this.showModal}
            id={process}
          />
        </td>
        <td className="text-center">
          <DeleteButton onDeleteClick={this.onDeleteClick} id={process?.id} />
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateProcess
            id={process.id}
            show={this.state.show}
            processForUpdate={process}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            getProcess={getProcess}
            processList={processList}
            processTypeList={processTypeList}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessRow;
