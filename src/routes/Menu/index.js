import React from "react"
import styles from "./menu.module.css"
import Container from "../../components/Container"
import { Link } from "react-router-dom";

const { menu, container, title, img_wrapper } = styles
const url = '../../assets/Setting.svg'

function Menu() {
    return (
        <Container>
            <div className={menu}>
                <section className="menu">
                    <div className="container menuflex">

                        <section className="navigationContainer">


                            <section className="navigation">

                                <section>
                                    <ul>
                                        <li className="profileIcon"><span><a href="/profile" alt="">Profile</a></span></li>
                                        <li className="buyIcon"><span><a href="/orders">My Orders</a></span></li>
                                        <li className="heartIcon"><span><a href="/favorites">Favorites</a></span></li>
                                        <li className="deliveryIcon"><span><a href="/delivery">Delivery</a></span></li>
                                        <li className="settingIcon"><span><a href="/settings">Settings</a></span></li>
                                    </ul>
                                </section>
                                <section className="signoutIcon logout">
                                    <a href="/signout">Sign Out</a>
                                </section>


                                <section className="menuMediumEllipse">
                                    <img src={url} alt="" />
                                </section>

                                <section className="menuSmallEllipse">
                                    {/* <img src="./img/Ellipse 22.svg" alt="" /> */}
                                </section>
                            </section>

                        </section>
                    </div>

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

            </div>
        </Container>
    )
}

export default Menu;




