import React from "react";
// import "./Modal.styles.scss";
import "./Modal.styles.scss";
import { useDispatch } from "react-redux";

function Modal({ children }) {
  const dispatch = useDispatch();
  return (
    <div
      className="modal-container"
      onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
    >
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
