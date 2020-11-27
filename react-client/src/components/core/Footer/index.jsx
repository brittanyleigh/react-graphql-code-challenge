import React from "react";
import styles from "./footer.module.css";

const Footer = props => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      by{" "}
      <a
        href="https://www.brittanyisenberg.com"
        target="_blank"
        className={styles.link}
      >
        Brittany Isenberg
      </a>
    </div>
  </footer>
);

export default Footer;
