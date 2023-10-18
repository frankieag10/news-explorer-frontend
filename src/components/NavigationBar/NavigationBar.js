import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

function navigationBar({ inSavedNews, isLoggedIn, handleOpenSigninModal }) {
  return (
    <div className={`navigationbar ${inSavedNews && "navigationbar_saved-news"}`}>
      <div className="navigationbar__left-side">
        <span className={`navigationbar__title ${inSavedNews && "navigationbar__title_saved-news"}`}>NewsExplorer</span>
      </div>
      <div className="navigationbar__right-side">
        <Link
          to="/"
          className="navigationbar__link"
        >
          <button className={`navigationbar__button ${inSavedNews ? "navigationbar__button_saved-news" : "navigationbar__button_active"}`}>
            Home
          </button>{" "}
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news">
            <button
              className={`navigationbar__button ${inSavedNews ? "navigationbar__button_saved-news navigationbar__button_saved-news_active" : ""}`}
            >
              Saved Articles
            </button>
          </Link>
        )}
        {isLoggedIn == true ? (
          <button className={`navigationbar__logout-button ${inSavedNews && "navigationbar__logout-button_saved_news"}`}>frankie</button>
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
export default navigationBar;
