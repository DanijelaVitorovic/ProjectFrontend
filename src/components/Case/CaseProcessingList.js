import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getCase, getCases } from "../../actions/caseActions";
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

class CaseProcessingList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
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

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCase(id);
    this.props.getDocumentsByCase(id);
    this.props.getEmployees();
  }

  render() {
    const translation = CaseModalForAddAndUpdateTranslation || {};
    const { SelectOptionsAndPlaceholders } = translation;
    const translation1 = documentTableTranslation || {};
    const { HeaderColumns } = translation1;
    const translation2 = documentListTranslation || {};
    const { Header } = translation2;
    const translation3 = CaseProcessingListTranslation || {};
    const _case = this.props.case.case || {};
    const { documents } = this.props.document || {};
    const { createDocument, physicalEntityList } = this.props || {};
    const employees = this.props.employee.employeeList || {};
    const processor = _case?.processor?.physicalEntity?.firstName;
    const owner = _case?.owner?.physicalEntity?.firstName;
    const refersTo = _case.refersTo?.firstName;
    const startDate = _case?.startDate;
    const { caseList, getDocument } = this.props || {};

    const paperCaseView = (
      <Paper style={{ marginLeft: 100 }}>
        <div className="register">
          <div className="container">
            <Link to={`/caseList`}>
              <Tooltip title={translation3.back} arrow>
                <ArrowBackIcon style={{ fontSize: 40 }} />
              </Tooltip>
            </Link>
            <div className="row">
              <div className="col-md-12 m-auto">
                <h3
                  className="display-5 text-center"
                  style={{ paddingBottom: 20, paddingTop: 20 }}
                >
                  {translation3.heading} {_case.id}
                </h3>
                <hr />
                <Row>
                  <Col xs={6} md={4}>
                    <div className="form-group">
                      <label>
                        {translation3.caseName}
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
                        {translation3.caseNamber}
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
                        {translation3.caseType}
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
                        {translation3.caseStatus}
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
                        {translation3.caseState}
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
                        {translation3.description}
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
                        {translation3.owner}
                        <input
                          className="form-control"
                          name="owner"
                          value={owner}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      <label>
                        {translation3.refersTo}
                        <input
                          className="form-control"
                          name="refersTo"
                          value={refersTo}
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
                        {translation3.processor}
                        <input
                          className="form-control"
                          name="processor"
                          value={processor}
                          disabled
                        />
                      </label>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      <label>
                        {translation3.startDate}
                        <input
                          className="form-control"
                          name="startDate"
                          value={formatDateFromBackend(startDate)}
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
                <div align="right">
                  <Tooltip title={Header.title} arrow>
                    <IconButton
                      title={Header.title}
                      className="btn btn-info"
                      type="submit"
                      size="lm"
                      onClick={() => {
                        this.showModal();
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <h3
                  className="display-5 text-center"
                  style={{ paddingBottom: 25 }}
                >
                  {Header.heading}
                </h3>
                <DocumentTable
                  documents={documents}
                  createDocument={createDocument}
                  getDocument={getDocument}
                  employees={employees}
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
});

export default connect(mapStateToProps, {
  getCase,
  getDocumentsByCase,
  createDocument,
  getEmployees,
  getDocument,
  getDocuments,
  getCases,
})(CaseProcessingList);
