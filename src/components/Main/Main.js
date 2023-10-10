import { useContext } from "react";
import About from "../About/About";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import IsLoadingContext from "../../contexts/IsLoadingContext";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";

function Main({ signinClick, signoutClick }) {
  <div className="main">
    <About />
    <NewsCardList />
    <SavedNews />
  </div>;
}

export default Main;
