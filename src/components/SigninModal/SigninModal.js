import React from "react";
import { useEffect, useState } from "react";
import "./SigninModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEscape } from "../../components/Hooks/useEscape";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "../Hooks/useForm";

function SigninModal({ isOpen = { isOpen }, onSignin, handleCloseModal, onRegisterUser, handleOpenSigninModal, buttonText, onAltClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const { values, handleChange, setValues } = useForm({});
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegisterUser({ values });
  };

  return (
    <ModalWithForm
      title="Sign In"
      onSubmit={handleSubmit}
      onClose={handleCloseModal}
      handleAltClick={onAltClick}
      buttonText="Sign in"
      altButtonText="Sign up"
      isDisabled={isDisabled}
    >
      <label>
        <h3 className="modal__label">Email:</h3>
        <input
          className="modal__input"
          id="email-input"
          type="email"
          placeholder="Enter Email"
          value={values.email || ""}
          onChange={handleChange}
          required
          minLength={1}
          maxLength={30}
        />
      </label>
      <span className="form__error_signin">Invalid email address</span>
      <label>
        <h3 className="modal__label">Password:</h3>
        <input
          className="modal__input"
          id="password-input"
          type="text"
          placeholder="Enter Password"
          value={values.password || ""}
          onChange={handleChange}
          required
          minLength={1}
          maxLength={30}
        />
      </label>
      <span
        className="modal__error"
        id="password-input-error"
      ></span>
    </ModalWithForm>
  );
}

export default SigninModal;
