import React, { Component, Fragment } from "react";
import ModalForUpdateCase from "./ModalForUpdateCase";

import { formatDateFromBackend } from "../../utils";
import { CaseRowTranslation } from "../../translations";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CaseProcessingList from "./CaseProcessingList";
import Tooltip from "@material-ui/core/Tooltip";
import UpdateButton from "../Reusable/UpdateButton";
import button from "../Reusable/button.css";

class CaseRow extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  handleUpdate = (updatedCase) => {
    this.props.updateCase(updatedCase);
    this.closeModal();
  };
  render() {
    const { getCase, caseForUpdate, physicalEntityList, employeeList } =
      this.props || {};

    const translation = CaseRowTranslation;

    const row = (
      <tr>
        <td>{this.props.case.caseName}</td>
        <td>{this.props.case.caseNumber}</td>
        <td>
          {this.props.case.owner &&
            this.props.case.owner.physicalEntity.firstName}
        </td>
        <td>
          {this.props.case.processor &&
            this.props.case.processor.physicalEntity.firstName}
        </td>
        <td>{this.props.case.refersTo.firstName}</td>
        <td>{formatDateFromBackend(new Date())}</td>
        <td>{this.props.case.caseStatus}</td>
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
          />
        )}
      </Fragment>
    );
  }
}

export default CaseRow;
