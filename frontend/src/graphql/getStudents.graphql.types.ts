import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetStudentsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetStudentsQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "Users";
    fullName?: string | null;
    userId: string;
  }>;
};

export const GetStudentsDocument = gql`
  query getStudents {
    users(where: { role: { _eq: "student" } }) {
      fullName
      userId
    }
  }
`;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStudentsQuery,
    GetStudentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(
    GetStudentsDocument,
    options,
  );
}
export function useGetStudentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStudentsQuery,
    GetStudentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(
    GetStudentsDocument,
    options,
  );
}
export function useGetStudentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetStudentsQuery,
    GetStudentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetStudentsQuery, GetStudentsQueryVariables>(
    GetStudentsDocument,
    options,
  );
}
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<
  typeof useGetStudentsLazyQuery
>;
export type GetStudentsSuspenseQueryHookResult = ReturnType<
  typeof useGetStudentsSuspenseQuery
>;
export type GetStudentsQueryResult = Apollo.QueryResult<
  GetStudentsQuery,
  GetStudentsQueryVariables
>;
