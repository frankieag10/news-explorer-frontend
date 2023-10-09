import { useContext } from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import IsLoadingContext from "../../contexts/IsLoadingContext";
import SavedNews from "../SavedNews/SavedNews";

function Main() {
  return (
    <div className="main">
      <About />
      <NewsCardList />
      <SavedNews />
    </div>
  );
}

export default Main;
