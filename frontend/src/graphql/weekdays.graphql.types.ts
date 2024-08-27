import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type WeekdaysQueryVariables = Types.Exact<{
  editionId: Types.Scalars["Int"]["input"];
}>;

export type WeekdaysQuery = {
  __typename?: "query_root";
  getPossibleGroupsWeekdays: Array<string>;
};

export const WeekdaysDocument = gql`
  query weekdays($editionId: Int!) {
    getPossibleGroupsWeekdays(editionId: $editionId)
  }
`;

/**
 * __useWeekdaysQuery__
 *
 * To run a query within a React component, call `useWeekdaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeekdaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeekdaysQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useWeekdaysQuery(
  baseOptions: Apollo.QueryHookOptions<WeekdaysQuery, WeekdaysQueryVariables> &
    ({ variables: WeekdaysQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WeekdaysQuery, WeekdaysQueryVariables>(
    WeekdaysDocument,
    options,
  );
}
export function useWeekdaysLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WeekdaysQuery,
    WeekdaysQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WeekdaysQuery, WeekdaysQueryVariables>(
    WeekdaysDocument,
    options,
  );
}
export function useWeekdaysSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    WeekdaysQuery,
    WeekdaysQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<WeekdaysQuery, WeekdaysQueryVariables>(
    WeekdaysDocument,
    options,
  );
}
export type WeekdaysQueryHookResult = ReturnType<typeof useWeekdaysQuery>;
export type WeekdaysLazyQueryHookResult = ReturnType<
  typeof useWeekdaysLazyQuery
>;
export type WeekdaysSuspenseQueryHookResult = ReturnType<
  typeof useWeekdaysSuspenseQuery
>;
export type WeekdaysQueryResult = Apollo.QueryResult<
  WeekdaysQuery,
  WeekdaysQueryVariables
>;
