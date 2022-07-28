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
  navigationContainer_a,
  navigation,
  navigation_ul,
  navigation_a,
  navigation_profileIcon,
  navigation_buyIcon,
  navigation_heartIcon,
  navigation_settingIcon,
  navigation_deliveryIcon,
  navigation_signoutIcon,
  navigation_span,
  navigation_logout,
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
              <ul className={navigation_ul}>
                <Link className={navigation_a} to="/profile">
                  <li className={`${navigation_profileIcon}`}>
                    <span className={navigation_span}>Profile</span>
                  </li>
                </Link>
                <Link className={navigation_a} to="/orders">
                  <li className={`${navigation_buyIcon}`}>
                    <span className={navigation_span}>Orders</span>
                  </li>
                </Link>
                <Link className={navigation_a} to="/favorite">
                  <li className={`${navigation_heartIcon}`}>
                    <span className={navigation_span}>Favorite</span>
                  </li>
                </Link>
                <Link className={navigation_a} to="/delivery">
                  <li className={`${navigation_deliveryIcon}`}>
                    <span className={navigation_span}>Delivery</span>
                  </li>
                </Link>
                <Link className={navigation_a} to="/settings">
                  <li className={`${navigation_settingIcon}`}>
                    <span className={navigation_span}>Settings</span>
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
            <section
              className={`${navigation_logout} ${navigation_signoutIcon}`}
            >
              <Link
                className={`${navigationContainer_a} ${marginLeft15px} ${signOutHover}`}
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
