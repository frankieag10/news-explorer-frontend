import React from "react";
import "./NavigationBar.css";

function NavigationBar({ inSavedNews = true }) {
  return (
    <div className={`navigationbar ${inSavedNews ? "navigationbar_saved-news" : ""}`}>
      <div className="navigationbar__left-side">
        <span className={`navigationbar__title ${inSavedNews ? "navigationbar__title_saved-news" : ""}`}>NewsExplorer</span>
      </div>
      <div className="navigationbar__right-side">
        <button className={`navigationbar__button ${inSavedNews ? "navigationbar__button_saved-news" : ""} `}>Home</button>
        <button className={`navigationbar__button ${inSavedNews ? "navigationbar__button_saved-news" : ""} navigationbar__button_active`}>
          Saved Articles
        </button>
        <button className={`navigationbar__signin-button  ${inSavedNews ? "navigationbar__signin-button_saved-news" : ""}`}>Sign in</button>
      </div>
    </div>
  );
}
export default NavigationBar;
