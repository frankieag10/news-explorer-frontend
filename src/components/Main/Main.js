import React from "react";
import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <div className="main">
      <About />
      <NewsCardList />
    </div>
  );
}

export default Main;
