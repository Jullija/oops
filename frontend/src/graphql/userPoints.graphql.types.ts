import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserPointsQueryVariables = Types.Exact<{
  id: Types.Scalars["bigint"]["input"];
  editionId: Types.Scalars["bigint"]["input"];
}>;

export type UserPointsQuery = {
  __typename?: "query_root";
  usersByPk?: {
    __typename?: "Users";
    userId: string;
    firstName: string;
    indexNumber: number;
    nick: string;
    role: string;
    secondName: string;
    points: Array<{
      __typename?: "Points";
      createdAt: string;
      label: string;
      pointsId: string;
      value: string;
      userByTeacherId: {
        __typename?: "Users";
        userId: string;
        secondName: string;
        role: string;
        firstName: string;
        nick: string;
      };
      subcategory: {
        __typename?: "Subcategories";
        subcategoryId: string;
        subcategoryName: string;
        label: string;
        category: {
          __typename?: "Categories";
          categoryId: string;
          categoryName: string;
          label: string;
        };
      };
      bonuses: Array<{
        __typename?: "Bonuses";
        bonusId: string;
        updatedAt: string;
        label: string;
        createdAt: string;
        award: {
          __typename?: "Award";
          awardName: string;
          awardType: string;
          awardId: string;
        };
        chestHistory?: {
          __typename?: "ChestHistory";
          chestHistoryId: string;
          chestId: string;
          createdAt: string;
          label: string;
        } | null;
      }>;
    }>;
  } | null;
};

export const UserPointsDocument = gql`
  query UserPoints($id: bigint!, $editionId: bigint!) {
    usersByPk(userId: $id) {
      userId
      firstName
      indexNumber
      nick
      role
      secondName
      points(where: { subcategory: { editionId: { _eq: $editionId } } }) {
        createdAt
        label
        pointsId
        value
        userByTeacherId {
          userId
          secondName
          role
          firstName
          nick
        }
        subcategory {
          subcategoryId
          subcategoryName
          category {
            categoryId
            categoryName
            label
          }
          label
        }
        bonuses {
          award {
            awardName
            awardType
            awardId
          }
          bonusId
          chestHistory {
            chestHistoryId
            chestId
            createdAt
            label
          }
          updatedAt
          label
          createdAt
        }
      }
    }
  }
`;

/**
 * __useUserPointsQuery__
 *
 * To run a query within a React component, call `useUserPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPointsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useUserPointsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserPointsQuery,
    UserPointsQueryVariables
  > &
    (
      | { variables: UserPointsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserPointsQuery, UserPointsQueryVariables>(
    UserPointsDocument,
    options,
  );
}
export function useUserPointsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserPointsQuery,
    UserPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserPointsQuery, UserPointsQueryVariables>(
    UserPointsDocument,
    options,
  );
}
export function useUserPointsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UserPointsQuery,
    UserPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserPointsQuery, UserPointsQueryVariables>(
    UserPointsDocument,
    options,
  );
}
export type UserPointsQueryHookResult = ReturnType<typeof useUserPointsQuery>;
export type UserPointsLazyQueryHookResult = ReturnType<
  typeof useUserPointsLazyQuery
>;
export type UserPointsSuspenseQueryHookResult = ReturnType<
  typeof useUserPointsSuspenseQuery
>;
export type UserPointsQueryResult = Apollo.QueryResult<
  UserPointsQuery,
  UserPointsQueryVariables
>;
