import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ inSavedNews = true }) {
  return (
    <div className="saved-news">
      <NewsCard inSavedNews={inSavedNews} />
    </div>
  );
}

export default SavedNews;
