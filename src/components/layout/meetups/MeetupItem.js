import { useContext } from "react";
import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../../store/favourites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const isItemFavorite = favoritesCtx.isItemFavorite(props.id);

  function handleToggleFavorite() {
    if (isItemFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavorite}>
            {isItemFavorite ? "Remove From Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
