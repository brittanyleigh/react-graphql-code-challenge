import React from "react";
import Card from "../../core/Card";
import styles from "./userCard.module.css";

const colors = ["red", "green", "yellow", "blue"];

const LoadingCard = ({ data, index }) => (
  <Card>
    <h1 className={styles[colors[index % 4]]}>{data.name}</h1>
    <p>{data.email}</p>
    <p>{data.phone}</p>
  </Card>
);

export default LoadingCard;
