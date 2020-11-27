import React from "react";
import styles from "./layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = props => (
  <React.Fragment>
    <Header />
    <main>
      <div className={styles.container}>{props.children}</div>
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;
