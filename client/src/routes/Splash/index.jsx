import React from "react";
import { Link } from "react-router-dom";
import styles from "./Splash.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";

const { container, title, imgWrapper, img, link } = styles;

function Splash() {
  return (
    <Container>
      {/* <Navigation /> */}
      <div className={container}>
        <h1 className={title}>eRennaissance</h1>
        <div className={imgWrapper}>
          <img src="./assets/logo.png" alt="guy in vr" className={img} />
        </div>
        <Link to="/home" className={link}>
          <Button>Get started</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Splash;
