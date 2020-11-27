import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
      console.log(data);
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
    }}
  </Query>
);

export default Users;
