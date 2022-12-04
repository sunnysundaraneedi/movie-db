import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const handleClose = (event) => {
    if (event.target.className === "modalContainer") {
      props.setOpenModal(false);
    }
  };
  return (
    <div className="modalContainer" onClick={handleClose}>
      <div className="modal">
        <h2>Details</h2>
        <span
          className="modal__close"
          onClick={() => props.setOpenModal(false)}
        >
          x
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
