import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type StudentPointsQueryVariables = Types.Exact<{
  editionId: Types.Scalars["Int"]["input"];
  studentId: Types.Scalars["Int"]["input"];
}>;

export type StudentPointsQuery = {
  __typename?: "query_root";
  getStudentPoints: {
    __typename?: "StudentPointsType";
    sumOfAll: number;
    sumOfBonuses: number;
    sumOfPurePoints: number;
    user: {
      __typename?: "UserType";
      firstName: string;
      indexNumber: number;
      nick: string;
      secondName: string;
      userId: string;
      imageFile?: { __typename?: "FileType"; fileId: string } | null;
      userGroups: Array<{
        __typename?: "UserGroupType";
        group: {
          __typename?: "GroupType";
          groupsId: string;
          endTime: string;
          groupName: string;
          startTime: string;
          weekday: {
            __typename?: "WeekdayType";
            weekdayId: string;
            weekdayName: string;
          };
          teacher: {
            __typename?: "UserType";
            firstName: string;
            secondName: string;
          };
        };
      } | null>;
    };
    subcategoryPoints: Array<{
      __typename?: "SubcategoryPointsType";
      points: {
        __typename?: "PurePointsType";
        purePoints?: {
          __typename?: "PointType";
          value: number;
          createdAt: string;
          updatedAt: string;
          teacher: {
            __typename?: "UserType";
            firstName: string;
            secondName: string;
          };
        } | null;
        partialBonusType: Array<{
          __typename?: "PartialBonusType";
          partialValue: number;
          bonuses: {
            __typename?: "BonusType";
            award: {
              __typename?: "AwardType";
              awardName: string;
              imageFile?: { __typename?: "FileType"; fileId: string } | null;
            };
            points: {
              __typename?: "PointType";
              createdAt: string;
              updatedAt: string;
              teacher: {
                __typename?: "UserType";
                firstName: string;
                secondName: string;
              };
            };
          };
        } | null>;
      };
      subcategory: {
        __typename?: "SubcategoryType";
        subcategoryName: string;
        maxPoints: number;
        category: {
          __typename?: "CategoryType";
          categoryId: string;
          categoryName: string;
        };
      };
    }>;
  };
};

export const StudentPointsDocument = gql`
  query StudentPoints($editionId: Int!, $studentId: Int!) {
    getStudentPoints(editionId: $editionId, studentId: $studentId) {
      user {
        firstName
        indexNumber
        nick
        secondName
        imageFile {
          fileId
        }
        userId
        userGroups {
          group {
            groupsId
            endTime
            groupName
            startTime
            weekday {
              weekdayId
              weekdayName
            }
            teacher {
              firstName
              secondName
            }
          }
        }
      }
      sumOfAll
      sumOfBonuses
      sumOfPurePoints
      subcategoryPoints {
        points {
          purePoints {
            value
            teacher {
              firstName
              secondName
            }
            createdAt
            updatedAt
          }
          partialBonusType {
            partialValue
            bonuses {
              award {
                awardName
                imageFile {
                  fileId
                }
              }
              points {
                createdAt
                updatedAt
                teacher {
                  firstName
                  secondName
                }
              }
            }
          }
        }
        subcategory {
          subcategoryName
          category {
            categoryId
            categoryName
          }
          maxPoints
        }
      }
    }
  }
`;

/**
 * __useStudentPointsQuery__
 *
 * To run a query within a React component, call `useStudentPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentPointsQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentPointsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentPointsQuery,
    StudentPointsQueryVariables
  > &
    (
      | { variables: StudentPointsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StudentPointsQuery, StudentPointsQueryVariables>(
    StudentPointsDocument,
    options,
  );
}
export function useStudentPointsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentPointsQuery,
    StudentPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StudentPointsQuery, StudentPointsQueryVariables>(
    StudentPointsDocument,
    options,
  );
}
export function useStudentPointsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    StudentPointsQuery,
    StudentPointsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    StudentPointsQuery,
    StudentPointsQueryVariables
  >(StudentPointsDocument, options);
}
export type StudentPointsQueryHookResult = ReturnType<
  typeof useStudentPointsQuery
>;
export type StudentPointsLazyQueryHookResult = ReturnType<
  typeof useStudentPointsLazyQuery
>;
export type StudentPointsSuspenseQueryHookResult = ReturnType<
  typeof useStudentPointsSuspenseQuery
>;
export type StudentPointsQueryResult = Apollo.QueryResult<
  StudentPointsQuery,
  StudentPointsQueryVariables
>;
