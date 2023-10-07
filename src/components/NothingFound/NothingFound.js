import React from "react";
import "./NothingFound.css";
const notFoundImg = require("../../images/not-found_v1.svg");

function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        className="nothing-found__image"
        src={notFoundImg}
        alt="not found"
      />
      <h4 className="nothing-found__title">Nothing found</h4>
      <span className="nothing-found__text">Sorry, but nothing matched your search terms.</span>
    </div>
  );
}

export default NothingFound;
