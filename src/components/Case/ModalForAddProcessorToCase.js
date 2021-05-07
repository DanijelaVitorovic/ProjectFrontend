import React, { Component } from "react";
import { Modal, ModalFooter, Card, Container } from "react-bootstrap";
import { getEmployeeName } from "../../globals";
import { modalForAddProcessorTranslation } from "../../translations.js";

class ModalForAddProcessorToCase extends Component {
  constructor() {
    super();
    this.state = {
      employeeProcessor: {},
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getCaseMovementByCaseId(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      employeeProcessor,
      _case,
      employeeOwner,
    } = nextProps.caseMovementForUpdate;
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
      ...this.props.caseMovementForUpdate,
      employeeProcessor: this.state.employeeProcessor,
    };

    this.props.resetError();
    this.props.handleAddProcessor(newCaseMovement, this.props.id);
  };

  render() {
    const {
      showModalForAddProcessor,
      error,
      employeeList,
      closeModalForAddProcessorToCase,
    } = this.props || {};

    return (
      <Modal
        show={showModalForAddProcessor}
        onHide={closeModalForAddProcessorToCase}
        onRequestClose={closeModalForAddProcessorToCase}
        size="lg"
        centered
        animation
      >
        <Card bg={"white"} text={"black"} style={{ paddingBottom: 20 }}>
          <Modal.Header closeButton>
            {modalForAddProcessorTranslation.addProcessor}
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
                        name="employeeProcessor"
                      >
                        <option value="" selected disabled>
                          {modalForAddProcessorTranslation.selectEmployee}
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

export default ModalForAddProcessorToCase;
