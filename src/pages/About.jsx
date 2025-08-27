import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>

      <h1 className={styles.heading1}>🏪 Who We Are</h1>

      <p className={styles.text}>
        U-Store is more than just an online shopping platform – it’s a place where quality meets affordability. Founded with a vision to make shopping easier for everyone in Pakistan and abroad, we provide a wide range of products that fit your lifestyle, your budget, and your needs.
      </p>


      <h1 className={styles.heading1}>🎯 Our Mission</h1>
      <p className={styles.text}>
        Our mission is to deliver the best products at the best prices with a seamless shopping experience. We are committed to bringing you the latest trends, trusted brands, and unbeatable deals – all while ensuring fast delivery and secure payments.      </p>


      <h1 className={styles.heading1}>🌍 Serving Worldwide</h1>
      <p className={styles.text}>
        From Pakistan to across the globe, U-Store proudly serves customers everywhere. No matter where you are, you can count on us for reliable delivery, genuine products, and exceptional customer service.      </p>






      <p className={styles.text}>
        Our team works hard to bring you only the best. Every product is
        carefully curated to ensure quality. We believe in transparency,
        trust, and customer happiness above everything else.
      </p>
    </div>
  );
}
