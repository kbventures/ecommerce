import React from "react";
import { Link } from "react-router-dom";
import styles from "./favorites.module.css";

import Header from "../../components/Header";
import Notification from "../../components/Notification";
import Container from "../../components/Container";
import ProductsList from "../../components/ProductsList";
import Button from "../../components/Button";

import NoItem from "../../../public/assets/sally-4.png";

import { useFavorite } from "../../contexts/FavoritesContext";

export default function Favorites() {
  const { favorite, setFavorite } = useFavorite();

  if (favorite.length === 0)
    return (
      <Container white>
        <Header title="Favorites" icon="delete" />
        <div className={styles.container}>
          <img src={NoItem} alt="person reaching for a plant" />

          <h2>No favorites yet</h2>
          <p>Hit the button down below to create an order</p>
        </div>{" "}
        <Link to="/home">
          <Button inverted>Create an Order</Button>
        </Link>
      </Container>
    );

  return (
    <Container white>
      <Header title="Favorites" />
      <Notification title="Take 10% Off Your First Order" />

      <main>
        <ProductsList context={favorite} updateContext={setFavorite} />
      </main>
    </Container>
  );
}
