import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
//import Main from "../Main/Main.js";
import SavedNews from "../SavedNews/SavedNews.js";
//import Footer from "../Footer/Footer.js";
import SigninModal from "../SigninModal/SigninModal.js";
import SignupModal from "../SignupModal/SignupModal.js";
import SuccessModal from "../SuccessModal/SuccessModal.js";
import { ESC_KEYCODE } from "../../utils/constants.js";

// API
//import { getNews } from "../../utils/NewsApi.js";
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

  /*const handleNewsSearch = (input) => {
    setIsLoading(true);
    //const searchNews = getNews(input);
    searchNews.then((data) => {
      setHasSearched(true);
      //setSearchResults(data.articles);
      setIsLoading(false);
    });
  };
*/
  const handleSuccessModalClick = () => {
    handleCloseModal();
    handleOpenModal("signin");
  };

  const handleSigninModal = () => handleOpenModal("signin");

  const handleSignupModal = () => handleOpenModal("signup");

  function handleSignin() {
    setLoggedIn(true);
    setCurrentUser("Sam");
    handleCloseModal();
  }

  function handleSignup() {
    // if(!existingUser) {
    //  setCurrentUser()
    // }
  }

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

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.which === ESC_KEYCODE) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  return (
    <div className="page">
      <Header />
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
          path="/signin"
          element={<SigninModal />}
        />
        <Route
          path="/signup"
          element={<SignupModal />}
        />
        <Route
          path="/success"
          element={<SuccessModal />}
        />
        <ProtectedRoute
          path="/saved-news"
          element={<Navigate to="/" />}
        />
      </Routes>
      <Footer />
      {mobileMenuOpen && (
        <MobileMenu
          onClose={closeMobileMenu}
          onSigninClick={handleMobileMenuOverlay}
          onSignoutClick={handleSignout}
        />
      )}
    </div>
  );
}

export default App;
