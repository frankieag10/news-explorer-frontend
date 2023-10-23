import React from "react";
import "./SuccessModal.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SuccessModal({ name, title, handleCloseModal, handleOpenSigninModal }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={handleCloseModal}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <Link
          className="form__main-link"
          onClick={handleOpenSigninModal}
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
