import React, { Component } from "react";
import { Modal, ModalFooter, Card, Container } from "react-bootstrap";
import { getEmployeeName } from "../../globals";
import { modalForAddOwnerTranslation } from "../../translations.js";

class ModalForAddOwnerToCase extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      caseName: "",
      caseNumber: "",
      caseType: "",
      refersTo: {
        id: 0,
      },
      owner: {
        id: 0,
      },
      processor: {
        id: 0,
      },
      employeeOwner: {},
      errors: {},
    };
  }

  componentDidMount() {
    const { id, caseName, caseNumber, caseType, owner, processor, refersTo } =
      this.props.caseForUpdate;

    this.setState({
      id,
      caseName,
      caseNumber,
      caseType,
      owner,
      processor,
      refersTo,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCombo = (e) => {
    this.setState({ [e.target.name]: { id: e.target.value } });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newCaseMovement = {
      _case: {
        id: this.props.id,
        caseName: this.state.caseName,
        caseNumber: this.state.caseNumber,
        refersTo: this.state.refersTo,
        caseType: this.state.caseType,
        owner: this.state?.owner,
        processor: this.state?.processor,
      },
      employeeOwner: this.state.employeeOwner,
    };
    this.props.resetError();
    this.props.handleAddOwner(newCaseMovement);
  };

  render() {
    const {
      showModalForAddOwner,
      error,
      employeeList,
      closeModalForAddOwnerToCase,
    } = this.props || {};

    return (
      <Modal
        show={showModalForAddOwner}
        onHide={closeModalForAddOwnerToCase}
        onRequestClose={closeModalForAddOwnerToCase}
        size="lg"
        centered
        animation
      >
        <Card bg={"white"} text={"black"} style={{ paddingBottom: 20 }}>
          <Modal.Header closeButton>
            {modalForAddOwnerTranslation.addOwner}
          </Modal.Header>
          {error && (
            <Container
              className="col-md-12 text-center "
              style={{ paddingTop: 20 }}
            >
              <div className="row">
                <div
                  className="col-md-8 m-auto"
                  style={{
                    color: "white",
                    paddingLeft: 60,
                    paddingRight: 60,
                    background: "#EA5252",
                  }}
                >
                  {error.message}
                </div>
              </div>
            </Container>
          )}
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <select
                        employeeList={employeeList}
                        onChange={this.onChangeCombo}
                        className="form-control form-control-lg"
                        name="employeeOwner"
                      >
                        <option value="" selected disabled>
                          {modalForAddOwnerTranslation.selectEmployee}
                        </option>
                        {employeeList.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {getEmployeeName(employee)}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary float-right btn-success"
                    >
                      <i className="fas fa-check fa-2x" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    );
  }
}

export default ModalForAddOwnerToCase;
