import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import {DocumentType, documentStatus} from '../../globals';
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
} from '../../actions/documentActions';
import {
  uploadDocumentAttachment,
  getDocumentAttachmentByDocumentName,
  getDocumentAttachmentsByDocument,
  clearDocumentAttachmets,
  deleteDocumentAttachment,
} from '../../actions/documentAttachmentActions';
import {getCases} from '../../actions/caseActions';
import {getEmployees} from '../../actions/employeeActions';
import {getPhysicalEntities} from '../../actions/physicalEntityActions';
import ModalForUpdateDocument from './ModalForUpdateDocument';
import {
  documentModalForAddAndUpdateTranslation,
} from '../../translations';
import DocumentAttachemntList from '../Containers/DocumentAttachmentList';
import './table.css';
import {Row, Col} from 'react-bootstrap';
import {input} from '../DocumentAttachment/input.css';
import {
  getDocumentMovementByDocumentId,
  addDocumentVerificationEmployee,
  addDocumentSingingEmployee,
  addDocumentSingedEmployee,
  addDocumentFinalEmployee,
  revokeDocumentMovement,
} from '../../actions/documentMovementActions';
import ModalForAddVerificationEmployeeToDocument from './ModalForAddVerificationEmployeeToDocument';
import ModalForSingingEmployeeToDocument from './ModalForAddSigingEmployeeToDocument';
import ModalForSingedEmployeeToDocument from './ModalForSingedEmployeeToDocument';
import ModalForFinalEmployeeToDocument from './ModalForFinalEmployeeToDocument';
import {resetError} from '../../actions/organizationalUnitAcitons';
import ModalForRevokeDocumentMovement from './ModalForRevokeDocumentMovement';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';

class DocumentProcessing extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      showModalForAddVerificationEmployee: false,
      showModalForAddSingingEmployee: false,
      showModalForAddSingedEmployee: false,
      showModalForAddFinalEmployee: false,
      showModalForRevokeDocumentMovement: false,
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
    this.props.getDocumentAttachmentsByDocument(id);
    this.props.getEmployees();
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

  onSubmit = (e) => {
    e.preventDefault();

    const updatedDocument = {
      id: this.state.id,
      title: this.state.title,
      documentNumber: this.state.documentNumber,
      externalNumber: this.state.externalNumber,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.props.document.documentStatus,
      employeeCreated: {
        id: this.state.employeeCreated.id,
      },
      _case: {
        id: this.state._case.id,
      },
    };
    this.props.updateDocument(updatedDocument);
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}});
  };

  showModalForAddVerificationEmployee = () => {
    this.setState({showModalForAddVerificationEmployee: true});
  };

  closeModalForAddVerificationEmployee = () => {
    this.setState({showModalForAddVerificationEmployee: false});
  };

  handleAddVerificationEmployee = (documentMovement) => {
    this.props.addDocumentVerificationEmployee(
      documentMovement,
      this.closeModalForAddVerificationEmployee
    );
  };

  showModalForAddSingingEmployee = () => {
    this.setState({showModalForAddSingingEmployee: true});
  };

  closeModalForAddSingingEmployee = () => {
    this.setState({showModalForAddSingingEmployee: false});
  };

  handleAddSingingEmployee = (documentMovement) => {
    this.props.addDocumentSingingEmployee(
      documentMovement,
      this.closeModalForAddSingingEmployee
    );
  };

  showModalForAddSingedEmployee = () => {
    this.setState({showModalForAddSingedEmployee: true});
  };

  closeModalForAddSingedEmployee = () => {
    this.setState({showModalForAddSingedEmployee: false});
  };

  handleAddSingedEmployee = (documentMovement) => {
    this.props.addDocumentSingedEmployee(
      documentMovement,
      this.closeModalForAddSingedEmployee
    );
  };

  showModalForAddFinalEmployee = () => {
    this.setState({showModalForAddFinalEmployee: true});
  };

  closeModalForAddFinalEmployee = () => {
    this.setState({showModalForAddFinalEmployee: false});
  };

  handleAddFinalEmployee = (documentMovement) => {
    this.props.addDocumentFinalEmployee(
      documentMovement,
      this.closeModalForAddFinalEmployee
    );
  };

  showModalForRevokeDocumentMovement = () => {
    this.setState({showModalForRevokeDocumentMovement: true});
  };

  closeModalForRevokeDocumentMovement = () => {
    this.setState({showModalForRevokeDocumentMovement: false});
    this.props.resetError();
  };

  handleRevokeDocumentMovement = (documentForUpdate) => {
    this.props.resetError();
    this.props.revokeCaseMovement(
      documentForUpdate,
      this.showModalForRevokeDocumentMovement
    );
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
    const translation1 = documentModalForAddAndUpdateTranslation || {};
    const {SelectOptionsAndPlaceholders} = translation1;

    const {
      document,
      employeeList,
      caseList,
      physicalEntityList,
      documentAttachmentList,
      attachmentContent,
      uploadDocumentAttachment,
      clearDocumentAttachmets,
      deleteDocumentAttachment,
      getDocumentAttachmentsByDocument,
      getDocumentAttachmentByDocumentName,
      error,
      documentFromDocumentMovement,
      resetError,
    } = this.props || {};

    return (
      <div className="table-responsive tableHeight">
        <div className="container">
          <div className="row">
            <div className="wrapperDP">
              <div className="documentProcessing">
                <Row className="col-md-14 m-auto">
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      {SelectOptionsAndPlaceholders.titlePlaceholder}
                      <input
                        type="text"
                        className={classnames('form-control', {
                          'is-invalid': errors.title,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.titlePlaceholder
                        }
                        name="title"
                        value={this.state.title}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
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
                  </Col>
                </Row>
                <Row className="col-md-14 m-auto">
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      {SelectOptionsAndPlaceholders.typePlaceholder}
                      <input
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.typePlaceholder
                        }
                        name="documentType"
                        value={this.state.documentType}
                        style={{fontSize: '1rem'}}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      {SelectOptionsAndPlaceholders.statusPlaceholder}
                      <input
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.statusPlaceholder
                        }
                        name="documentStatus"
                        value={this.state.documentStatus}
                        style={{fontSize: '1rem'}}
                        onChange={this.onChange}
                        disabled
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="col-md-16 m-auto">
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      {SelectOptionsAndPlaceholders.employeePlaceholder}
                      <input
                        className="form-control form-control-lg"
                        employeeList={employeeList}
                        name="employeeCreated"
                        placeholder={
                          SelectOptionsAndPlaceholders.employeePlaceholder
                        }
                        value={this.state?.employeeCreated?.id}
                        style={{fontSize: '1rem'}}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-group">
                      {SelectOptionsAndPlaceholders._casePlaceholder}
                      <input
                        className="form-control form-control-lg"
                        caseList={caseList}
                        name="_case"
                        placeholder={
                          SelectOptionsAndPlaceholders._casePlaceholder
                        }
                        value={this.state?._case?.id}
                        style={{fontSize: '1rem'}}
                        disabled
                      />
                    </div>
                  </Col>
                </Row>
<hr/>
                <Row style = {{marginLeft:"5%"}}>
                <div className="dugme" style = {{margin:"2%"}}> 
                  <Link to={`/documentList`} >
                    <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
                  </Link>
                  </div>

                  <Button
                    className="button"
                    variant="link"
                    onClick={() => this.showModalForAddVerificationEmployee()}
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
                      employeeList={employeeList}
                      caseList={caseList}
                    />
                  )}

                  {this.state.documentStatus === 'PROCEEDING' && (
                    <Button
                      className="button"
                      variant="link"
                      onClick={() => this.onVerificated(document)}
                    >
                      <i class="fas fa-user-check fa-3x" />
                    </Button>
                  )}
                </Row>
              </div>
              <div className="documentAttachemntTable">
                <DocumentAttachemntList
                  id={document.id}
                  documentAttachmentList={documentAttachmentList}
                  attachmentContent={attachmentContent}
                  uploadDocumentAttachment={uploadDocumentAttachment}
                  getDocumentAttachmentsByDocument={
                    getDocumentAttachmentsByDocument
                  }
                  clearDocumentAttachmets={clearDocumentAttachmets}
                  deleteDocumentAttachment={deleteDocumentAttachment}
                  getDocumentAttachmentByDocumentName={
                    getDocumentAttachmentByDocumentName
                  }
                />
                )

                {this.state.documentStatus === 'VERIFICATION' && (
                  <Button
                    className="button"
                    variant="link"
                    type="submit"
                    onClick={() => this.showModalForAddSingingEmployee()}
                  >
                    <i class="fas fa-pen-fancy fa-3x" />
                  </Button>
                )}

                {this.state.documentStatus === 'SIGNING' && (
                  <Button
                    className="button"
                    variant="link"
                    type="submit"
                    onClick={() => this.showModalForAddSingedEmployee()}
                  >
                    <i class="fas fa-stamp fa-3x" />
                  </Button>
                )}

                {this.state.documentStatus === 'SIGNED' && (
                  <Button
                    className="button"
                    variant="link"
                    type="submit"
                    onClick={() => this.showModalForAddFinalEmployee()}
                  >
                    <i class="far fa-check-circle fa-3x" />
                  </Button>
                )}
                <Tooltip title="Опозови" arrow placement="top-end">
                  <Button
                    className="button"
                    variant="link"
                    type="submit"
                    onClick={() => {
                      this.showModalForRevokeDocumentMovement();
                    }}
                    style={{fontSize: 40}}
                  >
                    <i class="fas fa-user-times"></i>
                  </Button>
                </Tooltip>
              </div>
            </div>

            {this.state.showModalForAddVerificationEmployee && (
              <ModalForAddVerificationEmployeeToDocument
                id={this.props.match.params.id}
                document={document}
                error={error}
                showModalForAddVerificationEmployee={
                  this.state.showModalForAddVerificationEmployee
                }
                closeModalForAddVerificationEmployee={
                  this.closeModalForAddVerificationEmployee
                }
                handleAddVerificationEmployee={
                  this.handleAddVerificationEmployee
                }
                employeeList={employeeList}
                physicalEntityList={physicalEntityList}
                documentFromDocumentMovement={documentFromDocumentMovement}
                resetError={resetError}
              />
            )}
            {this.state.showModalForAddSingingEmployee && (
              <ModalForSingingEmployeeToDocument
                id={this.props.match.params.id}
                document={document}
                error={error}
                showModalForAddSingingEmployee={
                  this.state.showModalForAddSingingEmployee
                }
                closeModalForAddSingingEmployee={
                  this.closeModalForAddSingingEmployee
                }
                handleAddSingingEmployee={this.handleAddSingingEmployee}
                employeeList={employeeList}
                physicalEntityList={physicalEntityList}
                documentFromDocumentMovement={documentFromDocumentMovement}
                resetError={resetError}
              />
            )}

            {this.state.showModalForAddSingedEmployee && (
              <ModalForSingedEmployeeToDocument
                id={this.props.match.params.id}
                document={document}
                error={error}
                showModalForAddSingedEmployee={
                  this.state.showModalForAddSingedEmployee
                }
                closeModalForAddSingedEmployee={
                  this.closeModalForAddSingedEmployee
                }
                handleAddSingedEmployee={this.handleAddSingedEmployee}
                employeeList={employeeList}
                physicalEntityList={physicalEntityList}
                documentFromDocumentMovement={documentFromDocumentMovement}
                resetError={resetError}
              />
            )}

            {this.state.showModalForAddFinalEmployee && (
              <ModalForFinalEmployeeToDocument
                id={this.props.match.params.id}
                document={document}
                error={error}
                showModalForAddFinalEmployee={
                  this.state.showModalForAddFinalEmployee
                }
                closeModalForAddFinalEmployee={
                  this.closeModalForAddFinalEmployee
                }
                handleAddFinalEmployee={this.handleAddFinalEmployee}
                employeeList={employeeList}
                physicalEntityList={physicalEntityList}
                documentFromDocumentMovement={documentFromDocumentMovement}
                resetError={resetError}
              />
            )}
            {this.showModalForRevokeDocumentMovement && (
              <ModalForRevokeDocumentMovement
                id={this.props.match.params.id}
                document={document}
                error={error}
                showModalForRevokeDocumentMovement={
                  this.state.showModalForRevokeDocumentMovement
                }
                closeModalForRevokeDocumentMovement={
                  this.closeModalForRevokeDocumentMovement
                }
                handleRevokeDocumentMovement={this.handleRevokeDocumentMovement}
                employeeList={employeeList}
                physicalEntityList={physicalEntityList}
                documentFromDocumentMovement={documentFromDocumentMovement}
                resetError={resetError}
              />
            )}
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  document: state.document.document,
  documentAttachmentList: state.documentAttachment.documentAttachmentList,
  documentAttachment: state.documentAttachment.documentAttachment,
  attachmentContent: state.documentAttachment.attachmentContent,
  employeeList: state.employee.employeeList,
  physicalEntityList: state.physicalEntity.physicalEntityList,
  caseList: state.case.caseList,
  documentAttachmentList: state.documentAttachment.documentAttachmentList,
  attachmentContent: state.documentAttachment.attachmentContent,
  documentMovement: state.documentMovement,
  error: state.error,
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
  uploadDocumentAttachment,
  getDocumentAttachmentsByDocument,
  getDocumentAttachmentByDocumentName,
  clearDocumentAttachmets,
  deleteDocumentAttachment,
  addDocumentVerificationEmployee,
  addDocumentSingingEmployee,
  addDocumentSingedEmployee,
  addDocumentFinalEmployee,
  revokeDocumentMovement,
  resetError,
})(DocumentProcessing);
