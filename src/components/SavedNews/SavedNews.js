import React from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ inSavedNews = true }) {
  return (
    <div className="saved-news">
      <NewsCard inSavedNews={inSavedNews} />
    </div>
  );
}

export default SavedNews;
