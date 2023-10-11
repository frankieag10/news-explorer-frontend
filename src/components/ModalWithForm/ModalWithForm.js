import React from "react";
import "../ModalWithForm/ModalWithForm.css";
import closeIcon from "../../images/close.svg";
import { useEscape } from "../../components/Hooks/useEscape";

function ModalWithForm({ children, title, onSubmit, onClose, buttonText, handleAltClick, altButtonText, isDisabled }) {
  const onCloseBackgroundModal = (evt) => {
    evt.stopPropagation();
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`modal`}
      onClick={onCloseBackgroundModal}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        />
        <form
          className="modal__form"
          onSubmit={onSubmit}
        >
          {children}
          <div className="modal__btn-container">
            <button
              className={`modal__submit-btn ${isDisabled === true ? "modal__submit-btn_disabled" : ""}`}
              id="submit"
              type="submit"
              disabled={isDisabled}
            >
              {buttonText}
            </button>
            <button
              className="modal__alt-btn"
              type="button"
              onClick={handleAltClick}
            >
              or <span className="modal__alt-text">{altButtonText}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
