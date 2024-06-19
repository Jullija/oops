// ApolloClientSetup.tsx
import { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Roles } from "../utils";
import { useUser } from "./userContext";

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:9191/v1/graphql",
});

const AuthLink = () => {
  const { user } = useUser();

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": "admin_secret",
        ...(user.userId !== "unauthenticated"
          ? {
              "x-hasura-user-id": user.userId,
              "x-hasura-role": user.role.toLowerCase(),
            }
          : { "x-hasura-role": Roles.UNAUTHENTICATED_USER }),
      },
    };
  });

  return authLink.concat(httpLink);
};

export const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const authLink = AuthLink();

  const client = new ApolloClient({
    link: authLink,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
