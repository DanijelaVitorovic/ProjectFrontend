import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ModalForUpdateProcessType from './ModalForUpdateProcessType';
import UpdateButton from '../Reusable/UpdateButton';
import DeleteButton from '../Reusable/DeleteButton';
import ConfirmAlert from '../Reusable/ConfirmAlert';
import {organizationalUnitRowTranslation} from '../../translations';
import Moment from 'moment';

class ProcessTypeRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      type: '',
      description: '',
      errors: {},
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

  handleUpdate = (updatedProcessType) => {
    this.props.updateProcessType(updatedProcessType);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    const translation = organizationalUnitRowTranslation;
    const {deleteString} = translation;
    const {deleteProcessType} = this.props || {};
    ConfirmAlert(id, deleteProcessType, deleteString);
  };

  render() {
    const {processType, getProcessType} = this.props || {};
    const deadline = processType.deadline;

    const row = (
      <tr>
        <td>{processType.id}</td>
        <td>{processType.type}</td>
        <td>{processType.description}</td>
        <td>{processType.deadline}</td>
        <td className="text-center">
          <UpdateButton
            className="button"
            showModal={this.showModal}
            id={processType}
          />
        </td>

        <td className="text-center">
          <DeleteButton
            className="badge"
            onDeleteClick={this.onDeleteClick}
            id={processType.id}
          />
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
