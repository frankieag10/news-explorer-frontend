import React from "react";
import "./SavedNewsHeader.css";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function SavedNewsHeader() {
  return (
    <div className="saved-news-header">
      <NavigationBar />
      <div className="saved-news-header__titlebar">
        <span className="saved-news-header__title">Saved articles</span>
        <h4 className="saved-news-header__news-count">Frank, you have 5 saved articles</h4>
        <span className="saved-news-header__keywords">
          By keywords: <b>Nature, Yellowstone, and 2 other</b>
        </span>
      </div>
    </div>
  );
}
