import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ReactNode } from "react";
import { GRAPHQL_URI } from "../utils/constants";
import Cookies from "js-cookie";
import { cookiesStrings } from "../hooks/auth/useLogin";
import { UsersRolesType } from "../__generated__/schema.graphql.types";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const createAuthLink = () =>
  setContext(async (_, { headers }) => {
    const token = Cookies.get(cookiesStrings.token);
    const cookieUser = Cookies.get(cookiesStrings.user);
    const parsedUser = cookieUser ? JSON.parse(cookieUser) : undefined;

    const roleHeaders = parsedUser
      ? {
          "x-hasura-user-id": parsedUser.userId,
          "x-hasura-role": parsedUser.role.toLowerCase(),
        }
      : {
          "x-hasura-role": UsersRolesType.UnauthenticatedUser.toLowerCase(),
        };

    return {
      headers: {
        ...headers,
        // TODO: Remove secret
        "x-hasura-admin-secret": "admin_secret",
        ...roleHeaders,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  });

const initializeApolloClient = () => {
  const authLink = createAuthLink();
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const client = initializeApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
