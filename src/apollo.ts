import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost/grapqhl',
});

export default client;