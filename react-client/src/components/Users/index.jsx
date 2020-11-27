import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styles from "./users.module.css";
import UserCard from "./UserCard";
import ErrorCard from "../core/ErrorCard";
import LoadingCard from "../core/LoadingCard";

const GET_USERS = gql`
  query users {
    users {
      id
      name
      email
      phone
    }
  }
`;

const Users = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingCard />;
      if (error) return <ErrorCard />;
      return (
        <div className={styles.container}>
          {data.users.map((user, index) => {
            return <UserCard data={user} index={index} key={user.id} />;
          })}
        </div>
      );
    }}
  </Query>
);

export default Users;
