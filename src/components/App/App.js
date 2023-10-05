import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSigninModal = () => handleOpenModal("signin");

  function handleSignout() {
    setCurrentUser("");
    setLoggedIn(false);
    setCurrentPage("/");
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
