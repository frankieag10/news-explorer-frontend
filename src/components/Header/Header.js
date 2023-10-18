import React from "react";
import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import About from "../About/About";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import Preloader from "../Preloader/Preloader";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header({ isLoggedIn, handleOpenSigninModal }) {
  return (
    <div className="header">
      <NavigationBar
        handleOpenSigninModal={handleOpenSigninModal}
        isLoggedIn={isLoggedIn}
      />
      <MobileMenu
        handleOpenSigninModal={handleOpenSigninModal}
        isLoggedIn={isLoggedIn}
      />
      <SearchBar />
      <Loading />
      <About />
    </div>
  );
}

export default Header;
