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

  return (
    <div className="App">
      {!isLoggedIn ? <Header isLoggedIn={isLoggedIn} /> : <SavedNewsHeader isLoggedIn={isLoggedIn} />}
      <Main />
      <Footer />
      {activeModal === "signup" && (
        <SignupModal
          isOpen={activeModal === "signup"}
          onClose={handleCloseModal}
          name="signup"
          buttonText="Signup"
        />
      )}
    </div>
  );
}

export default App;
