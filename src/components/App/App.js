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
import NavigationBar from "../NavigationBar/NavigationBar.js";
import { useEscape } from "../Hooks/useEscape.js";
import { Route, Routes, Navigate, useHistory, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenSigninModal = () => {
    handleOpenModal("signin");
  };

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

  const handleSuccessModalClick = () => {
    handleCloseModal();
    handleOpenModal("signin");
  };

  function handleSignin() {
    setIsLoggedIn(true);
    setCurrentUser("frankie");
    handleCloseModal();
  }

  React.useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
        >
          <Header
            isLoggedIn={isLoggedIn}
            handleOpenSigninModal={handleOpenSigninModal}
          />
          <Main />
        </Route>
        <ProtectedRoute
          isLoggedIn={isLoggedIn}
          path="/saved-news"
        >
          <SavedNewsHeader
            inSavedNews={true}
            isLoggedIn={isLoggedIn}
            handleOpenSigninModal={handleOpenSigninModal}
          />
          <Main />
          <SavedNews />
        </ProtectedRoute>
        <Route path="/signin">
          <Header
            isLoggedIn={isLoggedIn}
            handleOpenSigninModal={handleOpenSigninModal}
          />
          <Main />
        </Route>
        <Route path="/signup">
          <Header
            isLoggedIn={isLoggedIn}
            handleOpenSigninModal={handleOpenSigninModal}
          />
          <Main />
        </Route>
      </Switch>
      <Footer />
      {activeModal === "signin" && (
        <SigninModal
          isOpen={activeModal === "signin"}
          name="signin"
          buttonText="Signin"
          handleCloseModal={handleCloseModal}
          onAltClick={handleAltClick}
        />
      )}
      {activeModal === "signup" && (
        <SignupModal
          isOpen={activeModal === "signup"}
          handleCloseModal={handleCloseModal}
          name="signup"
          buttonText="Signup"
        />
      )}
      {activeModal === "success" && (
        <SuccessModal
          isOpen={activeModal === "success"}
          name="success"
          handleCloseModal={handleCloseModal}
          onClick={handleSuccessModalClick}
        />
      )}
    </div>
  );
}

export default App;
