import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Users from "./Users";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <Users />
  </ApolloProvider>
);

export default App;
