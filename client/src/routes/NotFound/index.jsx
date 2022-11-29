import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Button from "../../components/Button";

import NotFound from "../../../public/assets/saly-17.png";

const { container, img, header, body } = styles;

export default function Profile() {
  return (
    <Container white>
      <Header title="" />

      <section className={container}>
        <img src={NotFound} className={img} alt="not found error graphic" />
        <h1 className={header}>Not Found</h1>
        <h3 className={body}>The page you were looking for does not exist.</h3>
      </section>

      <Link to="/home">
        <Button inverted>Back to homepage</Button>
      </Link>
    </Container>
  );
}
