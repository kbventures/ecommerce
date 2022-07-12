import React from "react"
import styles from "./menu.module.css"
import Container from "../../components/Container"
import { Link } from "react-router-dom";
import Testing from "../../../public/assets/Setting.svg"
import MenuMediumEllipseSvg from "../../../public/assets/Ellipse 20.svg"
import MenuSmallEllipseSvg from "../../../public/assets/Ellipse 22.svg"
import { ReactComponent as Logo } from '../../../public/assets/Ellipse 22.svg';


const { test, menu, navigationContainer, navigationContainer_a, navigation, navigation_ul, navigation_li, navigation_profileIcon, navigation_buyIcon, navigation_heartIcon, navigation_settingIcon, navigation_deliveryIcon, navigation_signOut, navigation_span, navigation_logout, menuMediumEllipse, menuSmallEllipse, menuMediumEllipse_img } = styles
const url = '../../assets/Setting.svg'
const ellipseSvg = '../../assets/Ellipse 22.svg'

function Menu() {
    return (
        <Container>
            <section className={menu}>
                <section className={navigationContainer}>
                    <section className={navigation}>
                        {/* Using IMage tag for static svg */}
                        <section>
                            <div>
                                <img src={ellipseSvg} className={test} alt="React Logo" />
                            </div>
                            {/* <div className="App">
                                <Logo />
                            </div> */}
                            <ul className={navigation_ul}>
                                <Link className={navigation_li} to="/profile">
                                    <li className={`${navigation_profileIcon}`}><span className={navigation_span}>Profile</span></li>
                                </Link>
                                <Link className={`${navigation_li} ${navigationContainer_a}`} to="/orders">
                                    <li className={`${navigation_buyIcon}`}><span className={navigation_span}>Orders</span></li>
                                </Link>
                                <Link className={`${navigation_li} ${navigationContainer_a}`} to="/favorite">
                                    <li className={`${navigation_heartIcon}`}><span className={navigation_span}>Favorite</span></li>
                                </Link>
                                <Link className={`${navigation_li} ${navigationContainer_a}`} to="/delivery">
                                    <li className={`${navigation_deliveryIcon}`}><span className={navigation_span}>Delivery</span></li>
                                </Link>
                                <Link className={`${navigation_li} ${navigationContainer_a}`} to="/settings">
                                    <li className={`${navigation_settingIcon}`}><span className={navigation_span}>Settings</span></li>
                                </Link>
                            </ul>
                        </section>
                        <section className={navigation_logout}>
                            <Link className={navigationContainer_a} to="signout">
                                Sign Out
                            </Link>
                        </section>


                        <section className={menuMediumEllipse}>
                            <img src={ellipseSvg} />
                        </section>

                        
                            <MenuSmallEllipseSvg title="testin" className={menuSmallEllipse} />
                    </section>
                </section>


                <section className="menuLargeImage">
                    {/* <img src={url} alt="" /> */}
                    {/* <img className="rectangle74" src="./img/Rectangle 74.png" alt="" /> */}
                </section>
                <section className="menuLargeEllipse">
                    {/* <img src="./img/Ellipse 19.svg" alt="" /> */}
                </section>

                <section className="smallEllipse">
                    {/* <img src="./img/Ellipse 22.svg" alt="" /> */}
                </section>
            </section>
        </Container>
    )
}

export default Menu;




