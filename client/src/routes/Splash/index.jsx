import React from "react";
import { Link } from "react-router-dom";
import styles from "./Splash.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Header from "../../components/Header";

const { logoPosition, container, title, imgWrapper, img, link } = styles;

function Splash() {
  return (
    <Container>
      <Header title="" />
      <div className={container}>
        <h1 className={title}>Find You Gadget</h1>
        {/* <div className={imgWrapper}>
          <img src="./assets/logo.svg" alt="guy in vr" className={img} />
        </div> */}
        <div className={logoPosition}>
          <Logo />
        </div>
        <Link to="/home" className={link}>
          <Button>Get started</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Splash;
