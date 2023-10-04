import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar__container">
        <h2 className="SearchBar__title">What's going on in the world?</h2>
        <p className="SearchBar__explaination">Find the latest news on any topic and save them in your personal account.</p>
      </div>
    </div>
  );
}

export default SearchBar;
