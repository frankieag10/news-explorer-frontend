import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentPageContext from "../../contexts/CurrentPageContext";
import logout from "../../images/logout.svg";
import CurrentUserContext from "../../contexts/CurrentUserContexts";
import "./MobileMenu.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function MobileMenu({ inSavedNews, isLoggedIn, handleOpenSigninModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <div className={`mobile-navigation  ${isMenuOpen && "mobile-navigation__bar_dark"}`}>
      <div className={`mobile-navigation__bar `}>
        <h4 className={`mobile-navigation__title ${inSavedNews && "mobile-navigation__title_saved-news"}`}>NewsExplorer</h4>
        <button
          className={`mobile-navigation__toggle-button ${isMenuOpen && "mobile-navigation__toggle-button_active"}`}
          onClick={handleMenuToggle}
        ></button>
      </div>
      {isMenuOpen && (
        <div className="mobile-navigation__menu">
          <div className="mobile-navigation__buttons">
            <Link to="/">
              <button className="mobile-navigation__button">Home</button>
            </Link>
            <Link to="/saved-news">
              <button className="mobile-navigation__button">Saved Articles</button>
            </Link>
          </div>
          <button
            className={`mobile-navigation__signin-button `}
            onClick={handleOpenSigninModal}
          >
            Sign in
          </button>
          {/* <button className='mobile-navigation__logout-button'>username </button> */}
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
