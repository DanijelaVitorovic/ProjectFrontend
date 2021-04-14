import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import DocumentRow from "./DocumentRow";
import ModalForAddDocument from "./ModalForAddDocument";
import table from "./table.css";
import { documentTableTranslation } from "../../translations";
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
    const {HeaderColumns,  Buttons} = translation;
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
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <Button
              className="btn btn-default"
              type="submit"
              variant="success"
              onClick={() => {
                this.showModal();
              }}
            >
              {Buttons.addNewDocument}
            </Button>
            <p></p>
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
      </Fragment>
    );
  }
}
