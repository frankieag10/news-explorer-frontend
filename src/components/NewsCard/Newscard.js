import React, { useState } from "react";
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
    <div className="newscard">
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
