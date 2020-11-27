import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
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
      console.log(data);
      if (loading) return <LoadingCard />;
      if (error) return <ErrorCard />;
      return data.users.map(user => {
        return <UserCard data={user} key={user.id} />;
      });
    }}
  </Query>
);

export default Users;
