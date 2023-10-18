import React from "react";
import { useEffect, useState } from "react";
import "./SigninModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEscape } from "../../components/Hooks/useEscape";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "../Hooks/useForm";

function SigninModal({ isOpen = { isOpen }, onSignin, handleCloseModal, onRegisterUser, handleOpenSignupModal, buttonText, onAltClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (email === "" || password === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password]);

  /*onst handleSubmit = (e) => {
    e.preventDefault();
    onSignin({ email, password });
  };*/
  const { values, handleChange, setValues } = useForm({});
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegisterUser({ email, password });
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
          value={email}
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
          value={password}
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
