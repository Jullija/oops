import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type StudentsInGroupQueryVariables = Types.Exact<{
  groupId: Types.Scalars["bigint"]["input"];
}>;

export type StudentsInGroupQuery = {
  __typename?: "query_root";
  userGroups: Array<{
    __typename?: "UserGroups";
    user: { __typename?: "Users"; fullName?: string | null; userId: string };
  }>;
};

export const StudentsInGroupDocument = gql`
  query StudentsInGroup($groupId: bigint!) {
    userGroups(
      where: { groupId: { _eq: $groupId }, user: { role: { _eq: "student" } } }
    ) {
      user {
        fullName
        userId
      }
    }
  }
`;

/**
 * __useStudentsInGroupQuery__
 *
 * To run a query within a React component, call `useStudentsInGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsInGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsInGroupQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useStudentsInGroupQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentsInGroupQuery,
    StudentsInGroupQueryVariables
  > &
    (
      | { variables: StudentsInGroupQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StudentsInGroupQuery, StudentsInGroupQueryVariables>(
    StudentsInGroupDocument,
    options,
  );
}
export function useStudentsInGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentsInGroupQuery,
    StudentsInGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentsInGroupQuery,
    StudentsInGroupQueryVariables
  >(StudentsInGroupDocument, options);
}
export function useStudentsInGroupSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    StudentsInGroupQuery,
    StudentsInGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    StudentsInGroupQuery,
    StudentsInGroupQueryVariables
  >(StudentsInGroupDocument, options);
}
export type StudentsInGroupQueryHookResult = ReturnType<
  typeof useStudentsInGroupQuery
>;
export type StudentsInGroupLazyQueryHookResult = ReturnType<
  typeof useStudentsInGroupLazyQuery
>;
export type StudentsInGroupSuspenseQueryHookResult = ReturnType<
  typeof useStudentsInGroupSuspenseQuery
>;
export type StudentsInGroupQueryResult = Apollo.QueryResult<
  StudentsInGroupQuery,
  StudentsInGroupQueryVariables
>;
