import React, { Component } from "react";
import classnames from "classnames";
import { Modal, Button } from "react-bootstrap";

class ModalForUpdateOrganizationalUnit extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      code: "",
      legalEntity:{
        id:0,
      },
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getOrganizationalUnit(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {
      id,
      name,
      code,
      legalEntity,
    } = nextProps.organizationalUnitForUpdate;

    this.setState({
      id,
      name,
      code,
      legalEntity,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCombo = (e) => {
    this.setState({ [e.target.name]: {id: e.target.value }});
  };

  onSubmit = (e) => {
    e.preventDefault();

    const updatedOrganizationalUnit = {
      id: this.state.id,
      name: this.state.name,
      code: this.state.code,
      legalEntity: {
        id: this.state.legalEntity.id,
      }
    };
    this.props.handleUpdate(updatedOrganizationalUnit);
  };

  render() {
    const { errors } = this.state;
    const legalEntities = this.props.legalEntities;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequest={this.props.closeModal}
        size= "lg"
      >
        <Modal.Header closeButton>
          <h4>Измени организациону јединицу</h4>
        </Modal.Header>

        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.name,
                      })}
                      placeholder="Име"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.code,
                      })}
                      placeholder="Шифра"
                      name="code"
                      value={this.state.code}
                      onChange={this.onChange}
                    />
                    {errors.code && (
                      <div className="invalid-feedback">{errors.code}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      legalEntities={legalEntities}
                      name="legalEntity"
                      placeholder="Одаберите правно лице"
                      onChange={this.onChangeCombo}
                      style={{ fontSize: "1rem" }}
                      value={this.state.legalEntity.id}
                    >
                      <option value="" selected disabled>
                        Одаберите правно лице
                      </option>
                      {legalEntities.map((legalEntity) => {
                        return (
                          <option value={legalEntity.id}>
                            {legalEntity.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <Button variant="success" type="submit">
                    <i class="fas fa-check fa-2x"></i>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </Modal>
    );
  }
}

export default ModalForUpdateOrganizationalUnit;
