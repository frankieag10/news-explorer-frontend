import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentPageContext from "../../contexts/CurrentPageContext";
import logout from "../../images/logout.svg";
import CurrentUserContext from "../../contexts/CurrentUserContexts";
import "./MobileMenu.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

export default function Mobilemenu({ inSavedNews, isLoggedIn, handleOpenSigninModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  const handleOpenSigninModalWithMenuClose = () => {
    setIsMenuOpen(false);
    handleOpenSigninModal();
  };
  return (
    <div className={`mobile-nav  ${isMenuOpen && "mobile-nav__bar_dark"}`}>
      <div className={`mobile-nav__bar`}>
        <h4 className={`mobile-nav__title ${isMenuOpen ? "mobile_nav__title_open_menu" : inSavedNews ? "mobile-nav__title_saved-news" : ""} `}>
          NewsExplorer
        </h4>
        <button
          className={`mobile-nav__toggle-button ${
            isMenuOpen ? "mobile-nav__toggle-button_open_menu" : inSavedNews ? "mobile-nav__toggle-button_saved-news" : ""
          }`}
          onClick={handleMenuToggle}
        ></button>
      </div>
      {isMenuOpen && (
        <div className="mobile-nav__menu">
          <div className="mobile-nav__buttons">
            <Link to="/">
              <button className="mobile-nav__button">Home</button>
            </Link>
            {isLoggedIn && (
              <Link to="/saved-news">
                <button className="mobile-nav__button">Saved Articles</button>
              </Link>
            )}
          </div>
          {isLoggedIn ? (
            <button className="mobile-nav__logout-button">frankie </button>
          ) : (
            <button
              className={`mobile-nav__signin-button `}
              onClick={handleOpenSigninModalWithMenuClose}
            >
              Sign in
            </button>
          )}
        </div>
      )}
    </div>
  );
}
