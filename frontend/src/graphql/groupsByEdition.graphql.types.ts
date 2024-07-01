import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GroupsByEditionQueryVariables = Types.Exact<{
  editionId?: Types.InputMaybe<Types.Scalars["bigint"]["input"]>;
}>;

export type GroupsByEditionQuery = {
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

export const GroupsByEditionDocument = gql`
  query groupsByEdition($editionId: bigint) {
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
 * __useGroupsByEditionQuery__
 *
 * To run a query within a React component, call `useGroupsByEditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsByEditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsByEditionQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useGroupsByEditionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GroupsByEditionQuery,
    GroupsByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroupsByEditionQuery, GroupsByEditionQueryVariables>(
    GroupsByEditionDocument,
    options,
  );
}
export function useGroupsByEditionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroupsByEditionQuery,
    GroupsByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GroupsByEditionQuery,
    GroupsByEditionQueryVariables
  >(GroupsByEditionDocument, options);
}
export function useGroupsByEditionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GroupsByEditionQuery,
    GroupsByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GroupsByEditionQuery,
    GroupsByEditionQueryVariables
  >(GroupsByEditionDocument, options);
}
export type GroupsByEditionQueryHookResult = ReturnType<
  typeof useGroupsByEditionQuery
>;
export type GroupsByEditionLazyQueryHookResult = ReturnType<
  typeof useGroupsByEditionLazyQuery
>;
export type GroupsByEditionSuspenseQueryHookResult = ReturnType<
  typeof useGroupsByEditionSuspenseQuery
>;
export type GroupsByEditionQueryResult = Apollo.QueryResult<
  GroupsByEditionQuery,
  GroupsByEditionQueryVariables
>;
