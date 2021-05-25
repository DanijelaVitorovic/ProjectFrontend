import React, {Component} from 'react';
import {documentMovementRowTranslation} from '../../translations';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Tooltip from '@material-ui/core/Tooltip';
import ConfirmAlert from '../Reusable/ConfirmAlert';

class DocumentMovementRow extends Component {
  acceptDocument = (id) => {
    const translation = documentMovementRowTranslation || {};
    const {confirmString} = translation;
    const {acceptDocument} = this.props || {};
    ConfirmAlert(id, acceptDocument, confirmString);
  };

  render() {
    const {documentMovement} = this.props || {};
    const translation = documentMovementRowTranslation || {};
    const {acceptTooltip} = translation;

    const firstNameSend =
      documentMovement?.employeeSend?.physicalEntity?.firstName;
    const lastNameSend =
      documentMovement?.employeeSend?.physicalEntity?.lastName;

    const firstNameReceived =
      documentMovement?.employeeReceived?.physicalEntity?.firstName;
    const lastNameReceived =
      documentMovement?.employeeReceived?.physicalEntity?.lastName;

    return (
      <tr>
        <td>{documentMovement.id}</td>
        <td>{documentMovement.document.title}</td>
        <td>{firstNameSend + lastNameSend}</td>
        <td>{firstNameReceived + lastNameReceived}</td>
        <td>{documentMovement.createdAt}</td>
        <td>{documentMovement.documentMovementStatement}</td>
        <td className="text-center">
          <Tooltip title={acceptTooltip}>
            <div onClick={() => this.acceptDocument(documentMovement.id)}>
              <DoneAllIcon style={{color: '12C11D'}} />
            </div>
          </Tooltip>
        </td>
      </tr>
    );
  }
}

export default DocumentMovementRow;
