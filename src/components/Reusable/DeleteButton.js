import React, { Component } from "react";
import { Button, Badge } from "react-bootstrap";
import button from "./button.css";

export default class DeleteButton extends Component {
  render() {
    console.log(this.props.document);
    return (
      <div>
        <Badge pill variant="danger" className="badge">
          <div onClick={() => this.props.onDeleteClick(this.props.id)}>
            <i className="fas fa-trash-alt fa-2x" />
          </div>
        </Badge>
      </div>
    );
  }
}
