import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";

function ConfirmAlert(id, onDelete, string) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <h1>Да ли сте сигурни</h1>
          <p>{string}</p>
          <Button
            variant="contained"
            color="default"
            startIcon={<YoutubeSearchedForIcon />}
            onClick={onClose}
          >
            Не
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => {
              {
                onDelete(id);
              }
              onClose();
            }}
          >
            Да!
          </Button>
        </div>
      );
    },
  });
}

export default ConfirmAlert;
