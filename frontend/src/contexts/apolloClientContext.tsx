import { ReactNode, useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { User, UserContext } from "../contexts/userContext";
import { Roles } from "../utils";

export const GRAPHQL_URI = "http://127.0.0.1:9191/v1/graphql";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const createAuthLink = (user?: User) =>
  setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": "admin_secret",
        ...(user?.userId !== "unauthenticated" && user
          ? {
              "x-hasura-user-id": user?.userId,
              "x-hasura-role": user?.role.toLowerCase(),
            }
          : { "x-hasura-role": Roles.UNAUTHENTICATED_USER }),
      },
    };
  });

const initializeApolloClient = (user?: User) => {
  const authLink = createAuthLink(user);
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const userContext = useContext(UserContext);

  const client = initializeApolloClient(userContext?.user);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
