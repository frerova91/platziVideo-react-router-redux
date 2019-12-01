import React from "react";
import "../assets/styles/components/Modal.scss";

const Modal = ({ children }) => (
  <section className="modal">
    <div className="modal_content">{children}</div>
  </section>
);

export default Modal;
