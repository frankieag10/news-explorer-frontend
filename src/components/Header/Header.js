import React from "react";
import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import Preloader from "../Preloader/Preloader";

function Header() {
  return (
    <div className="header">
      <NavigationBar />
      <SearchBar />
      <Preloader></Preloader>
    </div>
  );
}

export default Header;
