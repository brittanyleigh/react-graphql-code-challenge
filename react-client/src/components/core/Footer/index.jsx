import React from "react";
import styles from "./footer.module.css";

const Footer = props => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      by{" "}
      <a href="www.brittanyisenberg.com" target="_blank">
        Brittany Isenberg
      </a>
    </div>
  </footer>
);

export default Footer;
