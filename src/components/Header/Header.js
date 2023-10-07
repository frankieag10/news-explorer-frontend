import React from "react";
import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../";
import Preloader from "../Preloader/Preloader";

function Header() {
  return (
    <div className="header">
      <NavigationBar />
      <SearchBar />
    </div>
  );
}

export default Header;
