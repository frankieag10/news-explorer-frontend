import React from "react";
import "./SavedNewsHeader.css";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function SavedNewsHeader({ isLoggedIn, handleOpenSigninModal }) {
  return (
    <div className="saved-news-header">
      <NavigationBar
        isLoggedIn={isLoggedIn}
        handleOpenSigninModal={handleOpenSigninModal}
        inSavedNews={true}
      />
      <div className="saved-news-header__titlebar">
        <span className="saved-news-header__title">Saved articles</span>
        <h2 className="saved-news-header__news-count">Elise, you have 5 saved articles</h2>
        <span className="saved-news-header__keywords">
          By keywords: <b>Nature, Yellowstone, and 2 other</b>
        </span>
      </div>
    </div>
  );
}
