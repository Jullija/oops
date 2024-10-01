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
import { auth } from "../../firebaseConfig";
import { GRAPHQL_URI } from "../utils/constants";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const createAuthLink = (
  user: User | undefined,
  tokenBypass: string | undefined,
) =>
  setContext(async (_, { headers }) => {
    const roleHeader =
      user && user.userId !== "unauthenticated"
        ? {
            "x-hasura-user-id": user.userId,
            "x-hasura-role": user.role.toLowerCase(),
          }
        : { "x-hasura-role": Roles.UNAUTHENTICATED_USER };

    let token: string | undefined;
    if (auth.currentUser) {
      try {
        token = await auth.currentUser.getIdToken();
      } catch (error) {
        console.error("Error fetching token:", error);
        throw error;
      }
    }
    // TODO: Remove this bypass
    if (tokenBypass) {
      token = tokenBypass;
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

const initializeApolloClient = (
  user: User | undefined,
  tokenBypass: string | undefined,
) => {
  const authLink = createAuthLink(user, tokenBypass);
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(UserContext);
  const userToken = context?.token;
  const [client, setClient] = useState(() =>
    initializeApolloClient(context?.user, undefined),
  );

  useEffect(() => {
    setClient(initializeApolloClient(context?.user, userToken));
  }, [context]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
