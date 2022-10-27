import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HeartIcon.module.css";
import HeartIcon from "../../../../public/assets/heart.svg";
import { useItems } from "../../../contexts/ItemsContext";
import { useFavorite } from "../../../contexts/FavoritesContext";

export default function Heart({ heartColor }) {
  const { items } = useItems();
  const { favorite, setFavorite } = useFavorite();
  const { id } = useParams();
  const singleProduct = items.find((item) => item.id === id);

  const updateFavorite = () => {
    if (!favorite.find((item) => item.id === id)) {
      favorite.push(singleProduct);
      setFavorite(favorite);
    } else {
      favorite.splice(
        favorite.findIndex((item) => item.id === id),
        1
      );
      setFavorite(favorite);
    }
  };

  const inContext = !!favorite.find((item) => item.id === id);

  return (
    <Link to="/favorite">
      <HeartIcon
        className={styles[heartColor]}
        onClick={updateFavorite}
        style={{ fill: inContext ? "#8391f9" : "" }}
      />
    </Link>
  );
}

Heart.propTypes = {
  heartColor: PropTypes.string,
};

Heart.defaultProps = {
  heartColor: "",
};
