import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Item.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TotalPrice from "../../components/TotalPrice";
import ProductInfo from "./Productinfo";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";
import { useItems } from "../../contexts/ItemsContext";
// import { useBasket } from "../../contexts/BasketContext";

const { container, productImg, productImgSection } = styles;

function Item() {
  const items = useItems();
  // const [basket, setBasket] = useBasket();
  const { id } = useParams();
  const singleProduct = items.find((item) => item.id === id);

  return (
    <Container white>
      <Header icon="heart" iconColor="black" link="" />
      <div className={container}>
        <section className={productImgSection}>
          <img
            className={productImg}
            src={singleProduct.src}
            alt={singleProduct.title}
          />
        </section>

        <section>
          <ProductInfo singleProduct={singleProduct} />

          <TotalPrice amount={singleProduct.price} />

          <button type="button" className={styles.button}>
            Full Description <ArrowIcon />
          </button>
        </section>
        <Link to="/basket">
          <Button inverted>Add to basket</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Item;
