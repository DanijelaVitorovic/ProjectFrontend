import React, { Component } from "react";
import { Modal, ModalFooter } from "react-bootstrap";

class ModalForUpdateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      profession: "",
      manager: "",
    };
  }

  componentDidMount() {
    this.props.getEmployee(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const { id, profession, manager } = nextProps.employeeForUpdate;

    this.setState({
      id,
      profession,
      manager,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      id: this.state.id,
      profession: this.state.profession,
      manager: this.state.manager,
    };
    this.props.handleUpdate(updatedEmployee);
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequestClose={this.props.closeModal}
        size="lg"
        centered
        animation
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-5 text-center">
                  Измена запосленог лица
                </h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promenite profesiju"
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control"
                      placeholder="Menadzer"
                      name="manager"
                      value={this.state.manager}
                      onChange={this.onChange}
                    >
                      <option value="" selected disabled>
                        Промените статус менаџер
                      </option>
                      <option value="true">Да</option>
                      <option value="false">Не</option>
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
      </Modal>
    );
  }
}
export default ModalForUpdateEmployee;
