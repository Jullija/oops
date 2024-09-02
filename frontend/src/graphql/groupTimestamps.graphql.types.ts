import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GroupTimestampsQueryVariables = Types.Exact<{
  editionId: Types.Scalars["Int"]["input"];
}>;

export type GroupTimestampsQuery = {
  __typename?: "query_root";
  getPossibleGroupsTimeSpans: Array<{
    __typename?: "TimeSpansType";
    endTime: string;
    startTime: string;
  }>;
};

export const GroupTimestampsDocument = gql`
  query groupTimestamps($editionId: Int!) {
    getPossibleGroupsTimeSpans(editionId: $editionId) {
      endTime
      startTime
    }
  }
`;

/**
 * __useGroupTimestampsQuery__
 *
 * To run a query within a React component, call `useGroupTimestampsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupTimestampsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupTimestampsQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useGroupTimestampsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GroupTimestampsQuery,
    GroupTimestampsQueryVariables
  > &
    (
      | { variables: GroupTimestampsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroupTimestampsQuery, GroupTimestampsQueryVariables>(
    GroupTimestampsDocument,
    options,
  );
}
export function useGroupTimestampsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroupTimestampsQuery,
    GroupTimestampsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GroupTimestampsQuery,
    GroupTimestampsQueryVariables
  >(GroupTimestampsDocument, options);
}
export function useGroupTimestampsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GroupTimestampsQuery,
    GroupTimestampsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GroupTimestampsQuery,
    GroupTimestampsQueryVariables
  >(GroupTimestampsDocument, options);
}
export type GroupTimestampsQueryHookResult = ReturnType<
  typeof useGroupTimestampsQuery
>;
export type GroupTimestampsLazyQueryHookResult = ReturnType<
  typeof useGroupTimestampsLazyQuery
>;
export type GroupTimestampsSuspenseQueryHookResult = ReturnType<
  typeof useGroupTimestampsSuspenseQuery
>;
export type GroupTimestampsQueryResult = Apollo.QueryResult<
  GroupTimestampsQuery,
  GroupTimestampsQueryVariables
>;
