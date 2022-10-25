import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Item.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TotalPrice from "../../components/TotalPrice";
import ProductInfo from "./Productinfo";
import { useItems } from "../../contexts/ItemsContext";
import { useBasket } from "../../contexts/BasketContext";

const { container, productImg, productImgSection } = styles;

function Item() {
  const { items } = useItems();
  const { basket, setBasket } = useBasket();
  const { id } = useParams();
  const singleProduct = items.find((item) => item.id === id);

  if (!singleProduct) return null;

  const updateBasket = () => {
    basket.push(singleProduct);
    setBasket(basket);
  };

  return (
    <Container white>
      <Header icon="heart" iconColor="black" />

      <div className={container}>
        <section className={productImgSection}>
          <img
            className={productImg}
            src={singleProduct.images[0]}
            alt={singleProduct.name}
          />
        </section>

        <section>
          <ProductInfo singleProduct={singleProduct} />

          <TotalPrice amount={singleProduct.default_price.unit_amount / 100} />
        </section>
      </div>
      <Link to="/basket">
        <Button onClick={updateBasket} inverted>
          Add to basket
        </Button>
      </Link>
    </Container>
  );
}

export default Item;
