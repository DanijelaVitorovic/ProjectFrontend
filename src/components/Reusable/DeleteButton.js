import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../Reusable/button.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { CaseTableTranslation } from "../../translations";
import Tooltip from "@material-ui/core/Tooltip";

export default class DeleteButton extends Component {
  render() {
    return (
      <div>
        <Tooltip title={CaseTableTranslation.HeaderColumns.delete} arrow>
          <Button
            className="button"
            variant="link"
            onClick={() => this.props.onDeleteClick(this.props.id)}
          >
            <DeleteIcon color="secondary" />
          </Button>
        </Tooltip>
      </div>
    );
  }
}
