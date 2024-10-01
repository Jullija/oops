import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ReactNode } from "react";
import { Roles } from "../utils/types";
import { auth } from "../../firebaseConfig";
import { GRAPHQL_URI } from "../utils/constants";
import Cookies from "js-cookie";
import { cookiesStrings } from "../hooks/auth/useLogin";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const createAuthLink = () =>
  setContext(async (_, { headers }) => {
    let token = Cookies.get(cookiesStrings.token);
    let roleHeader;
    const userCookie = Cookies.get(cookiesStrings.user);
    if (userCookie) {
      const user = JSON.parse(userCookie);
      roleHeader = {
        "x-hasura-user-id": user.userId,
        "x-hasura-role": user.role.toLowerCase(),
      };
    } else {
      roleHeader = { "x-hasura-role": Roles.UNAUTHENTICATED_USER };
    }

    if (!token && auth.currentUser) {
      try {
        token = await auth.currentUser.getIdToken();
        Cookies.set("token", token);
      } catch (error) {
        console.error("Error fetching token:", error);
        throw error;
      }
    }

    return {
      headers: {
        ...headers,
        // TODO: Remove secret
        "x-hasura-admin-secret": "admin_secret",
        ...roleHeader,
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
