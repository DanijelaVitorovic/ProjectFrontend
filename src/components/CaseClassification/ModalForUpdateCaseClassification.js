import React, { Component } from "react";
import { Modal, ModalFooter, Card } from "react-bootstrap";

class ModalForUpdateCaseClassification extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      name: "",
      organizationalUnit: {
        id: 0,
      },
    };
  }

  componentDidMount() {
    this.props.getCaseClassification(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      code,
      name,
      organizationalUnit,
    } = nextProps.caseClassificationForUpdate;

    this.setState({
      code,
      name,
      organizationalUnit,
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
    const updatedCaseClassification = {
      id: this.props.id,
      code: this.state.code,
      name: this.state.name,
      organizationalUnit: { id: this.state.organizationalUnit.id },
    };
    this.props.handleUpdate(updatedCaseClassification);
  };

  render() {
    const { show, closeModal, organizationalUnits } = this.props || {};

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
                  <h3 className="display-5 text-center">
                    Измени класификације предмета
                  </h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Измените шифру класификације"
                        name="code"
                        value={this.state.code}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Измените име класификације"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        organizationalUnits={organizationalUnits}
                        onChange={this.onChangeCombo}
                        className="form-control form-control-lg"
                        placeholder="Изаберите на кога се односи"
                        name="organizationalUnit"
                        value={this.state.organizationalUnit.id}
                      >
                        <option value="" selected disabled>
                          Изаберите на кога се односи
                        </option>
                        {organizationalUnits.map((organizationalUnit) => {
                          return (
                            <option value={organizationalUnit.id}>
                              {organizationalUnit.name}
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
          <br />

          <ModalFooter></ModalFooter>
        </Card>
      </Modal>
    );
  }
}

export default ModalForUpdateCaseClassification;
