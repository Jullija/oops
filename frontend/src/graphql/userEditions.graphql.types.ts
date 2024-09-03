import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserEditionsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserEditionsQuery = {
  __typename?: "query_root";
  edition: Array<{
    __typename?: "Edition";
    editionId: string;
    editionYear: number;
    label: string;
    name: string;
  }>;
};

export const UserEditionsDocument = gql`
  query UserEditions {
    edition(orderBy: { editionYear: DESC }) {
      editionId
      editionYear
      label
      name
    }
  }
`;

/**
 * __useUserEditionsQuery__
 *
 * To run a query within a React component, call `useUserEditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserEditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserEditionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserEditionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserEditionsQuery,
    UserEditionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserEditionsQuery, UserEditionsQueryVariables>(
    UserEditionsDocument,
    options,
  );
}
export function useUserEditionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserEditionsQuery,
    UserEditionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserEditionsQuery, UserEditionsQueryVariables>(
    UserEditionsDocument,
    options,
  );
}
export function useUserEditionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UserEditionsQuery,
    UserEditionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserEditionsQuery, UserEditionsQueryVariables>(
    UserEditionsDocument,
    options,
  );
}
export type UserEditionsQueryHookResult = ReturnType<
  typeof useUserEditionsQuery
>;
export type UserEditionsLazyQueryHookResult = ReturnType<
  typeof useUserEditionsLazyQuery
>;
export type UserEditionsSuspenseQueryHookResult = ReturnType<
  typeof useUserEditionsSuspenseQuery
>;
export type UserEditionsQueryResult = Apollo.QueryResult<
  UserEditionsQuery,
  UserEditionsQueryVariables
>;
