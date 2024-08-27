import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GroupTimesQueryVariables = Types.Exact<{
  editionId: Types.Scalars["Int"]["input"];
}>;

export type GroupTimesQuery = {
  __typename?: "query_root";
  getPossibleGroupsTimeSpans: Array<{
    __typename?: "TimeSpansType";
    endTime?: string | null;
    startTime?: string | null;
  }>;
};

export const GroupTimesDocument = gql`
  query groupTimes($editionId: Int!) {
    getPossibleGroupsTimeSpans(editionId: $editionId) {
      endTime
      startTime
    }
  }
`;

/**
 * __useGroupTimesQuery__
 *
 * To run a query within a React component, call `useGroupTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupTimesQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useGroupTimesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GroupTimesQuery,
    GroupTimesQueryVariables
  > &
    (
      | { variables: GroupTimesQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroupTimesQuery, GroupTimesQueryVariables>(
    GroupTimesDocument,
    options,
  );
}
export function useGroupTimesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroupTimesQuery,
    GroupTimesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GroupTimesQuery, GroupTimesQueryVariables>(
    GroupTimesDocument,
    options,
  );
}
export function useGroupTimesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GroupTimesQuery,
    GroupTimesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GroupTimesQuery, GroupTimesQueryVariables>(
    GroupTimesDocument,
    options,
  );
}
export type GroupTimesQueryHookResult = ReturnType<typeof useGroupTimesQuery>;
export type GroupTimesLazyQueryHookResult = ReturnType<
  typeof useGroupTimesLazyQuery
>;
export type GroupTimesSuspenseQueryHookResult = ReturnType<
  typeof useGroupTimesSuspenseQuery
>;
export type GroupTimesQueryResult = Apollo.QueryResult<
  GroupTimesQuery,
  GroupTimesQueryVariables
>;
