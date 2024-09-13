import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GroupPointsQueryVariables = Types.Exact<{
  groupId: Types.Scalars["Int"]["input"];
}>;

export type GroupPointsQuery = {
  __typename?: "query_root";
  getUsersInGroupWithPoints: Array<{
    __typename?: "UserPointsType";
    user: {
      __typename?: "UserType";
      firstName: string;
      secondName: string;
      userId: string;
      indexNumber: number;
      nick: string;
    };
    categoriesPoints: Array<{
      __typename?: "CategoryPointsType";
      category: {
        __typename?: "CategoryType";
        categoryId: string;
        categoryName: string;
      };
      subcategoryPoints: Array<{
        __typename?: "SubcategoryPointsType";
        createdAt: string;
        updatedAt: string;
        subcategory: {
          __typename?: "SubcategoryType";
          maxPoints: number;
          subcategoryId: string;
          subcategoryName: string;
        };
        points: {
          __typename?: "PurePointsType";
          purePoints?: { __typename?: "PointType"; value: number } | null;
        };
      }>;
    }>;
  } | null>;
};

export const GroupPointsDocument = gql`
  query GroupPoints($groupId: Int!) {
    getUsersInGroupWithPoints(groupId: $groupId) {
      user {
        firstName
        secondName
        userId
        indexNumber
        nick
      }
      categoriesPoints {
        category {
          categoryId
          categoryName
        }
        subcategoryPoints {
          createdAt
          updatedAt
          subcategory {
            maxPoints
            subcategoryId
            subcategoryName
          }
          points {
            purePoints {
              value
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGroupPointsQuery__
 *
 * To run a query within a React component, call `useGroupPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupPointsQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGroupPointsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GroupPointsQuery,
    GroupPointsQueryVariables
  > &
    (
      | { variables: GroupPointsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroupPointsQuery, GroupPointsQueryVariables>(
    GroupPointsDocument,
    options,
  );
}
export function useGroupPointsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroupPointsQuery,
    GroupPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GroupPointsQuery, GroupPointsQueryVariables>(
    GroupPointsDocument,
    options,
  );
}
export function useGroupPointsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GroupPointsQuery,
    GroupPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GroupPointsQuery, GroupPointsQueryVariables>(
    GroupPointsDocument,
    options,
  );
}
export type GroupPointsQueryHookResult = ReturnType<typeof useGroupPointsQuery>;
export type GroupPointsLazyQueryHookResult = ReturnType<
  typeof useGroupPointsLazyQuery
>;
export type GroupPointsSuspenseQueryHookResult = ReturnType<
  typeof useGroupPointsSuspenseQuery
>;
export type GroupPointsQueryResult = Apollo.QueryResult<
  GroupPointsQuery,
  GroupPointsQueryVariables
>;
