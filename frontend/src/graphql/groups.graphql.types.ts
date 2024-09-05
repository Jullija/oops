import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GroupsQueryVariables = Types.Exact<{
  editionId: Types.Scalars["bigint"]["input"];
}>;

export type GroupsQuery = {
  __typename?: "query_root";
  editionByPk?: {
    __typename?: "Edition";
    groups: Array<{
      __typename?: "Groups";
      groupName: string;
      groupsId: string;
      startTime: string;
      endTime: string;
      weekday: {
        __typename?: "Weekdays";
        weekdayId: string;
        weekdayName: string;
      };
      userByTeacherId?: {
        __typename?: "Users";
        fullName?: string | null;
        userId: string;
        secondName: string;
        firstName: string;
      } | null;
    }>;
  } | null;
};

export const GroupsDocument = gql`
  query Groups($editionId: bigint!) {
    editionByPk(editionId: $editionId) {
      groups {
        groupName
        groupsId
        startTime
        weekday {
          weekdayId
          weekdayName
        }
        endTime
        userByTeacherId {
          fullName
          userId
          secondName
          firstName
        }
      }
    }
  }
`;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useGroupsQuery(
  baseOptions: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables> &
    ({ variables: GroupsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroupsQuery, GroupsQueryVariables>(
    GroupsDocument,
    options,
  );
}
export function useGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GroupsQuery, GroupsQueryVariables>(
    GroupsDocument,
    options,
  );
}
export function useGroupsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GroupsQuery,
    GroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GroupsQuery, GroupsQueryVariables>(
    GroupsDocument,
    options,
  );
}
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsSuspenseQueryHookResult = ReturnType<
  typeof useGroupsSuspenseQuery
>;
export type GroupsQueryResult = Apollo.QueryResult<
  GroupsQuery,
  GroupsQueryVariables
>;
