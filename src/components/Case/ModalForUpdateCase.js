import React, { Component } from "react";
import { CaseType } from "../../../src/globals";
import { Modal, ModalFooter, Card } from "react-bootstrap";

class ModalForUpdateCase extends Component {
  constructor() {
    super();
    this.state = {
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
    };
  }
  componentDidMount() {
    this.props.getCase(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      caseName,
      caseNumber,
      caseType,
      owner,
      processor,
      refersTo,
    } = nextProps.caseForUpdate;

    this.setState({
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
    const updatedCase = {
      id: this.props.id,
      caseName: this.state.caseName,
      caseNumber: this.state.caseNumber,
      caseType: this.state.caseType,
      refersTo: { id: this.state.refersTo.id },
      owner: { id: this.state.owner.id },
      processor: { id: this.state.processor.id },
    };
    this.props.handleUpdate(updatedCase);
  };

  render() {
    const physicalEntities = this.props.physicalEntities;

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequestClose={this.props.closeModal}
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
                  <h3 className="display-5 text-center">Измени предмет</h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Унесите име предмета"
                        name="caseName"
                        value={this.state.caseName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Унесите број предмета"
                        name="caseNumber"
                        value={this.state.caseNumber}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        physicalEntities={physicalEntities}
                        onChange={this.onChangeCombo}
                        className="form-control form-control-lg"
                        placeholder="Изаберите на кога се односи"
                        name="refersTo"
                        value={this.state.refersTo.id}
                      >
                        <option value="" selected disabled>
                          Изаберите на кога се односи
                        </option>
                        {physicalEntities.map((physicalEntity) => {
                          return (
                            <option value={physicalEntity.id}>
                              {physicalEntity.firstName +
                                " " +
                                physicalEntity.lastName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder="Унесите тип предмета"
                        name="caseType"
                        value={this.state.caseType}
                        onChange={this.onChange}
                      >
                        <option value="" selected disabled>
                          Унесите тип предмета
                        </option>
                        {Object.keys(CaseType).map((key) => (
                          <option key={key} value={key}>
                            {CaseType[key].translation}
                          </option>
                        ))}
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
          <br />

          <ModalFooter></ModalFooter>
        </Card>
      </Modal>
    );
  }
}
export default ModalForUpdateCase;
