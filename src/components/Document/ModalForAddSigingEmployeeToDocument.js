import React, {Component} from 'react';
import {Modal, Card, Container} from 'react-bootstrap';
import {modalForAddSingingEmployee} from '../../translations.js';
import {getEmployeeName} from '../../globals';

class ModalForSingingEmployeeToDocument extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
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
      signingEmployee: {},
      errors: {},
    };
  }

  componentDidMount() {
    const {
      id,
      title,
      documentNumber,
      externalNumber,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      signingEmployee,
      _case,
    } = this.props.document;

    this.setState({
      id,
      title,
      documentNumber,
      externalNumber,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      signingEmployee,
      _case,
    });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}});
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newDocumentMovement = {
      document: {
        id: this.props.id,
        title: this.state.title,
        documentNumber: this.state.documentNumber,
        externalNumber: this.state.externalNumber,
        description: this.state.description,
        documentType: this.state.documentType,
        documentStatus: this.state.documentStatus,
        verificationEmployee: null,
        signingEmployee: null,
        signedEmployee: null,
        finalEmployee: null,
      },
      signingEmployee: this.state.verificationEmployee,
    };

    this.props.handleAddSingingEmployee(newDocumentMovement);
  };

  render() {
    const {
      showModalForAddSingingEmployee,
      closeModalForAddSingingEmployee,
      handleAddVerificationEmployee,
      employeeList,
      physicalEntityList,
      error,
    } = this.props || {};

    return (
      <Modal
        show={showModalForAddSingingEmployee}
        onHide={closeModalForAddSingingEmployee}
        onRequestClose={closeModalForAddSingingEmployee}
        size="lg"
        centered
        animation
      >
        <Card bg={'white'} text={'black'} style={{paddingBottom: 20}}>
          <Modal.Header closeButton>
            {modalForAddSingingEmployee.addSingingEmployee}
          </Modal.Header>
          {error && (
            <Container
              className="col-md-12 text-center "
              style={{paddingTop: 20}}
            >
              <div className="row">
                <div
                  className="col-md-8 m-auto"
                  style={{
                    color: 'white',
                    paddingLeft: 60,
                    paddingRight: 60,
                    background: '#EA5252',
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
                        name="verificationEmployee"
                      >
                        <option value="" selected disabled>
                          {modalForAddSingingEmployee.selectSingingEmployee}
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

export default ModalForSingingEmployeeToDocument;
