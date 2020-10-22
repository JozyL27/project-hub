import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  ApolloLink,
} from "@apollo/client";
import config from "../../config";
import { onError } from "@apollo/client/link/error";
import { snackbarStore } from "../../SnackbarStore/snackbarStore";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, location: ${locations}, Path: ${path}`
      )
    );

    const messages = graphQLErrors
      .map(
        ({ message, locations, path }) =>
          `[GraphQL error]: Message: ${message}, location: ${locations}, Path: ${path}`
      )
      .join(" ");

    snackbarStore.dispatch.snackbar.handleOpen(messages);
  }
  if (networkError) {
    console.log(`[network error]: ${networkError}`);
  }
});

const { API_ENDPOINT } = config;
const client = new ApolloClient({
  link: ApolloLink.from([errorLink, new HttpLink({ uri: API_ENDPOINT })]),
  cache: new InMemoryCache(),
});

export { client, gql };
