import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import ModalForUpdateOrganizationalUnit from "./ModalForUpdateOrganizationalUnit";
import styled from "styled-components";

export default class OrganizationalUnitRow extends Component {
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (updatedOrganizationalUnit) => {
    this.props.updateOrganizationalUnit(updatedOrganizationalUnit);
    this.closeModal();
  };

  onDeleteClick = (id) => {
    this.props.deleteOrganizationalUnit(id);
  };

  render() {
    const Button = styled.button`
      position: absolute;
      cursor: pointer;
      box-shadow: rgba(255, 255, 255) 0px 3px 20px;
      border-width: initial;
      background-color: white;
      color: rgb(245, 218, 47);
      border-style: none;
      border-color: initial;
      border-image: initial;
      outline: none;
      &:hover {
        background-color: rgb(237, 237, 232);
        color: rgb(135, 9, 9);
      }
    `;
    const row = (
      <tr>
        <td>{this.props.organizationalUnit.id}</td>
        <td>{this.props.organizationalUnit.name}</td>
        <td>{this.props.organizationalUnit.code}</td>
        <td>{this.props.organizationalUnit.legalEntity.name}</td>
        <td className="text-center">
          <Button
            variant="link"
            onClick={() => {
              this.showModal();
            }}
          >
            <i className="fas fa-pen-alt fa-2x"></i>
          </Button>
        </td>
        <td className="text-center">
          <Badge pill variant="danger">
            <div
              onClick={() =>
                this.onDeleteClick(this.props.organizationalUnit.id)
              }
            >
              <i className="fas fa-trash-alt fa-2x" />
            </div>
          </Badge>
        </td>
      </tr>
    );
    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateOrganizationalUnit
            show={this.state.show}
            id={this.props.organizationalUnit.id}
            organizationalUnitForUpdate={this.props.organizationalUnitForUpdate}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            getOrganizationalUnit={this.props.getOrganizationalUnit}
            legalEntities={this.props.legalEntities}
            getLegalEntity={this.props.getLegalEntity}
          />
        )}
      </Fragment>
    );
  }
}
