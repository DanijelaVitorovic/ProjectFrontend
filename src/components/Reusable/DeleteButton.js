import {Button} from 'bootstrap';
import React, {Component} from 'react';
import '../Reusable/button.css';

export default class DeleteButton extends Component {
  render() {
    return (
      <div>
        <button variant="danger" className="delete" style = {{marginTop: "5%"}}>
          <div onClick={() => this.props.onDeleteClick(this.props.id)}>
            <i className="fas fa-trash-alt fa-2x" />
          </div>
        </button>
      </div>
    );
  }
}
