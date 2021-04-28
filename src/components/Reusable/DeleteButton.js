import React, { Component } from "react";
import { Badge } from "react-bootstrap";

export default class DeleteButton extends Component {
  render() {
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
