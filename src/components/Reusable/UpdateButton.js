import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class UpdateButton extends Component {
  render() {
    console.log(this.props.id);
    return (
      <div>
        <Button
          className="button"
          variant="link"
          onClick={() => this.props.showModal()}
        >
          <i className="fas fa-pen-alt fa-2x"></i>
        </Button>
      </div>
    );
  }
}
