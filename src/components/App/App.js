import React, { useSate } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import "./App.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SigninModal from "../SigninModal/SigninModal.js";
import SavedNews from "../SavedNews/SavedNews";
import { Route, Routes, Navigate, useHistory, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {!isLoggedIn ? <Header /> : <SavedNewsHeader />}
      <Main />
      <Footer />
      <SignupModal
        isOpen={activeModal === "signup"}
        onClose={handleCloseModal}
        name="signup"
        buttonText="Signup"
      />
    </div>
  );
}

export default App;
