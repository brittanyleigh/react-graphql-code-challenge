import React from "react";
import styles from "./layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = props => (
  <div className={styles.screen}>
    <Header />
    <main className={styles.main}>
      <div className={styles.layout}>{props.children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;
