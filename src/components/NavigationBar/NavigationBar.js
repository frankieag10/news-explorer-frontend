import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navigationbar">
      <div className="navigationbar__left-side">
        <span className="navigationbar__title">NewsExplorer</span>
      </div>
      <div className="navigationbar__right-side">
        <button className="navigationbar__button">Home</button>
        <button className="navigationbar__signin-button">Sign in</button>
      </div>
    </div>
  );
}

export default NavigationBar;
