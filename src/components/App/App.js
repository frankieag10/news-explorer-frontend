import Header from "../Header/Header.js";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import SavedNews from "../SavedNews/SavedNews";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import MobileMenu from "../MobileMenu/MobileMenu.js";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  // const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [saveCards, setSavedCards] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
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

  const handleSigninModal = () => handleOpenModal("signin");

  const handleSignupModal = () => handleOpenModal("signup");

  function handleSignin() {
    setLoggedIn(true);
    setCurrentUser("frank");
    handleCloseModal();
  }

  function handleSignup() {}

  function handleSignout() {
    setCurrentUser("");
    setLoggedIn(false);
    setCurrentPage("/");
  }

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileMenuOverlay = () => {
    handleSigninModal();
    closeMobileMenu();
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              signinClick={handleSigninModal}
              signoutClick={handleSignout}
            />
          }
        />
        <Route
          path="/saved-news"
          element={<SavedNews />}
        />
        <Route
          path="/signin"
          element={
            <SigninModal
              isOpen={handleSigninModal}
              onSignin={handleSignin}
              handleClose={handleCloseModal}
              onAltClick={handleAltClick}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignupModal
              isOpen={handleSignupModal}
              onSignup={handleSignup}
              handleClose={handleCloseModal}
              onAltClick={handleAltClick}
            />
          }
        />
        <Route
          path="/success"
          element={
            <SuccessModal
              name="success"
              onClose={handleCloseModal}
              onClick={handleSuccessModalClick}
            />
          }
        />
      </Routes>
      <MobileMenu
        onClose={closeMobileMenu}
        onSigninClick={handleMobileMenuOverlay}
        onSignoutClick={handleSignout}
      />
      <Footer />
    </div>
  );
}

export default App;
