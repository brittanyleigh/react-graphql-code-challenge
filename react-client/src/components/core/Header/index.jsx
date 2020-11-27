import React from "react";
import styles from "./header.module.css";

const Header = props => (
  <header className={styles.header}>
    <div className={styles.container}>Astronomer Project</div>
  </header>
);

export default Header;
