import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { DocumentType, documentStatus } from "../../globals";
import {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  verificationDocument,
  signingDocument,
  signedDocument,
  finalDocument,
} from "../../actions/documentActions";
import { getCases } from "../../actions/caseActions";
import { getEmployees } from "../../actions/employeeActions";
import { getPhysicalEntities } from "../../actions/physicalEntityActions";
import ModalForUpdateDocument from "./ModalForUpdateDocument";
import { documentModalForAddAndUpdateTranslation } from "../../translations";

class DocumentProcessing extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      title: '',
      documentNumber: '',
      externalNumber: '',
      description: '',
      documentType: '',
      documentStatus: '',
      employeeCreated: {
        id: 0,
      },
      _case: {
        id: 0,
      },
      errors: {},
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getDocument(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }

    const {
      id,
      title,
      documentNumber,
      externalNumber,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      _case,
    } = nextProps.document;

    this.setState({
      id,
      title,
      documentNumber,
      externalNumber,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      _case,
    });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}});
  };

  onVerificated = (document) => {
    this.props.verificationDocument(document);
  };

  onSinging = (document) => {
    this.props.signingDocument(document);
  };

  onSinged = (document) => {
    this.props.signedDocument(document);
  };

  onFinal = (document) => {
    this.props.finalDocument(document);
  };

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  handleUpdate = (updatedDocument) => {
    this.props.updateDocument(updatedDocument);
    this.closeModal();
  };

  render() {
    const {errors} = this.state;
    const translation = documentModalForAddAndUpdateTranslation || {};
    const {SelectOptionsAndPlaceholders} = translation;
    const {document, employees, caseList} = this.props || {};

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <hr />
              {SelectOptionsAndPlaceholders.titlePlaceholder}
              <div className="form-group">
                <input
                  type="text"
                  className={classnames('form-control', {
                    'is-invalid': errors.title,
                  })}
                  placeholder={SelectOptionsAndPlaceholders.titlePlaceholder}
                  name="title"
                  value={this.state.title}
                  disabled
                />
              </div>

              <div className="form-group">
                {SelectOptionsAndPlaceholders.descriptionPlaceholder}
                <input
                  type="text"
                  className={classnames('form-control', {
                    'is-invalid': errors.description,
                  })}
                  placeholder={
                    SelectOptionsAndPlaceholders.descriptionPlaceholder
                  }
                  name="description"
                  value={this.state.description}
                  disabled
                />
              </div>

              <div className="form-group">
                {SelectOptionsAndPlaceholders.typePlaceholder}
                <select
                  className="form-control form-control-lg"
                  placeholder={SelectOptionsAndPlaceholders.typePlaceholder}
                  name="documentType"
                  value={this.state.documentType}
                  style={{fontSize: '1rem'}}
                  disabled
                >
                  <option value="" selected disabled>
                    {SelectOptionsAndPlaceholders.typeOption}
                  </option>
                  {Object.keys(DocumentType).map((key) => (
                    <option key={key} value={key}>
                      {DocumentType[key].translation}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                {SelectOptionsAndPlaceholders.statusPlaceholder}
                <select
                  className="form-control form-control-lg"
                  placeholder={SelectOptionsAndPlaceholders.statusPlaceholder}
                  name="documentStatus"
                  value={this.state.documentStatus}
                  style={{fontSize: '1rem'}}
                  onChange={this.onChange}
                  disabled
                >
                  <option value="" selected disabled>
                    {SelectOptionsAndPlaceholders.statusOption}
                  </option>
                  {Object.keys(documentStatus).map((key) => (
                    <option key={key} value={key}>
                      {documentStatus[key].translation}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                {SelectOptionsAndPlaceholders.employeePlaceholder}
                <select
                  className="form-control form-control-lg"
                  employees={employees}
                  name="employeeCreated"
                  placeholder={SelectOptionsAndPlaceholders.employeePlaceholder}
                  value={this.state.employeeCreated.id}
                  style={{fontSize: '1rem'}}
                  disabled
                >
                  <option value="" selected disabled>
                    {SelectOptionsAndPlaceholders.employeeOption}
                  </option>
                  {employees.map((employee) => {
                    return (
                      <option value={employee.id}>
                        {employee.physicalEntity.firstName}{' '}
                        {employee.physicalEntity.lastName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                {SelectOptionsAndPlaceholders._casePlaceholder}
                <select
                  className="form-control form-control-lg"
                  caseList={caseList}
                  name="_case"
                  placeholder={SelectOptionsAndPlaceholders._casePlaceholder}
                  value={this.state._case.id}
                  style={{fontSize: '1rem'}}
                  disabled
                >
                  <option value="" selected disabled>
                    {SelectOptionsAndPlaceholders._caseOption}
                  </option>
                  {caseList.map((_case) => {
                    return <option value={_case.id}>{_case.caseName}</option>;
                  })}
                </select>
              </div>

              <div className="row">
                <Link to={`/documentList`}>
                  <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
                </Link>

                <Button
                  className="dugme"
                  variant="link"
                  onClick={() => {
                    this.showModal();
                  }}
                >
                  <i className="fas fa-pen-alt fa-3x"></i>
                </Button>
                {this.state.show && (
                  <ModalForUpdateDocument
                    show={this.state.show}
                    id={this.state.id}
                    documentForUpdate={this.state}
                    handleUpdate={this.handleUpdate}
                    closeModal={this.closeModal}
                    getDocument={this.props.getDocument}
                    employees={employees}
                    caseList={caseList}
                  />
                )}

                {this.state.documentStatus === 'PROCEEDING' && (
                  <Button
                    className="dugme"
                    variant="link"
                    onClick={() => this.onVerificated(document)}
                  >
                    <i class="fas fa-user-check fa-3x" />
                  </Button>
                )}

                {this.state.documentStatus === 'VERIFICATION' && (
                  <Button
                    className="dugme"
                    variant="link"
                    type="submit"
                    onClick={() => this.onSinging(document)}
                  >
                    <i class="fas fa-pen-fancy fa-3x" />
                  </Button>
                )}

                {this.state.documentStatus === 'SIGNING' && (
                  <Button
                    className="dugme"
                    variant="link"
                    type="submit"
                    onClick={() => this.onSinged(document)}
                  >
                    <i class="fas fa-stamp fa-3x" />
                  </Button>
                )}

                {this.state.documentStatus === 'SIGNED' && (
                  <Button
                    className="dugme"
                    variant="link"
                    type="submit"
                    onClick={() => this.onFinal(document)}
                  >
                    <i class="far fa-check-circle fa-3x" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  document: state.document.document,
  employees: state.employee.employeeList,
  physicalEntities: state.physicalEntity.physicalEntityList,
  caseList: state.case.caseList,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  getEmployees,
  getPhysicalEntities,
  getCases,
  verificationDocument,
  signingDocument,
  signedDocument,
  finalDocument,
})(DocumentProcessing);
