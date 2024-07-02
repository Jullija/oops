// apolloClient.ts
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ReactNode, useContext, useEffect, useState } from "react";
import { User, UserContext } from "../contexts/userContext";
import { Roles } from "../utils/types";

export const GRAPHQL_URI = "http://127.0.0.1:9191/v1/graphql";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const createAuthLink = (user?: User) =>
  setContext((_, { headers }) => {
    const roleHeader =
      user && user.userId !== "unauthenticated"
        ? {
            "x-hasura-user-id": user.userId,
            "x-hasura-role": user.role.toLowerCase(),
          }
        : { "x-hasura-role": Roles.UNAUTHENTICATED_USER };
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": "admin_secret",
        ...roleHeader,
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
  const context = useContext(UserContext);
  const [client, setClient] = useState(() =>
    initializeApolloClient(context?.user),
  );

  useEffect(() => {
    setClient(initializeApolloClient(context?.user));
  }, [context]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
