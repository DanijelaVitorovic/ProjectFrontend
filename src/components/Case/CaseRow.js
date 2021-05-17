import React, {Component, Fragment} from 'react';
import ModalForUpdateCase from './ModalForUpdateCase';

import {formatDateFromBackend} from '../../utils';
import {CaseRowTranslation} from '../../translations';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CaseProcessingList from './CaseProcessingList';
import Tooltip from '@material-ui/core/Tooltip';
import UpdateButton from '../Reusable/UpdateButton';
import button from '../Reusable/button.css';
import {getCaseOwner, getCaseProcessor} from '../../globals';
import './deadline.css';
import Moment from 'moment';

class CaseRow extends Component {
  constructor() {
    super();
    this.state = {show: false};
  }

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  handleUpdate = (updatedCase) => {
    this.props.updateCase(updatedCase);
    this.closeModal();
  };
  render() {
    const {
      getCase,
      caseForUpdate,
      physicalEntityList,
      employeeList,
      processList,
    } = this.props || {};

    const translation = CaseRowTranslation;
    const statement = this.props.case.remainingDays;

    const row = (
      <tr>
        <td>{this.props.case.caseName}</td>
        <td>{this.props.case.caseNumber}</td>
        <td>{getCaseOwner(this.props.case)}</td>
        <td>{getCaseProcessor(this.props.case)}</td>
        <td>{this.props.case.refersTo.firstName}</td>
        <td>{Moment(this.props.case.startDate).format('DD.MM.YYYY.')}</td>
        <td>{this.props.case.caseStatus}</td>
        {this.props.case.remainingDays <= 0 && (
          <td className="isteklo">{Math.abs(this.props.case.remainingDays)}</td>
        )}
        {this.props.case.remainingDays > 0 &&
          this.props.case.remainingDays <= 3 && (
            <td className="predIstek">
              {Math.abs(this.props.case.remainingDays)}
            </td>
          )}
        {this.props.case.remainingDays > 4 && (
          <td className="uRoku">{Math.abs(this.props.case.remainingDays)}</td>
        )}
        <td className="text-center">
          <UpdateButton showModal={this.showModal} id={document} />
        </td>
        <td className="text-center">
          <Link
            to={`/caseProcessingList/${this.props.case.id}`}
            id={this.props.case.id}
          >
            <Tooltip title={translation.listOfDocuments} arrow>
              <IconButton color="primary">
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateCase
            show={this.state.show}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            id={this.props.case.id}
            getCase={getCase}
            caseForUpdate={caseForUpdate}
            physicalEntityList={physicalEntityList}
            employeeList={employeeList}
            processList={processList}
          />
        )}
      </Fragment>
    );
  }
}

export default CaseRow;
