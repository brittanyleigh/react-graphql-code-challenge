import React from "react";
import Card from "../../core/Card";

const LoadingCard = ({ data }) => (
  <Card>
    <h1>{data.name}</h1>
    <p>{data.email}</p>
    <p>{data.phone}</p>
  </Card>
);

export default LoadingCard;
