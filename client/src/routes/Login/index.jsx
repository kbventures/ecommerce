import React from "react";
import styles from "./login.module.css";

import EmptySmallEllipseSvg from "../../../public/assets/ellipse-22.svg";
import SolidPinkEllipseSvg from "../../../public/assets/ellipse-19-pink.svg";

import Button from "../../components/Button";
import LoginForm from "./LoginForm/LoginForm";

const {
  container,
  top,
  EmptySmallEllipsePositionOne,
  EmptySmallEllipsePositionTwo,
  transparentSvg,
  SolidPinkEllipsePosition,
  header,
  overlay,
  overlayContainer,
  loginHeader,
  passcodeLink,
  createAccountLink,
} = styles;

export default function Login() {
  return (
    <div className={container}>
      <section className={top}>
        <EmptySmallEllipseSvg className={EmptySmallEllipsePositionOne} />

        <EmptySmallEllipseSvg className={EmptySmallEllipsePositionTwo} />

        <div>
          <SolidPinkEllipseSvg className={SolidPinkEllipsePosition} />
          <div className={transparentSvg} />
        </div>

        <h1 className={header}>Welcome Back</h1>
      </section>

      <section className={overlay}>
        <div className={overlayContainer}>
          <h3 className={loginHeader}>Login</h3>

          <LoginForm />

          <a href="/home" className={passcodeLink}>
            Forgot passcode?
          </a>

          <Button inverted>Login</Button>

          <a href="/home" className={createAccountLink}>
            Create account
          </a>
        </div>
      </section>
    </div>
  );
}
