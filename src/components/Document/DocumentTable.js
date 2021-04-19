import React, { Component, Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import DocumentRow from "./DocumentRow";
import ModalForAddDocument from "./ModalForAddDocument";
import table from "./table.css";
import { documentTableTranslation } from "../../translations";
import ModalForAddCaseAndDocument from "./ModalForAddCaseAndDocument";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";

export default class DocumentTable extends Component {
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

  showModalForAddCaseAndDocument = () => {
    this.setState({ showModalForAddingCaseAndDocument: true });
  };

  closeModalForAddCaseAndDocument = () => {
    this.setState({ showModalForAddingCaseAndDocument: false });
  };

  handleAddCaseAndDocument = (newCaseDocumentDTO) => {
    this.props.createDocumentWithCase(newCaseDocumentDTO);
    this.closeModalForAddCaseAndDocument();
  };

  render() {
    const {
      documents,
      createDocument,
      updateDocument,
      getDocument,
      deleteDocument,
      caseList,
      employees,
      physicalEntities,
    } = this.props || {};

    const translation = documentTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;
    const documentList = documents.map((document) => (
      <DocumentRow
        key={document.id}
        document={document}
        createDocument={createDocument}
        updateDocument={updateDocument}
        getDocument={getDocument}
        deleteDocument={deleteDocument}
        caseList={caseList}
        employees={employees}
        physicalEntities={physicalEntities}
      />
    ));

    const table = (
      <div className="table-responsive tableHeight">
        <div class="btn-group">
          <div class="btn-group">
            <Button
              title="Унеси нови документ"
              className="btn btn-default "
              type="submit"
              size="lm"
              onClick={() => {
                this.showModal();
              }}
            >
              <AddTwoToneIcon />
            </Button>
          </div>
          <div class="btn-group">
            <Button
              title="Додај документ са предметом"
              class="btn btn-default"
              type="submit"
              variant="info"
              size="lm"
              onClick={() => {
                this.showModalForAddCaseAndDocument();
              }}
            >
              <AddTwoToneIcon />
            </Button>
          </div>
        </div>
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.title}</th>
              <th scope="col">{HeaderColumns.description}</th>
              <th scope="col">{HeaderColumns.type}</th>
              <th scope="col">{HeaderColumns.status}</th>
              <th scope="col">{HeaderColumns.employee}</th>
              <th scope="col">{HeaderColumns._case}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.update}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>
          <tbody>{documentList}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {
          <ModalForAddDocument
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            createDocument={createDocument}
            caseList={caseList}
            employees={employees}
            documents={documents}
            physicalEntities={physicalEntities}
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
            employees={employees}
            physicalEntities={physicalEntities}
            caseList={caseList}
          />
        )}
      </Fragment>
    );
  }
}
