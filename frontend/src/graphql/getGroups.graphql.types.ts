import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetGroupsQueryVariables = Types.Exact<{
  editionId: Types.Scalars["bigint"]["input"];
}>;

export type GetGroupsQuery = {
  __typename?: "query_root";
  edition: Array<{
    __typename?: "Edition";
    groups: Array<{
      __typename?: "Groups";
      groupName: string;
      groupsId: string;
      userGroups: Array<{
        __typename?: "UserGroups";
        user: {
          __typename?: "Users";
          fullName?: string | null;
          role: string;
          userId: string;
        };
      }>;
    }>;
  }>;
};

export const GetGroupsDocument = gql`
  query getGroups($editionId: bigint!) {
    edition(where: { editionId: { _eq: $editionId } }) {
      groups {
        groupName
        groupsId
        userGroups(where: { user: { role: { _eq: "student" } } }) {
          user {
            fullName
            role
            userId
          }
        }
      }
    }
  }
`;

/**
 * __useGetGroupsQuery__
 *
 * To run a query within a React component, call `useGetGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useGetGroupsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGroupsQuery,
    GetGroupsQueryVariables
  > &
    (
      | { variables: GetGroupsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGroupsQuery, GetGroupsQueryVariables>(
    GetGroupsDocument,
    options,
  );
}
export function useGetGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGroupsQuery,
    GetGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGroupsQuery, GetGroupsQueryVariables>(
    GetGroupsDocument,
    options,
  );
}
export function useGetGroupsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetGroupsQuery,
    GetGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetGroupsQuery, GetGroupsQueryVariables>(
    GetGroupsDocument,
    options,
  );
}
export type GetGroupsQueryHookResult = ReturnType<typeof useGetGroupsQuery>;
export type GetGroupsLazyQueryHookResult = ReturnType<
  typeof useGetGroupsLazyQuery
>;
export type GetGroupsSuspenseQueryHookResult = ReturnType<
  typeof useGetGroupsSuspenseQuery
>;
export type GetGroupsQueryResult = Apollo.QueryResult<
  GetGroupsQuery,
  GetGroupsQueryVariables
>;
