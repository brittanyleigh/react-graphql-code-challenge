import React from "react";
import Card from "../../core/Card";
import styles from "./userCard.module.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const colors = ["red", "yellow", "green", "blue"];

const UserCard = ({ data, index }) => {
  const color = colors[index % colors.length];
  return (
    <Card>
      <h2 className={styles[`name_${color}`]}>{data.name}</h2>
      <p>
        <FaEnvelope className={styles[`icon_${color}`]} /> {data.email}
      </p>
      <p>
        <FaPhone className={styles[`icon_${color}`]} /> {data.phone}
      </p>
    </Card>
  );
};
export default UserCard;
