import React, {Component, Fragment} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import DocumentRow from './DocumentRow';
import ModalForAddDocument from './ModalForAddDocument';
import table from './table.css';
import {documentTableTranslation} from '../../translations';
import ModalForAddCaseAndDocument from './ModalForAddCaseAndDocument';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import i18next from 'i18next';

class DocumentTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      documentClassification: '',
    };
  }

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  handleAdd = (newDocument) => {
    this.props.createDocument(newDocument);
    this.closeModal();
  };

  showModalForAddCaseAndDocument = () => {
    this.setState({showModalForAddingCaseAndDocument: true});
  };

  closeModalForAddCaseAndDocument = () => {
    this.setState({showModalForAddingCaseAndDocument: false});
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append('file', this.state.uploadedFile);

    const {id} = this.props;

    this.props.uploadDocumentAttachment(formData, id);
    this.closeModal();
  };

  handleAddCaseAndDocument = (newCaseDocumentDTO, formData) => {
    this.props.createDocumentWithCaseAndAttachment(
      newCaseDocumentDTO,
      formData
    );
    this.closeModalForAddCaseAndDocument();
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const {
      documentList,
      createDocument,
      updateDocument,
      getDocument,
      deleteDocument,
      caseList,
      employeeList,
      physicalEntityList,
      caseProcessingViewSignal,
      createDocumentWithCaseAndAttachment,
      processTypeList,
      documentClassificationList,
    } = this.props || {};

    const translation = documentTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;
    const documents = documentList?.map((document) => (
      <DocumentRow
        key={document.id}
        document={document}
        createDocument={createDocument}
        updateDocument={updateDocument}
        getDocument={getDocument}
        deleteDocument={deleteDocument}
        caseList={caseList}
        employeeList={employeeList}
        processTypeList={processTypeList}
        physicalEntityList={physicalEntityList}
        caseProcessingViewSignal={caseProcessingViewSignal}
      />
    ));

    const renderTable = (
      <div className="table-responsive tableHeight">
        {!caseProcessingViewSignal && (
          <Fragment>
            <div align="left" style={{paddingBottom: 20}}>
              <Link to={`/dashboard`}>
                <Tooltip
                  title={i18next.t('documentTableTranslationBack')}
                  arrow
                >
                  <ArrowBackIcon style={{fontSize: 40}} color="primary" />
                </Tooltip>
              </Link>

              <Tooltip
                title={i18next.t('documentTableTranslationAddNewDocument')}
                arrow
              >
                <IconButton
                  className="btn btn-info"
                  type="submit"
                  size="lm"
                  onClick={() => {
                    this.showModalForAddCaseAndDocument();
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div
              className=" navbar-expand-sm navbar-dark mb-12 lightNavbar"
              style={{background: 'white', width: 400}}
            >
              <ul className="navbar-nav mr-auto">
                <li>
                  <div>
                    <select
                      documentClassificationList={documentClassificationList}
                      name="document"
                      onChange={this.onChange}
                    >
                      <option value="" selected disabled>
                        Klasifikacija
                      </option>
                      {documentClassificationList.map(
                        (documentClassification) => {
                          return (
                            <option value={documentClassification.id}>
                              {documentClassification.title}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </li>{' '}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownUsersLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ddddd
                  </a>
                </li>
              </ul>
            </div>
          </Fragment>
        )}
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col"> {i18next.t('documentTableTranslatioId')}</th>
              <th scope="col"> {i18next.t('documentTableTranslatioTitle')}</th>
              <th scope="col">{i18next.t('documentTableTranslatioType')}</th>
              <th scope="col">{i18next.t('documentTableTranslatioStatus')}</th>
              <th scope="col">
                {i18next.t('documentTableTranslatioEmployee')}
              </th>
              {!caseProcessingViewSignal && (
                <Fragment>
                  <th scope="col">
                    {' '}
                    {i18next.t('documentTableTranslatioCase')}
                  </th>
                </Fragment>
              )}
              <th scope="col" className="text-center">
                {i18next.t('documentTableTranslatioUpdate')}
              </th>
              {!caseProcessingViewSignal && (
                <Fragment>
                  <th scope="col" className="text-center">
                    {i18next.t('documentTableTranslatioDelete')}
                  </th>
                </Fragment>
              )}
            </tr>
          </thead>
          <tbody>{documents}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {renderTable}
        {
          <ModalForAddDocument
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            createDocument={createDocument}
            caseList={caseList}
            employeeList={employeeList}
            documents={documents}
            physicalEntityList={physicalEntityList}
          />
        }
        {this.state.showModalForAddingCaseAndDocument && (
          <ModalForAddCaseAndDocument
            showModalForAddingCaseAndDocument={
              this.state.showModalForAddingCaseAndDocument
            }
            closeModalForAddCaseAndDocument={
              this.closeModalForAddCaseAndDocument
            }
            handleAddCaseAndDocument={this.handleAddCaseAndDocument}
            employeeList={employeeList}
            physicalEntityList={physicalEntityList}
            caseList={caseList}
            createDocumentWithCaseAndAttachment={
              createDocumentWithCaseAndAttachment
            }
            processTypeList={processTypeList}
            documentClassificationList={documentClassificationList}
          />
        )}
      </Fragment>
    );
  }
}

export default DocumentTable;
