import React from "react"
import styles from "./splash.module.css"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Navigation from "../../components/Navigation"

function Splash(){
    return (
        <Container>
            {/* <Navigation /> */}
            <div className={styles.container}>
                <h1 className={styles.title}>Find your Gadget</h1>
                <div className={styles.img_wrapper}>
                    <img src="../../assets/Saly-19.png" width="305px" height="364px" alt="guy in vr" />
                </div>
                <Button>Get started</Button>
            </div>
        </Container>
    )
}

export default Splash; 