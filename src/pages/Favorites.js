import { useContext } from "react";
import FavoritesContext from "../store/favourites-context";
import MeetupList from "../components/layout/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You don't have any favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
