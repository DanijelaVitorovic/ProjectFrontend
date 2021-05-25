import React, {Component} from 'react';
import {Fragment} from 'react';
import {documentMovementTableTranslation} from '../../translations';
import DocumentMovementRow from './DocumentMovementRow';

class DocumentMovementTable extends Component {
  render() {
    const {acceptDocument} = this.props || {};
    const translation = documentMovementTableTranslation || {};
    console.log(this.props.documentMovementList);

    let element;
        if(this.props.documentMovementList) {
          element = this.props.documentMovementList[0];
          console.log(element);
        }

    const movements = this.props.documentMovementList?.map(
      (documentMovement) => (
        <DocumentMovementRow
          key={documentMovement.id}
          documentMovement={documentMovement}
          acceptDocument={acceptDocument}
        />
      )
    );

    return (
      <div className="table-responsive tableHeight">
        <table className="table table-sm table-striped table-bordered ">
          <thead>
            <tr>
              <th>{'ID'}</th>
              <th>{translation.name}</th>
              <th>{translation.employeeSend}</th>
              <th>{translation.employeeReceived}</th>
              <th>{translation.startDate}</th>
              <th>{translation.role}</th>
              <th>{translation.confirm}</th>
            </tr>
          </thead>
          <tbody> {movements}</tbody>
        </table>
      </div>
    );
  }
}

export default DocumentMovementTable;
