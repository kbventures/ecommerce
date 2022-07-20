import React from "react"
import styles from "./Item.module.css"
import Button from "../../components/Button"
import Container from "../../components/Container"
import { Link } from "react-router-dom";

const { container, title, img_wrapper } = styles

function Splash(){
    return (
        <Container>
            <div className={container}>
                <h1 className={title}>Find your Gadget</h1>
                <div className={img_wrapper}>
                    <img src="../../assets/Saly-19.png"  alt="guy in vr" className={styles.img} />
                </div>
                <Link to="/home">
                    <Button>Get started</Button>
                </Link>
            </div>
        </Container>
    )
}

export default Splash; 