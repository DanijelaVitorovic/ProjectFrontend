import React, { Component } from 'react';
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

class ModalForUpdateProcessType extends Component {
    constructor() {
        super();

        this.state = {
            type: "",
            description: "",
            errors: {}
        };
    } 
    
    componentDidMount()  {
        this.props.getProcessType(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        const {
            id,
            type,
            description
        } = nextProps.processTypeForUpdate;

        this.setState({
            id,
            type,
            description
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const updateProcessType = {
            id: this.state.id,
            type: this.state.type,
            description: this.state.description,
            errors: {}
        };

        this.props.handleUpdate(updateProcessType);
    }

    render() {
        const {errors} = this.state;
        return (
            <Modal
            show={this.props.show}
            onHide={this.props.closeModal}
            onRequest={this.props.closeModal}
            size="lg"
          >
            <Modal.Header closeButton><h5> Update Process Type Update</h5></Modal.Header>
  
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
                          "is-invalid": errors.type,
                        })}
                        placeholder="Type"
                        name="type"
                        value={this.state.type}
                        onChange={this.onChange}
                      />
                      {errors.type && (
                        <div className="invalid-feedback">{errors.type}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.description,
                        })}
                        placeholder="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                      {errors.description && (
                        <div className="invalid-feedback">{errors.description}</div>
                      )}
                    </div>
    
                    <Button variant = 'success'
                    to="/processTypeList"
                    type="submit"
                  >
                  <i class="fas fa-check fa-2x"></i>
                  </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br></br>
                    <Button
                      onClick={() => {
                        this.props.closeModal();
                      }}
                    >Close</Button>
                  </Modal>
        );
    }
}

export default ModalForUpdateProcessType;