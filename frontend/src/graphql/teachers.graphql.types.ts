import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type TeachersQueryVariables = Types.Exact<{
  editionId: Types.Scalars["bigint"]["input"];
}>;

export type TeachersQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "Users";
    userId: string;
    fullName?: string | null;
  }>;
};

export const TeachersDocument = gql`
  query teachers($editionId: bigint!) {
    users(
      where: {
        _and: {
          role: { _in: ["teacher", "coordinator"] }
          userGroups: { group: { editionId: { _eq: $editionId } } }
        }
      }
    ) {
      userId
      fullName
    }
  }
`;

/**
 * __useTeachersQuery__
 *
 * To run a query within a React component, call `useTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeachersQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useTeachersQuery(
  baseOptions: Apollo.QueryHookOptions<TeachersQuery, TeachersQueryVariables> &
    ({ variables: TeachersQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TeachersQuery, TeachersQueryVariables>(
    TeachersDocument,
    options,
  );
}
export function useTeachersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TeachersQuery,
    TeachersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TeachersQuery, TeachersQueryVariables>(
    TeachersDocument,
    options,
  );
}
export function useTeachersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    TeachersQuery,
    TeachersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TeachersQuery, TeachersQueryVariables>(
    TeachersDocument,
    options,
  );
}
export type TeachersQueryHookResult = ReturnType<typeof useTeachersQuery>;
export type TeachersLazyQueryHookResult = ReturnType<
  typeof useTeachersLazyQuery
>;
export type TeachersSuspenseQueryHookResult = ReturnType<
  typeof useTeachersSuspenseQuery
>;
export type TeachersQueryResult = Apollo.QueryResult<
  TeachersQuery,
  TeachersQueryVariables
>;
