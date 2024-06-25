import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetGroupQueryVariables = Types.Exact<{
  editionId: Types.Scalars["bigint"]["input"];
  groupId: Types.Scalars["bigint"]["input"];
}>;

export type GetGroupQuery = {
  __typename?: "query_root";
  groups: Array<{
    __typename?: "Groups";
    groupName: string;
    userGroups: Array<{
      __typename?: "UserGroups";
      userId: string;
      user: { __typename?: "Users"; firstName: string; secondName: string };
    }>;
  }>;
};

export const GetGroupDocument = gql`
  query getGroup($editionId: bigint!, $groupId: bigint!) {
    groups(
      where: { editionId: { _eq: $editionId }, groupsId: { _eq: $groupId } }
    ) {
      userGroups(orderBy: { user: { secondName: ASC, firstName: ASC } }) {
        userId
        user {
          firstName
          secondName
        }
      }
      groupName
    }
  }
`;

/**
 * __useGetGroupQuery__
 *
 * To run a query within a React component, call `useGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetGroupQuery(
  baseOptions: Apollo.QueryHookOptions<GetGroupQuery, GetGroupQueryVariables> &
    ({ variables: GetGroupQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGroupQuery, GetGroupQueryVariables>(
    GetGroupDocument,
    options,
  );
}
export function useGetGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGroupQuery,
    GetGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGroupQuery, GetGroupQueryVariables>(
    GetGroupDocument,
    options,
  );
}
export function useGetGroupSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetGroupQuery,
    GetGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetGroupQuery, GetGroupQueryVariables>(
    GetGroupDocument,
    options,
  );
}
export type GetGroupQueryHookResult = ReturnType<typeof useGetGroupQuery>;
export type GetGroupLazyQueryHookResult = ReturnType<
  typeof useGetGroupLazyQuery
>;
export type GetGroupSuspenseQueryHookResult = ReturnType<
  typeof useGetGroupSuspenseQuery
>;
export type GetGroupQueryResult = Apollo.QueryResult<
  GetGroupQuery,
  GetGroupQueryVariables
>;
