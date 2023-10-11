import React from "react";
import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import Preloader from "../Preloader/Preloader";

function Header({ isLoggedIn, handleOpenSigninModal, onSignoutClick }) {
  return (
    <div className="header">
      <NavigationBar
        handleOpenSigninModal={handleOpenSigninModal}
        isLoggedIn={isLoggedIn}
      />
      <SearchBar />
      <Loading />
    </div>
  );
}

export default Header;
