import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

function SavedNews() {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <SavedNewsCardList />
    </div>
  );
}

export default SavedNews;
