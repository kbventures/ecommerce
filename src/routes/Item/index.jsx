import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TotalPrice from "../../components/TotalPrice";
import ProductInfo from "./productinfo";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";

const { container, productImg, productImgSection } = styles;

const product = {
  id: "01",
  title: "Apple Watch",
  desc: "Series 6. Red",
  longDesc:
    "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
  fullDesc: "",
  color: ["Sky Blue", "Rose Gold", "green"],
  price: 359,
  src: "assets/apple-watch-red.png",
};

function Item() {
  return (
    <Container white>
      <div className={container}>
        <Header icon="heart" iconColor="black" />

        <section className={productImgSection}>
          <img className={productImg} src={product.src} alt={product.title} />
        </section>

        <section className="productInformation">
          <ProductInfo product={product} />

          <TotalPrice amount={product.price} />

          <button type="button" className={styles.button}>
            Full Description <ArrowIcon />
          </button>

          <Link to="/home">
            <Button inverted>Add to basket</Button>
          </Link>
        </section>
      </div>
    </Container>
  );
}

export default Item;
