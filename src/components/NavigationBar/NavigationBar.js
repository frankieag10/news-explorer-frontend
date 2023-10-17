import React from "react";
import "./NavigationBar.css";

function NavigationBar({ inSavedNews = false, isLoggedIn, handleOpenSigninModal }) {
  console.log("inSavedNews:", inSavedNews);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className={`navigationbar ${inSavedNews ? "navigationbar_saved-news" : ""}`}>
      <div className="navigationbar__left-side">
        <span className={`navigationbar__title ${inSavedNews ? "navigationbar__title_saved-news" : ""}`}>NewsExplorer</span>
      </div>
      <div className="navigationbar__right-side">
        <button
          className={`navigationbar__button ${inSavedNews ? "navigationbar__button_saved-news" : ""} ${
            inSavedNews ? "" : "navigationbar__button_active"
          }`}
        >
          Home
        </button>
        {isLoggedIn && (
          <button
            className={`navigationbar__button ${inSavedNews ? "navigationbar__button_saved-news" : ""} ${
              inSavedNews ? "navigationbar__button_active_saved_news" : "navigationbar__button_active"
            }`}
          >
            Saved Articles
          </button>
        )}
        {isLoggedIn === true ? (
          <button className={`navigationbar__logout-button ${inSavedNews && "navigationbar__logout-button_saved_news"}`}>Frankie</button>
        ) : (
          <button
            className="navigationbar__signin-button"
            onClick={handleOpenSigninModal}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}
export default NavigationBar;
