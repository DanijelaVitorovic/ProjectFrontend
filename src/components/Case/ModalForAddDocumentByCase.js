import React, { Component } from "react";
import { Modal, ModalFooter, Card, Button } from "react-bootstrap";
import {
  DocumentType,
  documentStatus,
  GetNameandSurname,
} from "../../../src/globals";
import { documentModalForAddAndUpdateTranslation } from "../../translations";

class ModalForAddDocumentByCase extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      documentType: "",
      documentStatus: "",
      employeeCreated: "",
      _case: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newDocument = {
      title: this.state.title,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.state.documentStatus,
      employeeCreated: { id: this.state.employeeCreated },
      _case: { id: this.props.id },
    };
    this.props.handleAdd(newDocument);
  };

  render() {
    const { employeeList, show, closeModal } = this.props || {};
    const translation = documentModalForAddAndUpdateTranslation || {};
    const { SelectOptionsAndPlaceholders, Header } = translation;

    return (
      <Modal
        show={show}
        onHide={closeModal}
        onRequestClose={closeModal}
        size="lg"
        centered
        animation
      >
        <Card bg={"white"} text={"black"}>
          <Modal.Header closeButton></Modal.Header>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3
                    className="display-5 text-center"
                    style={{ paddingBottom: 20, paddingTop: 20 }}
                  >
                    {Header.headingAddModal}
                  </h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          SelectOptionsAndPlaceholders.titlePlaceholder
                        }
                        name="title"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          SelectOptionsAndPlaceholders.descriptionPlaceholder
                        }
                        name="description"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.typePlaceholder
                        }
                        name="documentType"
                        onChange={this.onChange}
                        style={{ fontSize: "1rem" }}
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
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.statusPlaceholder
                        }
                        name="documentStatus"
                        value={this.state.documentStatus.statusOption}
                        onChange={this.onChange}
                        style={{ fontSize: "1rem" }}
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
                      <select
                        className="form-control form-control-lg"
                        employeeList={employeeList}
                        name="employeeCreated"
                        placeholder={
                          SelectOptionsAndPlaceholders.employeePlaceholder
                        }
                        onChange={this.onChange}
                        style={{ fontSize: "1rem" }}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.employeeOption}
                        </option>
                        {employeeList.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {GetNameandSurname(employee)}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div align="right">
                      <Button variant="success" type="submit">
                        <i class="fas fa-check fa-2x"></i>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
        </Card>
        <ModalFooter></ModalFooter>
      </Modal>
    );
  }
}

export default ModalForAddDocumentByCase;
