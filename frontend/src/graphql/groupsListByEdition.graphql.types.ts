import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GroupsListByEditionQueryVariables = Types.Exact<{
  editionId: Types.Scalars["bigint"]["input"];
}>;

export type GroupsListByEditionQuery = {
  __typename?: "query_root";
  editionByPk?: {
    __typename?: "Edition";
    groups: Array<{
      __typename?: "Groups";
      groupName: string;
      groupsId: string;
      userGroups: Array<{
        __typename?: "UserGroups";
        user: {
          __typename?: "Users";
          userId: string;
          fullName?: string | null;
          role: string;
        };
      }>;
    }>;
  } | null;
};

export const GroupsListByEditionDocument = gql`
  query groupsListByEdition($editionId: bigint!) {
    editionByPk(editionId: $editionId) {
      groups {
        groupName
        groupsId
        userGroups(where: { user: { role: { _eq: "teacher" } } }) {
          user {
            userId
            fullName
            role
          }
        }
      }
    }
  }
`;

/**
 * __useGroupsListByEditionQuery__
 *
 * To run a query within a React component, call `useGroupsListByEditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsListByEditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsListByEditionQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useGroupsListByEditionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GroupsListByEditionQuery,
    GroupsListByEditionQueryVariables
  > &
    (
      | { variables: GroupsListByEditionQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GroupsListByEditionQuery,
    GroupsListByEditionQueryVariables
  >(GroupsListByEditionDocument, options);
}
export function useGroupsListByEditionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroupsListByEditionQuery,
    GroupsListByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GroupsListByEditionQuery,
    GroupsListByEditionQueryVariables
  >(GroupsListByEditionDocument, options);
}
export function useGroupsListByEditionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GroupsListByEditionQuery,
    GroupsListByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GroupsListByEditionQuery,
    GroupsListByEditionQueryVariables
  >(GroupsListByEditionDocument, options);
}
export type GroupsListByEditionQueryHookResult = ReturnType<
  typeof useGroupsListByEditionQuery
>;
export type GroupsListByEditionLazyQueryHookResult = ReturnType<
  typeof useGroupsListByEditionLazyQuery
>;
export type GroupsListByEditionSuspenseQueryHookResult = ReturnType<
  typeof useGroupsListByEditionSuspenseQuery
>;
export type GroupsListByEditionQueryResult = Apollo.QueryResult<
  GroupsListByEditionQuery,
  GroupsListByEditionQueryVariables
>;
