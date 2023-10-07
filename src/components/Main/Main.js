import { useContext } from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import IsLoadingContext from "../../contexts/IsLoadingContext";

function Main() {
  const { isLoading } = useContext(IsLoadingContext);

  return (
    <div className="main">
      <About />
      <NewsCardList />
    </div>
  );
}

export default Main;
