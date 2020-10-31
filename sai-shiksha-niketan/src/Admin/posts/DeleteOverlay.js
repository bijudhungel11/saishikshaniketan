import React from "react";
import "./DeleteOverlay.css";
const DeleteOverlay = ({ onOverlayClick, onDelete }) => {
  return (
    <div className="deleteOverlay__container">
      <div className="deleteOverlay">
        <div className="deleteButton">
          <button className="btn-danger btn " onClick={onDelete}>
            Confirm Delete
          </button>
        </div>
        <div className="cancelButton">
          <button className="btn-dark  btn " onClick={onOverlayClick}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOverlay;
