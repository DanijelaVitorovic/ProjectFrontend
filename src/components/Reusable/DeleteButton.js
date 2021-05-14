import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../Reusable/button.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { CaseTableTranslation } from "../../translations";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

export default class DeleteButton extends Component {
  render() {
    return (
      <div>
        <Tooltip title={CaseTableTranslation.HeaderColumns.delete} arrow>
          <IconButton
            color="primary"
            className="button"
            variant="link"
            onClick={() => this.props.onDeleteClick(this.props.id)}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}
