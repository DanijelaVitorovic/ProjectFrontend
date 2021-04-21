import React, { Component } from "react";
import { Button } from "react-bootstrap";
import button from "../Reusable/button.css";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Tooltip from "@material-ui/core/Tooltip";
import { CaseTableTranslation } from "../../translations";

export default class UpdateButton extends Component {
  render() {
    return (
      <div>
        <Tooltip title={CaseTableTranslation.HeaderColumns.update} arrow>
          <Button
            className="button"
            variant="link"
            onClick={() => this.props.showModal()}
          >
            <BorderColorIcon color="primary" />
          </Button>
        </Tooltip>
      </div>
    );
  }
}
