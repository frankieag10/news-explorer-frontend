import { useContext } from "react";
import About from "../About/About";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import IsLoadingContext from "../../contexts/IsLoadingContext";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";
import "./Main.css";

function Main() {
  <div className="main">
    <About />
    {/*<NewsCardList />*/}
  </div>;
}

export default Main;
