import React, { useState } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import "./App.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SignupModal from "../SignupModal/SignupModal.js";
import SigninModal from "../SigninModal/SigninModal.js";
import SavedNews from "../SavedNews/SavedNews";
import SuccessModal from "../SuccessModal/SuccessModal";
import { Route, Routes, Navigate, useHistory, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(""); // Add currentUser state

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleSigninModal = () => handleOpenModal("signin");

  const handleSignupModal = () => handleOpenModal("signup");

  const handleAltClick = () => {
    if (activeModal === "signin") {
      handleCloseModal();
      handleOpenModal("signup");
    }
    if (activeModal === "signup") {
      handleCloseModal();
      handleOpenModal("signin");
    }
  };

  function handleSignin() {
    setIsLoggedIn(true);
    setCurrentUser("frankie");
    handleCloseModal();
  }

  return (
    <div className="App">
      {!isLoggedIn ? <Header isLoggedIn={isLoggedIn} /> : <SavedNewsHeader isLoggedIn={isLoggedIn} />}
      <Main />
      {isLoggedIn && <SavedNews />}
      <Footer />
      {activeModal === "signin" && (
        <SigninModal
          isOpen={handleSigninModal}
          onSignin={handleSignin}
          handleClose={handleCloseModal}
          onAltClick={handleAltClick}
        />
      )}
      {activeModal === "signup" && (
        <SignupModal
          isOpen={activeModal === "signup"}
          onClose={handleCloseModal}
          name="signup"
          buttonText="signup"
        />
      )}
    </div>
  );
}

export default App;
