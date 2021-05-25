import React, {Component} from 'react';
import {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  createDocumentWithCase,
  createDocumentWithCaseAndAttachment,
  getAllDocuments,
} from '../../actions/documentActions';
import {getDocumentClassificatonList} from '../../actions/documentClassificationActions';
import {getCases} from '../../actions/caseActions';
import {getEmployees} from '../../actions/employeeActions';
import {connect} from 'react-redux';
import DocumentTable from '../Document/DocumentTable';
import {getPhysicalEntities} from '../../actions/physicalEntityActions';
import {getProcessTypes} from '../../actions/processTypeActions';
import './prevAndNextButtons.css';
import TablePagination from '@material-ui/core/TablePagination';
import i18next from 'i18next';

class DocumentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 10,
      totalPages: '',
      totalElements: '',
    };
    this.pageSizes = [5, 10, 15, 20];
  }
  componentDidMount() {
    const {page, rowsPerPage} = this.state;
    this.props.getAllDocuments(0, this.state.rowsPerPage);
    this.props.getPhysicalEntities();
    this.props.getEmployees();
    this.props.getProcessTypes();
    this.props.getDocumentClassificatonList();
    this.setState({
      totalElements: this.props.totalElements,
      totalPages: this.props.totalElements / rowsPerPage,
    });
  }

  onChangePage = (event, value) => {
    this.setState({
      page: value,
    });
    this.props.getAllDocuments(value, this.state.rowsPerPage);
  };

  onChangeRowsPerPage = (event, value) => {
    this.setState({
      rowsPerPage: event.target.value,
    });
    this.props.getAllDocuments(this.state.page, event.target.value);
  };

  render() {
    const {
      createDocument,
      updateDocument,
      getDocument,
      deleteDocument,
      createDocumentWithCase,
      createDocumentWithCaseAndAttachment,
      employeeList,
      physicalEntityList,
      caseList,
      documentList,
      processTypeList,
      documentClassificationList,
      totalElements,
    } = this.props || {};

    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3 success">
              <div className="card-header text-black ">
                <h3> {i18next.t('documentListTranslationHeading')}</h3>
              </div>
              <div className="mt-3">
                <div style={{marginLeft: '35%'}}>
                  <TablePagination
                    component="div"
                    name="page"
                    count={totalElements}
                    page={this.state.page}
                    onChangePage={this.onChangePage}
                    rowsPerPage={this.state.rowsPerPage}
                    onChangeRowsPerPage={this.onChangeRowsPerPage}
                    variant="outlined"
                    color="primary"
                    size="large"
                  />
                </div>
              </div>
              <div className="card-body">
                <DocumentTable
                  documentList={documentList}
                  createDocument={createDocument}
                  updateDocument={updateDocument}
                  getDocument={getDocument}
                  deleteDocument={deleteDocument}
                  employeeList={employeeList}
                  caseList={caseList}
                  processTypeList={processTypeList}
                  physicalEntityList={physicalEntityList}
                  createDocumentWithCase={createDocumentWithCase}
                  createDocumentWithCaseAndAttachment={
                    createDocumentWithCaseAndAttachment
                  }
                  documentClassificationList={documentClassificationList}
                  totalElements={this.props.document.totalElements}
                />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  documentList: state.document.documentList,
  totalElements: state.document.totalElements,
  document: state.document,
  documentAttachmentList: state.documentAttachment.documentAttachmentList,
  employeeList: state.employee.employeeList,
  physicalEntityList: state.physicalEntity.physicalEntityList,
  caseList: state.case.caseList,
  processTypeList: state.processType.processTypeList,
  documentClassificationList:
    state.documentClassification.documentClassificationList,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument,
  getCases,
  getEmployees,
  getPhysicalEntities,
  createDocumentWithCase,
  createDocumentWithCaseAndAttachment,
  getProcessTypes,
  getDocumentClassificatonList,
  getAllDocuments,
})(DocumentList);
