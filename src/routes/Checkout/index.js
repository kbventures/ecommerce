import React from "react"
import styles from "./checkout.module.css"
import Container from "../../components/Container"
import Button from "../../components/Button"

const {
    header,
    header_back_button,
    header_title,
    
    shipping_info_container,
    shipping_info_header,
    shipping_info_main,
    shipping_info_item,
    
    payment_info_container,
    payment_info_header,
    payment_info_main,
    payment_info_option,
    
    payment_total,
    payment_button
} = styles

export default function Checkout() {
    return (
        <Container backgroundColor="#E5E5E5">
            <div className={header}>
                <img src="../../assets/arrow-left.png" />
                <h1 className={header_title}>Checkout</h1>
            </div>

            <div className={shipping_info_container}>
                <div className={shipping_info_header}>
                    <h2>Shiping Information</h2>
                    <span>Change</span>
                </div>
                <div className={shipping_info_main}>
                    <div className={shipping_info_item}>
                        <img src="../../assets/profile.png" width="20px" height="auto" />
                        <p>Rosina Doe</p>
                    </div>
                    <div className={shipping_info_item}>
                        <img src="../../assets/location.png" width="20px" height="auto" />
                        <p>123 Main St.</p>
                    </div>
                    <div className={shipping_info_item}>
                        <img src="../../assets/call.png" width="20px" height="auto" />
                        <p>123 456 789</p>
                    </div>
                </div>
            </div>

            <div className={payment_info_container}>
                <h2 className={payment_info_header}>
                    Payment Method
                </h2>
                <div className={payment_info_main}>
                    <div className={payment_info_option}>
                        <input type="radio" />
                        <span>Visa Image</span>
                        <span>**** **** **** 1234</span>
                    </div>
                    <div className={payment_info_option}>
                        <input type="radio" />
                        <span>Visa Image</span>
                        <span>**** **** **** 1234</span>
                    </div>
                </div>
            </div>

            <div className={payment_total}>
                <span>Total</span>
                <span>$954</span>
            </div>

            <div className={payment_button}>
                <Button inverted={true}>Confirm and Pay</Button>
            </div>
        </Container>
    )
}