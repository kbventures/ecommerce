import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import Container from "../../components/Container";
import FullSmallEllipseSvg from "../../../public/assets/Ellipse 20.svg";
import EmptySmallEllipseSvg from "../../../public/assets/Ellipse 22.svg";
import SemiCircle from "../../../public/assets/Ellipse 19.svg";

const rectangle74 = "../../assets/Rectangle 74.png";
const rectangle73 = "../../assets/Rectangle 73.png";

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
} = styles;

function Menu() {
  return (
    <Container>
      <section className={menu}>
        <section className={navigationContainer}>
          <section className={navigation}>
            <section>
              <ul className={navigationUl}>
                <Link className={navigationA} to="/profile">
                  <li className={`${navigationProfileIcon}`}>
                    <span className={navigationSpan}>Profile</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/orders">
                  <li className={`${navigationBuyIcon}`}>
                    <span className={navigationSpan}>Orders</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/favorite">
                  <li className={`${navigationHeartIcon}`}>
                    <span className={navigationSpan}>Favorite</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/delivery">
                  <li className={`${navigationDeliveryIcon}`}>
                    <span className={navigationSpan}>Delivery</span>
                  </li>
                </Link>
                <Link className={navigationA} to="/settings">
                  <li className={`${navigationSettingIcon}`}>
                    <span className={navigationSpan}>Settings</span>
                  </li>
                </Link>
              </ul>
              <section className={menuLargeImage}>
                <img className={rectangle74image} src={rectangle74} alt="" />
                <img src={rectangle73} alt="" />
                <EmptySmallEllipseSvg
                  title="testin"
                  className={emptySmallEllipsePosition}
                />
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
            <FullSmallEllipseSvg title="testin" className={fullSmallEllipse} />
          </section>
        </section>

        <section className="menuLargeEllipse">
          <SemiCircle title="" className={semiCircle} />
        </section>
      </section>
    </Container>
  );
}

export default Menu;
