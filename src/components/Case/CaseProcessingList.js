import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getCase, getCases, updateCase } from "../../actions/caseActions";
import {
  addOwnerToCase,
  addProcessorToCase,
  getCaseMovementByCaseId,
} from "../../actions/caseMovementActions";
import { connect } from "react-redux";
import {
  CaseModalForAddAndUpdateTranslation,
  documentListTranslation,
  CaseProcessingListTranslation,
} from "../../translations";
import { documentTableTranslation } from "../../translations";
import { Row, Col } from "react-bootstrap";
import { formatDateFromBackend } from "../../utils";
import {
  createDocument,
  getDocument,
  getDocuments,
  getDocumentsByCase,
} from "../../actions/documentActions";
import AddIcon from "@material-ui/icons/Add";
import { getEmployees } from "../../actions/employeeActions";
import ModalForAddDocumentByCase from "./ModalForAddDocumentByCase";
import IconButton from "@material-ui/core/IconButton";
import DocumentTable from "../Document/DocumentTable";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  getEmployeeName,
  getPhysicalEntityName,
  getCaseProcessor,
  getCaseOwner,
  getCaseRefersTo,
} from "../../globals";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ModalForAddOwnerToCase from "./ModalForAddOwnerToCase";
import { resetError } from "../../actions/organizationalUnitAcitons";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ModalForAddProcessorToCase from "./ModalForAddProcessorToCase";

class CaseProcessingList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showModalForAddOwner: false,
      showModalForAddProcessor: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: nextProps.error });
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  handleAdd = (newDocument) => {
    this.props.createDocument(newDocument);
    this.closeModal();
  };

  showModalForAddOwnerToCase = () => {
    this.setState({ showModalForAddOwner: true });
  };

  closeModalForAddOwnerToCase = () => {
    this.props.resetError();
    this.setState({ showModalForAddOwner: false });
  };

  handleAddOwner = (newCaseMovement) => {
    this.props.addOwnerToCase(
      newCaseMovement,
      this.closeModalForAddOwnerToCase
    );
  };

  showModalForAddProcessorToCase = () => {
    this.setState({ showModalForAddProcessor: true });
  };

  closeModalForAddProcessorToCase = () => {
    this.props.resetError();
    this.setState({ showModalForAddProcessor: false });
  };

  handleAddProcessor = (updatedCaseMovement, id) => {
    this.props.addProcessorToCase(
      updatedCaseMovement,
      id,
      this.closeModalForAddProcessorToCase
    );
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCase(id);
    this.props.getDocumentsByCase(id);
    this.props.getEmployees();
  }

  render() {
    const translationCaseModal = CaseModalForAddAndUpdateTranslation || {};
    const { SelectOptionsAndPlaceholders } = translationCaseModal;
    const translationDocumentList = documentListTranslation || {};
    const { Header } = translationDocumentList;
    const translationCaseProcessing = CaseProcessingListTranslation || {};
    const _case = this.props.case.case || {};
    const documents = this.props.document.documentList || {};
    const { createDocument, physicalEntityList } = this.props || {};
    const employees = this.props.employee.employeeList || {};
    const startDate = _case?.startDate;
    const { caseList, getDocument, error } = this.props || {};
    const { caseMovement } = this.props.caseMovement || {};

    const paperCaseView = (
      <Paper style={{ marginLeft: 100 }}>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-12 m-auto">
                <h3
                  className="display-5 text-center"
                  style={{ paddingBottom: 20, paddingTop: 20 }}
                >
                  {translationCaseProcessing.heading} {_case.id}
                </h3>
                <hr />
                <Row>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.caseName}
                        <input
                          type="text"
                          className="form-control"
                          name="caseName"
                          value={_case.caseName}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.caseNamber}
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.caseNumberPlaceholder
                          }
                          name="caseNumber"
                          value={_case.caseNumber}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.caseType}
                        <input
                          className="form-control"
                          name="caseType"
                          value={_case.caseType}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.caseStatus}
                        <input
                          type="text"
                          className="form-control"
                          name="caseStatus"
                          value={_case.caseStatus}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.caseState}
                        <input
                          type="text"
                          className="form-control"
                          name="caseState"
                          value={_case.caseState}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.description}
                        <input
                          className="form-control"
                          name="description"
                          value={_case.description}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="col-md-10 m-auto">
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.owner}
                        <input
                          className="form-control"
                          name="owner"
                          value={getCaseOwner(_case)}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.refersTo}
                        <input
                          className="form-control"
                          name="refersTo"
                          value={getCaseRefersTo(_case)}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="col-md-10 m-auto">
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.processor}
                        <input
                          className="form-control"
                          name="processor"
                          value={getCaseProcessor(_case)}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      <label>
                        {translationCaseProcessing.startDate}
                        <input
                          className="form-control"
                          name="startDate"
                          value={formatDateFromBackend(_case.startDate)}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <br />
      </Paper>
    );

    const paperDocuments = (
      <Paper style={{ marginRight: 100 }}>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-12 m-auto">
                <h3
                  className="display-5 text-center"
                  style={{ paddingBottom: 25 }}
                >
                  {Header.heading}
                </h3>
                <DocumentTable
                  documentList={documents}
                  createDocument={createDocument}
                  getDocument={getDocument}
                  employeeList={employees}
                  caseList={caseList}
                  caseProcessingViewSignal={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );

    return (
      <Fragment>
        {
          <div style={{ paddingTop: 50 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                {paperCaseView}
              </Grid>
              <Grid item xs={6}>
                {paperDocuments}
              </Grid>
            </Grid>
            <div style={{ paddingTop: 50 }}>
              <BottomNavigation showLabels>
                <div style={{ paddingRight: 60 }}>
                  <Link to={`/caseList`}>
                    <Tooltip
                      title={translationCaseProcessing.back}
                      arrow
                      placement="top-end"
                    >
                      <ArrowBackIcon style={{ fontSize: 40 }} />
                    </Tooltip>
                  </Link>
                </div>
                <Tooltip title="Додај власника" arrow placement="top-end">
                  <PersonPinIcon
                    type="submit"
                    onClick={() => {
                      this.showModalForAddOwnerToCase();
                    }}
                    style={{ fontSize: 40, color: "007BFF" }}
                  />
                </Tooltip>
                <div style={{ paddingLeft: 60 }}>
                  <Tooltip title="Додај обрађивача" arrow placement="top-end">
                    <PersonAddIcon
                      type="submit"
                      onClick={() => {
                        this.showModalForAddProcessorToCase();
                      }}
                      style={{ fontSize: 40, color: "007BFF" }}
                    />
                  </Tooltip>
                </div>
                <div style={{ paddingLeft: 60 }}>
                  <Tooltip title={Header.title} arrow placement="top-end">
                    <AddIcon
                      type="submit"
                      onClick={() => {
                        this.showModal();
                      }}
                      style={{ fontSize: 40, color: "007BFF" }}
                    />
                  </Tooltip>
                </div>
              </BottomNavigation>
            </div>
          </div>
        }
        {
          <ModalForAddDocumentByCase
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            createDocument={createDocument}
            employeeList={employees}
            physicalEntityList={physicalEntityList}
            id={this.props.match.params.id}
          />
        }
        {
          <ModalForAddOwnerToCase
            showModalForAddOwner={this.state.showModalForAddOwner}
            handleAddOwner={this.handleAddOwner}
            closeModalForAddOwnerToCase={this.closeModalForAddOwnerToCase}
            createDocument={createDocument}
            employeeList={employees}
            physicalEntityList={physicalEntityList}
            id={this.props.match.params.id}
            caseForUpdate={_case}
            updateCase={this.props.updateCase}
            error={error}
            resetError={this.props.resetError}
          />
        }
        {
          <ModalForAddProcessorToCase
            showModalForAddProcessor={this.state.showModalForAddProcessor}
            handleAddProcessor={this.handleAddProcessor}
            closeModalForAddProcessorToCase={
              this.closeModalForAddProcessorToCase
            }
            employeeList={employees}
            physicalEntityList={physicalEntityList}
            id={this.props.match.params.id}
            error={error}
            resetError={this.props.resetError}
            getCaseMovementByCaseId={this.props.getCaseMovementByCaseId}
            caseMovementForUpdate={caseMovement}
          />
        }
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  case: state.case,
  document: state.document,
  employee: state.employee,
  physicalEntity: state.physicalEntity,
  caseList: state.case.caseList,
  error: state.error,
  caseMovement: state.caseMovement,
});

export default connect(mapStateToProps, {
  getCase,
  getDocumentsByCase,
  createDocument,
  getEmployees,
  getDocument,
  getDocuments,
  getCases,
  addOwnerToCase,
  updateCase,
  resetError,
  addProcessorToCase,
  getCaseMovementByCaseId,
})(CaseProcessingList);
