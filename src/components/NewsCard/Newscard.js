/*import React, { useState } from "react";
import "./NewsCard.css";
const imageCard = require("../../images/image_04.png");

function NewsCard() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="news-card">
      <div className="news-card__save-box">
        {tooltipVisible && <span className="news-card__save-tooltip">Sign in to save articles</span>}
        <button
          className="news-card__save-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></button>
      </div>
      <img
        src={imageCard}
        alt="News"
        className="news-card__image"
      />
      <div className="news-card__info">
        <span className="news-card__date">November 4, 2020</span>
        <h5 className="news-card__title">Everyone Needs a Special 'Sit Spot' in Nature</h5>
        <p className="news-card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...
        </p>
        <span className="news-card__author">treehugger</span>
      </div>
    </div>
  );
}

export default NewsCard;
*/
import { useContext, useState } from "react";
import CurrentPageContext from "../../contexts/CurrentPageContext.js";
import SavedCardsContext from "../../contexts/SavedCardsContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContexts";

function NewsCard({ newsItem }) {
  const { currentPage } = useContext(CurrentPageContext);
  const { saveCards, setSavedCards } = useContext(SavedCardsContext);
  const { isLoggedIn } = useContext(CurrentUserContext);
  const [hover, setHover] = useState(false);
  const isSaved = saveCards.some((card) => card.title === newsItem.title);
  const publishedAt = new Date(newsItem.publishedAt).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleSaveCards = (e) => {
    // refer to likecards in react project
    setSavedCards();
  };

  return (
    <div className="card__item">
      <img
        src={newsItem.urlToImage}
        alt={newsItem.url}
        className="card__image"
      />
      <div className="card__description-container">
        <h4 className="card__date">{publishedAt}</h4>
        <h3 className="card__title">{newsItem.title}</h3>
        <p className="card__description">{newsItem.description}</p>
        <h4 className="card__publisher">{newsItem.source.name || newsItem.source}</h4>
      </div>
      <div className="card__save-btn-container">
        {currentPage === "/saved-news" ? (
          <button
            className="card__delete"
            type="button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></button>
        ) : (
          <button
            className={`card__save ${isSaved ? "card__save_active" : ""}`}
            type="button"
            onClick={handleSaveCards}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></button>
        )}
      </div>
      {hover && currentPage === "/saved-news" ? (
        <div className="card__warning_remove">
          <p className="card__warning">Remove from saved</p>
        </div>
      ) : hover && !isLoggedIn && currentPage === "/" ? (
        <div className="card__warning_signin">
          <p className="card__warning">Sign in to save articles</p>
        </div>
      ) : (
        ""
      )}
      {currentPage === "/saved-news" ? <div className="card__keyword">{newsItem.keyword}</div> : ""}
    </div>
  );
}

export default NewsCard;
