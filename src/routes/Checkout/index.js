import React from "react"
import styles from "./checkout.module.css"
import Container from "../../components/Container"
import Button from "../../components/Button"

const {
    header,
    header_title,
    
    shipping_info_container,
    shipping_info_header,
    shipping_info_main,
    shipping_info_item,
    
    payment_info_container,
    payment_info_header,
    payment_info_main,
    payment_info_option,
    payment_info_card_wrapper,
    
    payment_total,
    payment_total_amount,
    payment_button
} = styles

export default function Checkout() {
    return (
        <Container backgroundColor="rgb(245, 245, 248)">
            <div className={header}>
                <img src="../../assets/arrow-left.png" />
                <h1 className={header_title}>Checkout</h1>
            </div>

            <div className={shipping_info_container}>
                <div className={shipping_info_header}>
                    <h2>Shiping Information</h2>
                    <span>change</span>
                </div>
                <div className={shipping_info_main}>
                    <div className={shipping_info_item}>
                        <img src="../../assets/profile.png" width="18px" height="auto" />
                        <p>Rosina Doe</p>
                    </div>
                    <div className={shipping_info_item}>
                        <img src="../../assets/location.png" width="20px" height="auto" />
                        <p>43 Oxford Road M13 4GR Manchester, UK</p>
                    </div>
                    <div className={shipping_info_item}>
                        <img src="../../assets/call.png" width="20px" height="auto" />
                        <p>+234 9011039271</p>
                    </div>
                </div>
            </div>

            <div className={payment_info_container}>
                <h2 className={payment_info_header}>
                    Payment Method
                </h2>
                <div className={payment_info_main}>
                    <div className={payment_info_option}>
                        <input type="radio" name="payment-card" />
                        <div className={payment_info_card_wrapper}>
                            <img src="../../assets/visa.png" width="40px" height="auto" />
                        </div>
                        <span>**** **** **** 1234</span>
                    </div>
                    <div className={payment_info_option}>
                        <input type="radio" name="payment-card" />
                        <div className={payment_info_card_wrapper}>
                            <img src="../../assets/master-card.png" width="40px" height="auto" />
                        </div>
                        <span>**** **** **** 1234</span>
                    </div>
                </div>
            </div>

            <div className={payment_total}>
                <span>Total</span>
                <span className={payment_total_amount}>$954</span>
            </div>

            <Button inverted={true}>Confirm and Pay</Button>
        </Container>
    )
}