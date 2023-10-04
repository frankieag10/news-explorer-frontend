import React from "react";
import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";

function Header(onSigninClick, onSignoutClick) {
  return (
    <div className="header">
      <NavigationBar
        onSigninClick={onSigninClick}
        onSignoutClick={onSignoutClick}
      />
      <SearchBar />
    </div>
  );
}

export default Header;
