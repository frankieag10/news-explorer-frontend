import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../Hooks/useForm";
import "./SignupModal.css";

function SignupModal({ isOpen, onSignup, handleCloseModal, onRegisterUser, onAltClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  /*function handleSubmit(e) {
    e.preventDefault();
    onSignup({ email, password, username });
  }
*/
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  const { values, handleChange, setValues } = useForm({});
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegisterUser(email, password, username);
  };

  return (
    <ModalWithForm
      title="SignUp"
      onSubmit={handleSubmit}
      handleAltClick={onAltClick}
      onClose={handleCloseModal}
      buttonText="Sign Up"
      altButtonText="Sign In"
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
        />
      </label>
      <span className="form__error">This email is not available</span>
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

      <label>
        <h3 className="modal__label">Username:</h3>
        <input
          className="modal__input"
          id="username-input"
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={handleChange}
          required
          minLength={1}
          maxLength={30}
        />
      </label>
    </ModalWithForm>
  );
}

export default SignupModal;
