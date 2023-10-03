import React from "react";
import "./header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <div className="header">
      <NavigationBar />
      <SearchBar />
    </div>
  );
}
