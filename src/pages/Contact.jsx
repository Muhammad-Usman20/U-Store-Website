import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.text}>
        Got questions? We’d love to hear from you. Our support team is here
        to help you 24/7.
      </p>
      <div className={styles.infoBox}>
        <p><b>Email:</b> mu.usman.shahid20@gmail.com</p>
        <p><b>Phone:</b> +92 3162778895</p>
        <p><b>Address:</b> 5/77-A Karachi</p>
      </div>
    </div>
  );
}


