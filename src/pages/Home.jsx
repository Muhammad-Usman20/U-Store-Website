import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to Our Store</h1>


            <p className={styles.text}>
                Welcome to U-Store – your one-stop destination for premium products at unbeatable prices. Whether you’re in Pakistan or anywhere in the world, we bring quality, style, and convenience right to your doorstep.
            </p>

            <h1 className={styles.heading1}>🔥 About Our Store</h1>
            <p className={styles.text}>
                At U-Store, we believe shopping should be simple, fun, and affordable. From the latest electronics to stylish clothing, household essentials, and more – our collection is carefully curated to meet your everyday needs.            </p>


            <h1 className={styles.heading1}>🚚 Why Shop With Us?</h1>
            <p className={styles.text}>
                We provide fast delivery, secure payments, and 24/7 customer support so you can shop with complete peace of mind. Our mission is to give you the best shopping experience with top-quality products and the best deals every day.            </p>



            <h1 className={styles.heading1}>⭐ Customer Trust</h1>
            <p className={styles.text}>
                Thousands of happy customers trust us for their shopping needs. We focus on delivering genuine products, easy returns, and guaranteed satisfaction. Your happiness is our success.            </p>


            <p className={styles.text}>
                Discover the best shopping experience online. We bring you a wide
                selection of products at unbeatable prices. Whether you’re looking
                for the latest electronics, stylish clothing, or home essentials, our
                store is your one-stop destination.
            </p>
            <p className={styles.text}>
                Our mission is to deliver quality and satisfaction. With fast
                shipping, easy returns, and 24/7 customer support, shopping with us
                is always a delight.
            </p>
        </div>

    );
}
