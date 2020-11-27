import React from "react";
import styles from "./layout.module.css";

const Layout = props => (
  <main>
    <div className={styles.container}>{props.children}</div>
  </main>
);

export default Layout;
