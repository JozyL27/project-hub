import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  ApolloLink,
} from "@apollo/client";
import config from "../../config";

const { API_ENDPOINT } = config;
const client = new ApolloClient({
  link: ApolloLink.from([new HttpLink({ uri: API_ENDPOINT })]),
  cache: new InMemoryCache(),
});

export { client, gql };
