import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UsersInGroupQueryVariables = Types.Exact<{
  groupId: Types.Scalars["bigint"]["input"];
}>;

export type UsersInGroupQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "Users";
    nick: string;
    role: string;
    userId: string;
    userGroups: Array<{
      __typename?: "UserGroups";
      group: { __typename?: "Groups"; groupsId: string; groupName: string };
    }>;
  }>;
};

export const UsersInGroupDocument = gql`
  query UsersInGroup($groupId: bigint!) {
    users(where: { userGroups: { groupId: { _eq: $groupId } } }) {
      nick
      role
      userId
      userGroups {
        group {
          groupsId
          groupName
        }
      }
    }
  }
`;

/**
 * __useUsersInGroupQuery__
 *
 * To run a query within a React component, call `useUsersInGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersInGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersInGroupQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useUsersInGroupQuery(
  baseOptions: Apollo.QueryHookOptions<
    UsersInGroupQuery,
    UsersInGroupQueryVariables
  > &
    (
      | { variables: UsersInGroupQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersInGroupQuery, UsersInGroupQueryVariables>(
    UsersInGroupDocument,
    options,
  );
}
export function useUsersInGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersInGroupQuery,
    UsersInGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersInGroupQuery, UsersInGroupQueryVariables>(
    UsersInGroupDocument,
    options,
  );
}
export function useUsersInGroupSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UsersInGroupQuery,
    UsersInGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UsersInGroupQuery, UsersInGroupQueryVariables>(
    UsersInGroupDocument,
    options,
  );
}
export type UsersInGroupQueryHookResult = ReturnType<
  typeof useUsersInGroupQuery
>;
export type UsersInGroupLazyQueryHookResult = ReturnType<
  typeof useUsersInGroupLazyQuery
>;
export type UsersInGroupSuspenseQueryHookResult = ReturnType<
  typeof useUsersInGroupSuspenseQuery
>;
export type UsersInGroupQueryResult = Apollo.QueryResult<
  UsersInGroupQuery,
  UsersInGroupQueryVariables
>;
