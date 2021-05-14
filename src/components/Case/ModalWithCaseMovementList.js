import React, { Component } from "react";
import { CaseType, getPhysicalEntityName } from "../../../src/globals";
import { Modal, ModalFooter, Card } from "react-bootstrap";
import {
  CaseModalForAddAndUpdateTranslation,
  caseValidationsTranslation,
} from "../../translations";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";
import { CaseTableTranslation } from "../../translations";
import CaseMovementListRow from "./CaseMovementListRow";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { modalWithCaseMovementListTranslation } from "../../translations";

export default class ModalWithCaseMovementList extends Component {
  render() {
    const {
      physicalEntityList,
      showModalWithCaseMovementList,
      closeModalWithCaseMovementListOfCase,
      employeeList,
    } = this.props || {};
    const translation = modalWithCaseMovementListTranslation || {};

    const caseMovementListShowedInRow = this.props.caseMovementList.map(
      (caseMovement, index) => (
        <CaseMovementListRow
          key={caseMovement.id}
          caseMovement={caseMovement}
          physicalEntityList={physicalEntityList}
          employeeList={employeeList}
          index={++index}
        />
      )
    );

    return (
      <Modal
        show={showModalWithCaseMovementList}
        onHide={closeModalWithCaseMovementListOfCase}
        onRequestClose={closeModalWithCaseMovementListOfCase}
        size="xl"
        centered
        animation
      >
        <Card bg={"white"} text={"black"}>
          <Modal.Header closeButton></Modal.Header>

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="display-5 text-center">
                    {translation.heading}
                  </h3>
                  <div className="table-responsive tableHeight">
                    <table
                      id="example"
                      className="table table-sm table-striped table-bordered "
                    >
                      <thead>
                        <tr>
                          <th>{translation.index} </th>
                          <th>{translation.sendFrom} </th>
                          <th>{translation.sendFor} </th>
                          <th>{translation.startDate} </th>
                          <th>{translation.endDate} </th>
                          <th>{translation.role} </th>
                          <th>{translation.state} </th>
                        </tr>
                      </thead>
                      <tbody>{caseMovementListShowedInRow}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <ModalFooter></ModalFooter>
        </Card>
      </Modal>
    );
  }
}
