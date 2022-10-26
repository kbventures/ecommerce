import React from "react";
import { Link } from "react-router-dom";
import styles from "./Splash.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Header from "../../components/Header";

const { logoPosition, container, title, link } = styles;

function Splash() {
  return (
    <Container>
      <Header title="" />
      <div className={container}>
        <h1 className={title}>Find Your Gadget</h1>
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
