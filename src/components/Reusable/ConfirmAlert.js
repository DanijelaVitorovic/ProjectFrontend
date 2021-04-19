import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function ConfirmAlert(id, onDelete, string) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <h1>Да ли сте сигурни</h1>
          <p>{string}</p>
          <button onClick={onClose}>No</button>
          <button
            onClick={() => {
            {onDelete(id)}
              onClose();
            }}
          >
            Yes, Delete it!
          </button>
        </div>
      );
    },
  });
}

export default ConfirmAlert;
