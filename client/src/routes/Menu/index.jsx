import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import Container from "../../components/Container";
import FullSmallEllipseSvg from "../../../public/assets/ellipse-20.svg";
import EmptySmallEllipseSvg from "../../../public/assets/ellipse-22.svg";
import SemiCircle from "../../../public/assets/ellipse-19.svg";

const rectangle74 = "../../assets/rectangle-74.png";
const rectangle73 = "../../assets/rectangle-73.png";

const {
  signOutHover,
  semiCircle,
  emptySmallEllipsePosition,
  menuLargeImage,
  rectangle74image,
  menu,
  navigationContainer,
  navigationContainerA,
  navigation,
  navigationUl,
  navigationA,
  navigationProfileIcon,
  navigationBuyIcon,
  navigationHeartIcon,
  navigationSettingIcon,
  navigationDeliveryIcon,
  navigationSignoutIcon,
  navigationSpan,
  navigationLogout,
  emptySmallEllipse,
  fullSmallEllipse,
  marginLeft15px,
  img,
  imgWrapper,
  companyName,
  companyWrapper,
} = styles;

function Menu() {
  return (
    <Container>
      <div className={imgWrapper}>
        <img src="./assets/logo.svg" alt="eRenaissance Logo" className={img} />
      </div>
      <section className={menu}>
        <section className={navigationContainer}>
          <section className={navigation}>
            <section>
              <ul className={navigationUl}>
                <Link className={navigationA} to="/profile">
                  <li className={navigationProfileIcon}>
                    <span className={navigationSpan}>Profile</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/orders">
                  <li className={navigationBuyIcon}>
                    <span className={navigationSpan}>Orders</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/favorite">
                  <li className={navigationHeartIcon}>
                    <span className={navigationSpan}>Favorite</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/delivery">
                  <li className={navigationDeliveryIcon}>
                    <span className={navigationSpan}>Delivery</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/settings">
                  <li className={navigationSettingIcon}>
                    <span className={navigationSpan}>Settings</span>
                  </li>
                </Link>
              </ul>
              <section className={menuLargeImage}>
                <img
                  className={rectangle74image}
                  src={rectangle74}
                  alt="Decorative"
                />
                <img src={rectangle73} alt="Decorative" />
                <EmptySmallEllipseSvg className={emptySmallEllipsePosition} />
              </section>
            </section>
            <section className={`${navigationLogout} ${navigationSignoutIcon}`}>
              <Link
                className={`${navigationContainerA} ${marginLeft15px} ${signOutHover}`}
                to="signout"
              >
                Sign Out
              </Link>
            </section>

            <EmptySmallEllipseSvg
              title="testin"
              className={emptySmallEllipse}
            />
            <FullSmallEllipseSvg className={fullSmallEllipse} />
          </section>
        </section>

        <section className="menuLargeEllipse">
          <SemiCircle className={semiCircle} />
        </section>
      </section>
      <div className={companyWrapper}>
        <h1 className={companyName}>eRenaissance</h1>
      </div>
    </Container>
  );
}

export default Menu;
