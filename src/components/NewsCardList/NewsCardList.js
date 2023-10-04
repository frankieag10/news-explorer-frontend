import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList() {
  return (
    <div className="newscardlist">
      <h2 className="newscardlist__title">Search results</h2>
      <div className="newscardlist__grid">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button className="newscardlist__button">Show more</button>
    </div>
  );
}
