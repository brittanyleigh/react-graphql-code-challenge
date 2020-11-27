import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Layout from "./components/core/Layout";
import Users from "./components/Users";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <Layout>
      <Users />
    </Layout>
  </ApolloProvider>
);

export default App;
